// Client-Side Robust Multi-MB Storage (IndexedDB + LocalStorage fallback)
// Chống mất đề thi tuyệt đối khi máy chủ Render free bị ngủ đông hoặc reset

const DB_NAME = 'QuizMasterAppDB';
const DB_VERSION = 1;
const STORE_NAME = 'quiz_storage';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export const dbStorage = {
  async get<T>(key: string): Promise<T | null> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result !== undefined ? req.result : null);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    }
  },

  async set<T>(key: string, value: T): Promise<void> {
    try {
      const db = await openDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(value, key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    }
  },

  // Lưu trữ toàn bộ câu hỏi vào bộ nhớ trình duyệt bền vững
  async saveLocalBackup(questions: any[]): Promise<void> {
    if (!Array.isArray(questions) || questions.length === 0) return;
    await this.set('local_backup_quiz_questions', questions);
  },

  // Đọc danh sách câu hỏi đã lưu trữ
  async getLocalBackup(): Promise<any[] | null> {
    return await this.get<any[]>('local_backup_quiz_questions');
  },

  // Đánh dấu một bộ đề đã bị người dùng chủ động xóa
  async markCategoryDeleted(category: string): Promise<void> {
    const list = (await this.get<string[]>('deleted_categories')) || [];
    const catClean = (category || '').trim().toLowerCase();
    if (catClean && !list.includes(catClean)) {
      list.push(catClean);
      await this.set('deleted_categories', list);
    }
  },

  // Bỏ đánh dấu nếu người dùng nạp lại bộ đề đó
  async unmarkCategoryDeleted(category: string): Promise<void> {
    const list = (await this.get<string[]>('deleted_categories')) || [];
    const catClean = (category || '').trim().toLowerCase();
    const updated = list.filter((c) => c !== catClean);
    await this.set('deleted_categories', updated);
  },

  async isCategoryDeleted(category: string): Promise<boolean> {
    const list = (await this.get<string[]>('deleted_categories')) || [];
    return list.includes((category || '').trim().toLowerCase());
  },

  // Hàm tự động đồng bộ 2 chiều thông minh giữa Client và Server (Render)
  async syncWithServer(serverQuestions: any[], api: any): Promise<any[]> {
    try {
      let qList = [...serverQuestions];
      const deletedCats = (await this.get<string[]>('deleted_categories')) || [];

      // 1. Nếu trên server có những câu hỏi thuộc bộ đề người dùng đã chủ động XÓA trước đó
      // (thường xảy ra khi Render vừa khởi động lại và tải lại file demo cũ từ Git)
      const serverZombieCats = new Set<string>();
      qList.forEach((q) => {
        const catClean = (q.category || '').trim().toLowerCase();
        if (deletedCats.includes(catClean)) {
          serverZombieCats.add(q.category);
        }
      });

      if (serverZombieCats.size > 0) {
        for (const zombieCat of Array.from(serverZombieCats)) {
          console.log(`[Auto-Sync] Tự động dọn dẹp bộ đề đã xóa (${zombieCat}) trên server sau khi Render khởi động lại...`);
          try {
            await api.deleteQuestionSet(zombieCat);
          } catch {}
        }
        // Lọc bỏ khỏi danh sách cục bộ
        qList = qList.filter((q) => !deletedCats.includes((q.category || '').trim().toLowerCase()));
      }

      // 2. Kiểm tra các câu hỏi trong bộ nhớ Client mà server bị THIẾU
      // (thường xảy ra khi người dùng nạp đề nhưng server Render sau đó ngủ đông và mất file)
      const cached = await this.getLocalBackup();
      if (Array.isArray(cached) && cached.length > 0) {
        // Chỉ khôi phục những câu hỏi không nằm trong danh sách đã xóa
        const validCached = cached.filter((cq) => !deletedCats.includes((cq.category || '').trim().toLowerCase()));
        const serverSignatures = new Set(
          qList.map((q) => `${(q.content || '').trim()}||${(q.category || '').trim()}`)
        );

        const missing = validCached.filter(
          (cq) => !serverSignatures.has(`${(cq.content || '').trim()}||${(cq.category || '').trim()}`)
        );

        if (missing.length > 0) {
          console.log(`[Auto-Sync] Tự động khôi phục ${missing.length} câu hỏi dự phòng từ máy của bạn lên server Render...`);
          try {
            const res = await api.bulkImportQuestions(missing, 'APPEND', false);
            if (res.questions && res.questions.length > 0) {
              qList = res.questions;
            } else {
              qList = [...qList, ...missing];
            }
          } catch {
            qList = [...qList, ...missing];
          }
        }
      }

      // Cập nhật lại bộ nhớ bền vững Client với danh sách mới nhất
      if (qList.length > 0) {
        await this.saveLocalBackup(qList);
      }

      return qList;
    } catch (err) {
      console.warn('[Auto-Sync] Gặp lỗi khi đồng bộ câu hỏi:', err);
      return serverQuestions;
    }
  }
};
