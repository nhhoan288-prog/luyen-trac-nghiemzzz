var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express2 = __toESM(require("express"), 1);
var import_http = __toESM(require("http"), 1);
var import_path3 = __toESM(require("path"), 1);
var import_vite = require("vite");

// server/api.ts
var import_express = require("express");
var import_os = __toESM(require("os"), 1);
var import_fs2 = __toESM(require("fs"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_child_process = require("child_process");
var import_word_extractor = __toESM(require("word-extractor"), 1);

// server/database.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var import_pg = __toESM(require("pg"), 1);

// server/demoData.ts
var DEMO_TEAMS = [
  { team_id: "TEAM01", team_number: 1, team_name: "\u0110\u1ED9i 01", display_name: "\u0110\u1ED9i 01 - R\u1ED3ng V\xE0ng", status: "ACTIVE", connected: false, avatar_color: "#3B82F6", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM02", team_number: 2, team_name: "\u0110\u1ED9i 02", display_name: "\u0110\u1ED9i 02 - Ph\u01B0\u1EE3ng Ho\xE0ng", status: "ACTIVE", connected: false, avatar_color: "#EF4444", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM03", team_number: 3, team_name: "\u0110\u1ED9i 03", display_name: "\u0110\u1ED9i 03 - K\u1EF3 L\xE2n", status: "ACTIVE", connected: false, avatar_color: "#10B981", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM04", team_number: 4, team_name: "\u0110\u1ED9i 04", display_name: "\u0110\u1ED9i 04 - B\u1EA1ch H\u1ED5", status: "ACTIVE", connected: false, avatar_color: "#F59E0B", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM05", team_number: 5, team_name: "\u0110\u1ED9i 05", display_name: "\u0110\u1ED9i 05 - Tia Ch\u1EDBp", status: "ACTIVE", connected: false, avatar_color: "#8B5CF6", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM06", team_number: 6, team_name: "\u0110\u1ED9i 06", display_name: "\u0110\u1ED9i 06 - Ng\u1ECDn L\u1EEDa", status: "ACTIVE", connected: false, avatar_color: "#EC4899", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM07", team_number: 7, team_name: "\u0110\u1ED9i 07", display_name: "\u0110\u1ED9i 07 - B\xE3o T\xE1p", status: "ACTIVE", connected: false, avatar_color: "#06B6D4", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM08", team_number: 8, team_name: "\u0110\u1ED9i 08", display_name: "\u0110\u1ED9i 08 - \u0110\u1EC9nh Cao", status: "ACTIVE", connected: false, avatar_color: "#84CC16", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM09", team_number: 9, team_name: "\u0110\u1ED9i 09", display_name: "\u0110\u1ED9i 09 - Sao B\u0103ng", status: "ACTIVE", connected: false, avatar_color: "#F97316", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM10", team_number: 10, team_name: "\u0110\u1ED9i 10", display_name: "\u0110\u1ED9i 10 - Kim C\u01B0\u01A1ng", status: "ACTIVE", connected: false, avatar_color: "#6366F1", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM11", team_number: 11, team_name: "\u0110\u1ED9i 11", display_name: "\u0110\u1ED9i 11 - Th\u1EA7n T\u1ED1c", status: "ACTIVE", connected: false, avatar_color: "#14B8A6", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM12", team_number: 12, team_name: "\u0110\u1ED9i 12", display_name: "\u0110\u1ED9i 12 - Tr\xED Tu\u1EC7", status: "ACTIVE", connected: false, avatar_color: "#D946EF", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM13", team_number: 13, team_name: "\u0110\u1ED9i 13", display_name: "\u0110\u1ED9i 13 - \u0110\u1EA1i B\xE0ng", status: "ACTIVE", connected: false, avatar_color: "#EAB308", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM14", team_number: 14, team_name: "\u0110\u1ED9i 14", display_name: "\u0110\u1ED9i 14 - Chi\u1EBFn Binh", status: "ACTIVE", connected: false, avatar_color: "#64748B", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM15", team_number: 15, team_name: "\u0110\u1ED9i 15", display_name: "\u0110\u1ED9i 15 - Ti\xEAn Phong", status: "ACTIVE", connected: false, avatar_color: "#0EA5E9", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM16", team_number: 16, team_name: "\u0110\u1ED9i 16", display_name: "\u0110\u1ED9i 16 - B\u1EA5t B\u1EA1i", status: "ACTIVE", connected: false, avatar_color: "#22C55E", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM17", team_number: 17, team_name: "\u0110\u1ED9i 17", display_name: "\u0110\u1ED9i 17 - V\xF4 \u0110\u1ECBch", status: "ACTIVE", connected: false, avatar_color: "#A855F7", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM18", team_number: 18, team_name: "\u0110\u1ED9i 18", display_name: "\u0110\u1ED9i 18 - Kh\xE1t V\u1ECDng", status: "ACTIVE", connected: false, avatar_color: "#F43F5E", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM19", team_number: 19, team_name: "\u0110\u1ED9i 19", display_name: "\u0110\u1ED9i 19 - S\xE1ng T\u1EA1o", status: "ACTIVE", connected: false, avatar_color: "#38BDF8", created_at: (/* @__PURE__ */ new Date()).toISOString() },
  { team_id: "TEAM20", team_number: 20, team_name: "\u0110\u1ED9i 20", display_name: "\u0110\u1ED9i 20 - Tinh Hoa", status: "ACTIVE", connected: false, avatar_color: "#FB923C", created_at: (/* @__PURE__ */ new Date()).toISOString() }
];
var DEMO_QUESTIONS = [
  {
    id: "Q01",
    question_number: 1,
    content: "M\xF4 h\xECnh OSI (Open Systems Interconnection) g\u1ED3m c\xF3 bao nhi\xEAu t\u1EA7ng?",
    option_a: "4 t\u1EA7ng",
    option_b: "5 t\u1EA7ng",
    option_c: "7 t\u1EA7ng",
    option_d: "8 t\u1EA7ng",
    correct_answer: "C",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "M\xF4 h\xECnh OSI g\u1ED3m 7 t\u1EA7ng: V\u1EADt l\xFD, Li\xEAn k\u1EBFt d\u1EEF li\u1EC7u, M\u1EA1ng, Giao v\u1EADn, Phi\xEAn, Tr\xECnh di\u1EC5n, \u1EE8ng d\u1EE5ng.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q02",
    question_number: 2,
    content: "Giao th\u1EE9c n\xE0o ho\u1EA1t \u0111\u1ED9ng \u1EDF t\u1EA7ng Giao v\u1EADn (Transport Layer) v\xE0 cung c\u1EA5p d\u1ECBch v\u1EE5 truy\u1EC1n d\u1EEF li\u1EC7u tin c\u1EADy (reliable)?",
    option_a: "UDP",
    option_b: "TCP",
    option_c: "IP",
    option_d: "ICMP",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "TCP (Transmission Control Protocol) l\xE0 giao th\u1EE9c h\u01B0\u1EDBng k\u1EBFt n\u1ED1i v\xE0 \u0111\u1EA3m b\u1EA3o \u0111\u1ED9 tin c\u1EADy.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q03",
    question_number: 3,
    content: "C\u1EA5u tr\xFAc d\u1EEF li\u1EC7u n\xE0o ho\u1EA1t \u0111\u1ED9ng theo nguy\xEAn t\u1EAFc LIFO (Last In First Out)?",
    option_a: "Queue (H\xE0ng \u0111\u1EE3i)",
    option_b: "Stack (Ng\u0103n x\u1EBFp)",
    option_c: "Linked List (Danh s\xE1ch li\xEAn k\u1EBFt)",
    option_d: "Binary Tree (C\xE2y nh\u1ECB ph\xE2n)",
    correct_answer: "B",
    points: 0.6,
    category: "C\u1EA5u tr\xFAc d\u1EEF li\u1EC7u",
    explanation: "Ng\u0103n x\u1EBFp (Stack) \u0111\u01B0a ph\u1EA7n t\u1EED v\xE0o sau c\xF9ng v\xE0 l\u1EA5y ra \u0111\u1EA7u ti\xEAn (LIFO).",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q04",
    question_number: 4,
    content: "Trong h\u1EC7 \u0111i\u1EC1u h\xE0nh Linux, l\u1EC7nh n\xE0o \u0111\u01B0\u1EE3c d\xF9ng \u0111\u1EC3 ki\u1EC3m tra \u0111\u1ECBa ch\u1EC9 IP c\u1EE7a c\xE1c card m\u1EA1ng?",
    option_a: "ip a ho\u1EB7c ifconfig",
    option_b: "ping -a",
    option_c: "netstat -l",
    option_d: "traceroute",
    correct_answer: "A",
    points: 0.6,
    category: "H\u1EC7 \u0111i\u1EC1u h\xE0nh",
    explanation: "L\u1EC7nh `ip a` (ho\u1EB7c `ip addr`, `ifconfig`) d\xF9ng \u0111\u1EC3 hi\u1EC3n th\u1ECB c\u1EA5u h\xECnh m\u1EA1ng v\xE0 \u0111\u1ECBa ch\u1EC9 IP.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q05",
    question_number: 5,
    content: "Thu\u1EADt to\xE1n m\xE3 h\xF3a b\u1EA5t \u0111\u1ED1i x\u1EE9ng n\xE0o \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng r\u1ED9ng r\xE3i trong ch\u1EEF k\xFD s\u1ED1 v\xE0 trao \u0111\u1ED5i kh\xF3a?",
    option_a: "AES-256",
    option_b: "DES",
    option_c: "RSA",
    option_d: "RC4",
    correct_answer: "C",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "RSA l\xE0 thu\u1EADt to\xE1n m\xE3 h\xF3a kh\xF3a c\xF4ng khai (b\u1EA5t \u0111\u1ED1i x\u1EE9ng) n\u1ED5i ti\u1EBFng nh\u1EA5t th\u1EBF gi\u1EDBi.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q06",
    question_number: 6,
    content: "C\u1ED5ng (Port) m\u1EB7c \u0111\u1ECBnh c\u1EE7a giao th\u1EE9c HTTPS l\xE0 g\xEC?",
    option_a: "80",
    option_b: "443",
    option_c: "8080",
    option_d: "22",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "Port chu\u1EA9n c\u1EE7a HTTPS l\xE0 443, trong khi HTTP l\xE0 80, SSH l\xE0 22.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q07",
    question_number: 7,
    content: "\u0110\u1ED9 ph\u1EE9c t\u1EA1p th\u1EDDi gian trung b\xECnh (Average Time Complexity) c\u1EE7a thu\u1EADt to\xE1n s\u1EAFp x\u1EBFp QuickSort l\xE0 g\xEC?",
    option_a: "O(N)",
    option_b: "O(N log N)",
    option_c: "O(N^2)",
    option_d: "O(log N)",
    correct_answer: "B",
    points: 0.6,
    category: "Thu\u1EADt to\xE1n",
    explanation: "QuickSort c\xF3 \u0111\u1ED9 ph\u1EE9c t\u1EA1p trung b\xECnh l\xE0 O(N log N).",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q08",
    question_number: 8,
    content: "Trong c\u01A1 s\u1EDF d\u1EEF li\u1EC7u quan h\u1EC7, t\u1EEB kh\xF3a n\xE0o d\xF9ng \u0111\u1EC3 k\u1EBFt h\u1EE3p k\u1EBFt qu\u1EA3 t\u1EEB hai b\u1EA3ng theo \u0111i\u1EC1u ki\u1EC7n?",
    option_a: "UNION",
    option_b: "JOIN",
    option_c: "GROUP BY",
    option_d: "ORDER BY",
    correct_answer: "B",
    points: 0.6,
    category: "C\u01A1 s\u1EDF d\u1EEF li\u1EC7u",
    explanation: "T\u1EEB kh\xF3a `JOIN` (INNER JOIN, LEFT JOIN, ...) \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng \u0111\u1EC3 k\u1EBFt h\u1EE3p d\u1EEF li\u1EC7u gi\u1EEFa c\xE1c b\u1EA3ng.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q09",
    question_number: 9,
    content: "Lo\u1EA1i t\u1EA5n c\xF4ng m\u1EA1ng n\xE0o l\xE0m tr\xE0n ng\u1EADp l\u01B0u l\u01B0\u1EE3ng m\xE1y ch\u1EE7 khi\u1EBFn d\u1ECBch v\u1EE5 b\u1ECB gi\xE1n \u0111o\u1EA1n \u0111\u1ED1i v\u1EDBi ng\u01B0\u1EDDi d\xF9ng h\u1EE3p l\u1EC7?",
    option_a: "Phishing",
    option_b: "DDoS (Distributed Denial of Service)",
    option_c: "SQL Injection",
    option_d: "Man-in-the-Middle",
    correct_answer: "B",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "T\u1EA5n c\xF4ng t\u1EEB ch\u1ED1i d\u1ECBch v\u1EE5 ph\xE2n t\xE1n (DDoS) g\xE2y ngh\u1EBDn b\u0103ng th\xF4ng v\xE0 t\xE0i nguy\xEAn m\xE1y ch\u1EE7.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q10",
    question_number: 10,
    content: "Trong ki\u1EBFn tr\xFAc m\xE1y t\xEDnh, b\u1ED9 nh\u1EDB n\xE0o c\xF3 t\u1ED1c \u0111\u1ED9 truy xu\u1EA5t nhanh nh\u1EA5t \u0111\u1ED1i v\u1EDBi CPU?",
    option_a: "RAM",
    option_b: "\u1ED4 c\u1EE9ng SSD NVMe",
    option_c: "B\u1ED9 nh\u1EDB Cache (L1, L2, L3) v\xE0 Registers",
    option_d: "ROM BIOS",
    correct_answer: "C",
    points: 0.6,
    category: "Ki\u1EBFn tr\xFAc m\xE1y t\xEDnh",
    explanation: "Thanh ghi (Registers) v\xE0 b\u1ED9 nh\u1EDB \u0111\u1EC7m Cache n\u1EB1m ngay trong CPU c\xF3 t\u1ED1c \u0111\u1ED9 nhanh nh\u1EA5t.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q11",
    question_number: 11,
    content: "Trong l\u1EADp tr\xECnh h\u01B0\u1EDBng \u0111\u1ED1i t\u01B0\u1EE3ng (OOP), t\xEDnh ch\u1EA5t n\xE0o cho ph\xE9p m\u1ED9t l\u1EDBp con k\u1EBF th\u1EEBa thu\u1ED9c t\xEDnh v\xE0 ph\u01B0\u01A1ng th\u1EE9c t\u1EEB l\u1EDBp cha?",
    option_a: "Encapsulation (\u0110\xF3ng g\xF3i)",
    option_b: "Inheritance (K\u1EBF th\u1EEBa)",
    option_c: "Polymorphism (\u0110a h\xECnh)",
    option_d: "Abstraction (Tr\u1EEBu t\u01B0\u1EE3ng)",
    correct_answer: "B",
    points: 0.6,
    category: "L\u1EADp tr\xECnh",
    explanation: "T\xEDnh k\u1EBF th\u1EEBa (Inheritance) cho ph\xE9p t\xE1i s\u1EED d\u1EE5ng m\xE3 ngu\u1ED3n v\xE0 m\u1EDF r\u1ED9ng t\u1EEB l\u1EDBp c\u01A1 s\u1EDF.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q12",
    question_number: 12,
    content: "\u0110\u1ECBa ch\u1EC9 IPv4 c\xF3 \u0111\u1ED9 d\xE0i bao nhi\xEAu bit?",
    option_a: "16 bit",
    option_b: "32 bit",
    option_c: "64 bit",
    option_d: "128 bit",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "IPv4 d\xE0i 32 bit (4 byte), trong khi IPv6 d\xE0i 128 bit.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q13",
    question_number: 13,
    content: "C\xF4ng c\u1EE5 qu\u1EA3n l\xFD phi\xEAn b\u1EA3n m\xE3 ngu\u1ED3n (Version Control System) ph\xE2n t\xE1n ph\u1ED5 bi\u1EBFn nh\u1EA5t hi\u1EC7n nay l\xE0 g\xEC?",
    option_a: "SVN",
    option_b: "Git",
    option_c: "CVS",
    option_d: "Mercurial",
    correct_answer: "B",
    points: 0.6,
    category: "K\u1EF9 thu\u1EADt ph\u1EA7n m\u1EC1m",
    explanation: "Git \u0111\u01B0\u1EE3c Linus Torvalds t\u1EA1o ra v\xE0o n\u0103m 2005 v\xE0 l\xE0 h\u1EC7 th\u1ED1ng VCS chu\u1EA9n m\u1EF1c to\xE0n c\u1EA7u.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q14",
    question_number: 14,
    content: "Thu\u1EADt to\xE1n t\xECm ki\u1EBFm nh\u1ECB ph\xE2n (Binary Search) y\xEAu c\u1EA7u m\u1EA3ng \u0111\u1EA7u v\xE0o ph\u1EA3i th\u1ECFa m\xE3n \u0111i\u1EC1u ki\u1EC7n g\xEC?",
    option_a: "M\u1EA3ng ph\u1EA3i c\xF3 \u0111\u1ED9 d\xE0i l\xE0 s\u1ED1 ch\u1EB5n",
    option_b: "M\u1EA3ng ph\u1EA3i \u0111\u01B0\u1EE3c s\u1EAFp x\u1EBFp tr\u01B0\u1EDBc theo th\u1EE9 t\u1EF1",
    option_c: "M\u1EA3ng ch\u1EC9 ch\u1EE9a s\u1ED1 nguy\xEAn d\u01B0\u01A1ng",
    option_d: "M\u1EA3ng kh\xF4ng \u0111\u01B0\u1EE3c ch\u1EE9a gi\xE1 tr\u1ECB 0",
    correct_answer: "B",
    points: 0.6,
    category: "Thu\u1EADt to\xE1n",
    explanation: "Binary Search ch\u1EC9 \xE1p d\u1EE5ng \u0111\u01B0\u1EE3c tr\xEAn t\u1EADp d\u1EEF li\u1EC7u \u0111\xE3 s\u1EAFp x\u1EBFp (Sorted array).",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q15",
    question_number: 15,
    content: "K\u1EF9 thu\u1EADt \u1EA3o h\xF3a containerization (v\xED d\u1EE5 Docker) kh\xE1c v\u1EDBi m\xE1y \u1EA3o truy\u1EC1n th\u1ED1ng (VM) \u1EDF \u0111i\u1EC3m c\u1ED1t l\xF5i n\xE0o?",
    option_a: "Container kh\xF4ng ch\u1EA1y \u0111\u01B0\u1EE3c \u1EE9ng d\u1EE5ng Web",
    option_b: "Container d\xF9ng chung nh\xE2n h\u1EC7 \u0111i\u1EC1u h\xE0nh (Shared Host Kernel) gi\xFAp nh\u1EB9 v\xE0 kh\u1EDFi \u0111\u1ED9ng t\u1EE9c th\xEC",
    option_c: "Container y\xEAu c\u1EA7u c\xE0i \u0111\u1EB7t Hypervisor Type 1",
    option_d: "Container kh\xF4ng c\xF3 h\u1EC7 th\u1ED1ng t\u1EC7p tin ri\xEAng",
    correct_answer: "B",
    points: 0.6,
    category: "\u0110i\u1EC7n to\xE1n \u0111\xE1m m\xE2y",
    explanation: "Docker Container chia s\u1EBB kernel c\u1EE7a host OS, kh\xF4ng c\u1EA7n guest OS \u0111\u1EA7y \u0111\u1EE7 nh\u01B0 VM.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q16",
    question_number: 16,
    content: "\u0110\u1ECBnh d\u1EA1ng d\u1EEF li\u1EC7u n\xE0o d\u1EF1a tr\xEAn v\u0103n b\u1EA3n nh\u1EB9, th\u01B0\u1EDDng \u0111\u01B0\u1EE3c d\xF9ng \u0111\u1EC3 trao \u0111\u1ED5i d\u1EEF li\u1EC7u gi\u1EEFa m\xE1y ch\u1EE7 v\xE0 tr\xECnh duy\u1EC7t web?",
    option_a: "JSON (JavaScript Object Notation)",
    option_b: "Binary RAW",
    option_c: "BSON Native",
    option_d: "Protobuf v1",
    correct_answer: "A",
    points: 0.6,
    category: "C\xF4ng ngh\u1EC7 th\xF4ng tin",
    explanation: "JSON l\xE0 chu\u1EA9n \u0111\u1ECBnh d\u1EA1ng trao \u0111\u1ED5i d\u1EEF li\u1EC7u d\u1EA1ng v\u0103n b\u1EA3n ph\u1ED5 bi\u1EBFn nh\u1EA5t th\u1EBF gi\u1EDBi.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q17",
    question_number: 17,
    content: 'Kh\xE1i ni\u1EC7m "Deadlock" trong h\u1EC7 \u0111i\u1EC1u h\xE0nh x\u1EA3y ra khi n\xE0o?',
    option_a: "Khi CPU b\u1ECB qu\xE1 nhi\u1EC7t v\xE0 t\u1EF1 t\u1EAFt",
    option_b: "Khi hai ho\u1EB7c nhi\u1EC1u ti\u1EBFn tr\xECnh c\xF9ng ch\u1EDD \u0111\u1EE3i t\xE0i nguy\xEAn m\xE0 ti\u1EBFn tr\xECnh kh\xE1c \u0111ang gi\u1EEF v\u0129nh vi\u1EC5n",
    option_c: "Khi b\u1ED9 nh\u1EDB RAM b\u1ECB \u0111\u1EA7y 100%",
    option_d: "Khi \u0111\u01B0\u1EDDng truy\u1EC1n Internet b\u1ECB ng\u1EAFt k\u1EBFt n\u1ED1i",
    correct_answer: "B",
    points: 0.6,
    category: "H\u1EC7 \u0111i\u1EC1u h\xE0nh",
    explanation: "Deadlock (b\u1EBF t\u1EAFc) l\xE0 t\xECnh tr\u1EA1ng c\xE1c ti\u1EBFn tr\xECnh gi\u1EEF t\xE0i nguy\xEAn v\xE0 c\xF9ng ch\u1EDD \u0111\u1EE3i l\u1EABn nhau.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q18",
    question_number: 18,
    content: "H\xE0m b\u0103m m\u1ED9t chi\u1EC1u (Hash Function) an to\xE0n chu\u1EA9n NIST c\xF3 \u0111\u1EB7c \u0111i\u1EC3m n\xE0o?",
    option_a: "C\xF3 th\u1EC3 d\u1EC5 d\xE0ng gi\u1EA3i m\xE3 ng\u01B0\u1EE3c l\u1EA1i chu\u1ED7i ban \u0111\u1EA7u",
    option_b: "C\xF9ng m\u1ED9t d\u1EEF li\u1EC7u \u0111\u1EA7u v\xE0o lu\xF4n cho ra c\xF9ng m\u1ED9t chu\u1ED7i b\u0103m c\xF3 \u0111\u1ED9 d\xE0i c\u1ED1 \u0111\u1ECBnh",
    option_c: "\u0110\u1ED9 d\xE0i chu\u1ED7i b\u0103m lu\xF4n thay \u0111\u1ED5i theo k\xEDch th\u01B0\u1EDBc file",
    option_d: "Kh\xF4ng ch\u1ED1ng \u0111\u01B0\u1EE3c va ch\u1EA1m (collision)",
    correct_answer: "B",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "H\xE0m b\u0103m (SHA-256, SHA-3) lu\xF4n t\u1EA1o ra chu\u1ED7i \u0111\u1EA7u ra \u0111\u1ED9 d\xE0i c\u1ED1 \u0111\u1ECBnh v\xE0 t\xEDnh to\xE1n m\u1ED9t chi\u1EC1u.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q19",
    question_number: 19,
    content: "T\u01B0\u1EDDng l\u1EEDa (Firewall) tr\u1EA1ng th\xE1i (Stateful Inspection) l\u1ECDc g\xF3i tin d\u1EF1a tr\xEAn y\u1EBFu t\u1ED1 n\xE0o?",
    option_a: "Ch\u1EC9 d\u1EF1a tr\xEAn \u0111\u1ECBa ch\u1EC9 MAC ngu\u1ED3n",
    option_b: "Theo d\xF5i tr\u1EA1ng th\xE1i c\u1EE7a c\xE1c k\u1EBFt n\u1ED1i m\u1EA1ng \u0111ang ho\u1EA1t \u0111\u1ED9ng c\xF9ng v\u1EDBi IP v\xE0 Port",
    option_c: "Ch\u1EC9 ki\u1EC3m tra \u0111\u1ECBnh d\u1EA1ng t\xEAn file \u0111\xEDnh k\xE8m",
    option_d: "Ch\u1EC9 ch\u1EB7n email r\xE1c",
    correct_answer: "B",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "Stateful firewall theo d\xF5i b\u1EA3ng tr\u1EA1ng th\xE1i k\u1EBFt n\u1ED1i (Connection State Table) \u0111\u1EC3 ra quy\u1EBFt \u0111\u1ECBnh.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q20",
    question_number: 20,
    content: "Ki\u1EBFn tr\xFAc m\u1EA1ng n\u01A1-ron Transformer ra m\u1EAFt n\u0103m 2017 s\u1EED d\u1EE5ng c\u01A1 ch\u1EBF \u0111\u1ED9t ph\xE1 n\xE0o?",
    option_a: "Self-Attention Mechanism",
    option_b: "Convolution Pooling",
    option_c: "Markov Decision Process",
    option_d: "Recurrent Feedback Loop",
    correct_answer: "A",
    points: 0.6,
    category: "Tr\xED tu\u1EC7 nh\xE2n t\u1EA1o",
    explanation: 'B\xE0i b\xE1o "Attention Is All You Need" c\u1EE7a Google gi\u1EDBi thi\u1EC7u c\u01A1 ch\u1EBF Self-Attention l\xE0m n\u1EC1n t\u1EA3ng cho LLM.',
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q21",
    question_number: 21,
    content: "D\u1EA3i \u0111\u1ECBa ch\u1EC9 IP ri\xEAng (Private IP) theo chu\u1EA9n RFC 1918 d\xE0nh cho l\u1EDBp C (Class C) l\xE0 g\xEC?",
    option_a: "10.0.0.0 \u0111\u1EBFn 10.255.255.255",
    option_b: "172.16.0.0 \u0111\u1EBFn 172.31.255.255",
    option_c: "192.168.0.0 \u0111\u1EBFn 192.168.255.255",
    option_d: "127.0.0.0 \u0111\u1EBFn 127.255.255.255",
    correct_answer: "C",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "D\u1EA3i IP Private l\u1EDBp C l\xE0 192.168.0.0/16, r\u1EA5t ph\u1ED5 bi\u1EBFn trong m\u1EA1ng LAN.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q22",
    question_number: 22,
    content: "H\u1EC7 qu\u1EA3n tr\u1ECB c\u01A1 s\u1EDF d\u1EEF li\u1EC7u quan h\u1EC7 m\xE3 ngu\u1ED3n m\u1EDF n\xE0o s\u1EED d\u1EE5ng ng\xF4n ng\u1EEF truy v\u1EA5n SQL v\xE0 logo h\xECnh con c\xE1 heo?",
    option_a: "PostgreSQL",
    option_b: "MySQL",
    option_c: "MongoDB",
    option_d: "Redis",
    correct_answer: "B",
    points: 0.6,
    category: "C\u01A1 s\u1EDF d\u1EEF li\u1EC7u",
    explanation: "MySQL c\xF3 linh v\u1EADt l\xE0 ch\xFA c\xE1 heo t\xEAn Sakila.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q23",
    question_number: 23,
    content: "Giao th\u1EE9c n\xE0o \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng \u0111\u1EC3 ph\xE2n gi\u1EA3i t\xEAn mi\u1EC1n (v\xED d\u1EE5 google.com) th\xE0nh \u0111\u1ECBa ch\u1EC9 IP?",
    option_a: "DHCP",
    option_b: "DNS (Domain Name System)",
    option_c: "ARP",
    option_d: "SNMP",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "DNS chuy\u1EC3n \u0111\u1ED5i t\xEAn mi\u1EC1n d\u1EC5 nh\u1EDB th\xE0nh \u0111\u1ECBa ch\u1EC9 IP d\u1EA1ng s\u1ED1 m\xE0 m\xE1y t\xEDnh hi\u1EC3u \u0111\u01B0\u1EE3c.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q24",
    question_number: 24,
    content: "Trong ng\xF4n ng\u1EEF l\u1EADp tr\xECnh C/C++, con tr\u1ECF (pointer) l\xE0 bi\u1EBFn d\xF9ng \u0111\u1EC3 l\u01B0u tr\u1EEF c\xE1i g\xEC?",
    option_a: "Gi\xE1 tr\u1ECB s\u1ED1 nguy\xEAn l\u1EDBn",
    option_b: "\u0110\u1ECBa ch\u1EC9 \xF4 nh\u1EDB c\u1EE7a m\u1ED9t bi\u1EBFn kh\xE1c",
    option_c: "T\xEAn c\u1EE7a h\xE0m th\u1EF1c thi",
    option_d: "K\xEDch th\u01B0\u1EDBc c\u1EE7a t\u1EADp tin",
    correct_answer: "B",
    points: 0.6,
    category: "L\u1EADp tr\xECnh",
    explanation: "Con tr\u1ECF trong C/C++ l\u01B0u \u0111\u1ECBa ch\u1EC9 v\xF9ng nh\u1EDB RAM tr\u1ECF t\u1EDBi bi\u1EBFn \u0111\xEDch.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q25",
    question_number: 25,
    content: "Lo\u1EA1i t\u1EA5n c\xF4ng ch\xE8n m\xE3 l\u1EC7nh \u0111\u1ED9c h\u1EA1i v\xE0o c\u01A1 s\u1EDF d\u1EEF li\u1EC7u th\xF4ng qua c\xE1c tr\u01B0\u1EDDng nh\u1EADp li\u1EC7u tr\xEAn website \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 g\xEC?",
    option_a: "Cross-Site Scripting (XSS)",
    option_b: "SQL Injection (SQLi)",
    option_c: "Buffer Overflow",
    option_d: "DNS Spoofing",
    correct_answer: "B",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "SQL Injection l\u1EE3i d\u1EE5ng l\u1ED7 h\u1ED5ng kh\xF4ng ki\u1EC3m tra d\u1EEF li\u1EC7u \u0111\u1EA7u v\xE0o \u0111\u1EC3 th\u1EF1c thi truy v\u1EA5n tr\xE1i ph\xE9p.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q26",
    question_number: 26,
    content: "\u0110\u01A1n v\u1ECB \u0111o l\u01B0\u1EDDng c\u01A1 b\u1EA3n nh\u1ECF nh\u1EA5t c\u1EE7a th\xF4ng tin trong m\xE1y t\xEDnh l\xE0 g\xEC?",
    option_a: "Byte",
    option_b: "Bit (Binary Digit)",
    option_c: "Nibble",
    option_d: "Word",
    correct_answer: "B",
    points: 0.6,
    category: "Khoa h\u1ECDc m\xE1y t\xEDnh",
    explanation: "Bit l\xE0 \u0111\u01A1n v\u1ECB nh\u1ECF nh\u1EA5t, nh\u1EADn 1 trong 2 gi\xE1 tr\u1ECB 0 ho\u1EB7c 1. 1 Byte = 8 Bit.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q27",
    question_number: 27,
    content: "Chu\u1EA9n m\xE3 h\xF3a k\xFD t\u1EF1 n\xE0o h\u1ED7 tr\u1EE3 hi\u1EC3n th\u1ECB h\u1EA7u h\u1EBFt t\u1EA5t c\u1EA3 c\xE1c ng\xF4n ng\u1EEF ch\u1EEF vi\u1EBFt tr\xEAn th\u1EBF gi\u1EDBi, bao g\u1ED3m c\u1EA3 ti\u1EBFng Vi\u1EC7t c\xF3 d\u1EA5u?",
    option_a: "ASCII",
    option_b: "Unicode (UTF-8 / UTF-16)",
    option_c: "EBCDIC",
    option_d: "ISO-8859-1",
    correct_answer: "B",
    points: 0.6,
    category: "Khoa h\u1ECDc m\xE1y t\xEDnh",
    explanation: "Unicode l\xE0 ti\xEAu chu\u1EA9n c\xF4ng nghi\u1EC7p m\xE3 h\xF3a v\u0103n b\u1EA3n \u0111a ng\xF4n ng\u1EEF to\xE0n c\u1EA7u.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q28",
    question_number: 28,
    content: "Giao th\u1EE9c truy\u1EC1n file b\u1EA3o m\u1EADt s\u1EED d\u1EE5ng \u0111\u01B0\u1EDDng truy\u1EC1n SSH c\xF3 t\xEAn l\xE0 g\xEC?",
    option_a: "TFTP",
    option_b: "SFTP (SSH File Transfer Protocol)",
    option_c: "FTP Plain",
    option_d: "Telnet File",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "SFTP m\xE3 h\xF3a c\u1EA3 k\xEAnh \u0111i\u1EC1u khi\u1EC3n l\u1EABn d\u1EEF li\u1EC7u truy\u1EC1n t\u1EA3i th\xF4ng qua c\u1ED5ng 22.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q29",
    question_number: 29,
    content: "Trong c\u1EA5u tr\xFAc d\u1EEF li\u1EC7u c\xE2y nh\u1ECB ph\xE2n t\xECm ki\u1EBFm (BST), ph\u1EA7n t\u1EED \u1EDF c\xE2y con b\xEAn tr\xE1i (Left Subtree) lu\xF4n c\xF3 gi\xE1 tr\u1ECB nh\u01B0 th\u1EBF n\xE0o so v\u1EDBi n\xFAt g\u1ED1c (Root)?",
    option_a: "Lu\xF4n l\u1EDBn h\u01A1n n\xFAt g\u1ED1c",
    option_b: "Lu\xF4n nh\u1ECF h\u01A1n n\xFAt g\u1ED1c",
    option_c: "B\u1EB1ng n\xFAt g\u1ED1c",
    option_d: "Ng\u1EABu nhi\xEAn",
    correct_answer: "B",
    points: 0.6,
    category: "C\u1EA5u tr\xFAc d\u1EEF li\u1EC7u",
    explanation: "Quy t\u1EAFc BST: C\xE2y con tr\xE1i < N\xFAt g\u1ED1c < C\xE2y con ph\u1EA3i.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q30",
    question_number: 30,
    content: "M\xF4 h\xECnh \u0111i\u1EC7n to\xE1n ph\xE2n t\xE1n b\u1EA5t bi\u1EBFn s\u1EED d\u1EE5ng c\xE1c kh\u1ED1i li\xEAn k\u1EBFt b\u1EB1ng m\xE3 b\u0103m m\u1EADt m\xE3 (cryptographic hash) l\xE0 g\xEC?",
    option_a: "Blockchain",
    option_b: "Grid Computing",
    option_c: "Serverless Function",
    option_d: "Microservices",
    correct_answer: "A",
    points: 0.6,
    category: "C\xF4ng ngh\u1EC7 m\u1EDBi",
    explanation: "Blockchain l\xE0 chu\u1ED7i c\xE1c kh\u1ED1i d\u1EEF li\u1EC7u li\xEAn k\u1EBFt an to\xE0n b\u1EB1ng m\xE3 b\u0103m m\u1EADt m\xE3 h\u1ECDc.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q31",
    question_number: 31,
    content: "Trong h\u1EC7 \u0111i\u1EC1u h\xE0nh, th\xE0nh ph\u1EA7n c\u1ED1t l\xF5i qu\u1EA3n l\xFD CPU, b\u1ED9 nh\u1EDB v\xE0 thi\u1EBFt b\u1ECB ngo\u1EA1i vi \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 g\xEC?",
    option_a: "Shell",
    option_b: "Kernel (Nh\xE2n h\u1EC7 \u0111i\u1EC1u h\xE0nh)",
    option_c: "Compiler",
    option_d: "Desktop Environment",
    correct_answer: "B",
    points: 0.6,
    category: "H\u1EC7 \u0111i\u1EC1u h\xE0nh",
    explanation: "Kernel l\xE0 c\u1EA7u n\u1ED1i trung gian c\u1ED1t l\xF5i gi\u1EEFa ph\u1EA7n c\u1EE9ng m\xE1y t\xEDnh v\xE0 c\xE1c \u1EE9ng d\u1EE5ng ph\u1EA7n m\u1EC1m.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q32",
    question_number: 32,
    content: "\u0110\u1ECBa ch\u1EC9 MAC (Media Access Control) c\xF3 \u0111\u1ED9 d\xE0i bao nhi\xEAu bit?",
    option_a: "32 bit",
    option_b: "48 bit",
    option_c: "64 bit",
    option_d: "128 bit",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "\u0110\u1ECBa ch\u1EC9 MAC g\u1ED3m 48 bit (6 byte), th\u01B0\u1EDDng vi\u1EBFt d\u01B0\u1EDBi d\u1EA1ng Hexadecimal (v\xED d\u1EE5: 00:1A:2B:3C:4D:5E).",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q33",
    question_number: 33,
    content: "Trong m\xF4 h\xECnh quan h\u1EC7 c\u01A1 s\u1EDF d\u1EEF li\u1EC7u (RDBMS), t\xEDnh ch\u1EA5t ACID vi\u1EBFt t\u1EAFt c\u1EE7a c\xE1c t\u1EEB n\xE0o?",
    option_a: "Atomicity, Consistency, Isolation, Durability",
    option_b: "Access, Control, Identity, Data",
    option_c: "Array, Class, Integer, Decimal",
    option_d: "Asynchronous, Connected, Indexed, Distributed",
    correct_answer: "A",
    points: 0.6,
    category: "C\u01A1 s\u1EDF d\u1EEF li\u1EC7u",
    explanation: "ACID \u0111\u1EA3m b\u1EA3o t\xEDnh to\xE0n v\u1EB9n giao d\u1ECBch: T\xEDnh nguy\xEAn t\u1ED1, T\xEDnh nh\u1EA5t qu\xE1n, T\xEDnh c\xF4 l\u1EADp, T\xEDnh b\u1EC1n v\u1EEFng.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q34",
    question_number: 34,
    content: "K\u1EF9 thu\u1EADt x\xE1c th\u1EF1c 2 y\u1EBFu t\u1ED1 (2FA / MFA) k\u1EBFt h\u1EE3p \xEDt nh\u1EA5t hai trong s\u1ED1 c\xE1c y\u1EBFu t\u1ED1 n\xE0o?",
    option_a: "Hai m\u1EADt kh\u1EA9u kh\xE1c nhau",
    option_b: "\u0110i\u1EC1u b\u1EA1n bi\u1EBFt (M\u1EADt kh\u1EA9u), \u0110i\u1EC1u b\u1EA1n c\xF3 (Thi\u1EBFt b\u1ECB/OTP), \u0110i\u1EC1u b\u1EA1n l\xE0 (Sinh tr\u1EAFc h\u1ECDc)",
    option_c: "Hai \u0111\u1ECBa ch\u1EC9 email",
    option_d: "T\xEAn ng\u01B0\u1EDDi d\xF9ng v\xE0 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    correct_answer: "B",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "MFA y\xEAu c\u1EA7u x\xE1c th\u1EF1c k\u1EBFt h\u1EE3p gi\u1EEFa tri th\u1EE9c (Knowledge), s\u1EDF h\u1EEFu (Possession) ho\u1EB7c sinh tr\u1EAFc (Inherence).",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q35",
    question_number: 35,
    content: "Trong giao th\u1EE9c HTTP, m\xE3 tr\u1EA1ng th\xE1i (Status Code) 404 c\xF3 \xFD ngh\u0129a l\xE0 g\xEC?",
    option_a: "Y\xEAu c\u1EA7u th\xE0nh c\xF4ng (OK)",
    option_b: "Kh\xF4ng t\xECm th\u1EA5y t\xE0i nguy\xEAn y\xEAu c\u1EA7u (Not Found)",
    option_c: "L\u1ED7i m\xE1y ch\u1EE7 n\u1ED9i b\u1ED9 (Internal Server Error)",
    option_d: "Kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp (Forbidden)",
    correct_answer: "B",
    points: 0.6,
    category: "C\xF4ng ngh\u1EC7 th\xF4ng tin",
    explanation: "HTTP 404 Not Found b\xE1o hi\u1EC7u m\xE1y ch\u1EE7 kh\xF4ng t\xECm th\u1EA5y t\xE0i nguy\xEAn t\u1EA1i URI \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q36",
    question_number: 36,
    content: "C\xF4ng ngh\u1EC7 WebSocket cung c\u1EA5p ki\u1EC3u giao ti\u1EBFp n\xE0o gi\u1EEFa client v\xE0 server?",
    option_a: "Giao ti\u1EBFp m\u1ED9t chi\u1EC1u (Half-Duplex) theo chu k\u1EF3",
    option_b: "K\xEAnh truy\u1EC1n song c\xF4ng to\xE0n ph\u1EA7n hai chi\u1EC1u (Full-Duplex) li\xEAn t\u1EE5c qua 1 k\u1EBFt n\u1ED1i TCP duy nh\u1EA5t",
    option_c: "Ch\u1EC9 g\u1EEDi d\u1EEF li\u1EC7u t\u1EEB server t\u1EDBi client",
    option_d: "Ch\u1EC9 d\xF9ng cho g\u1EEDi file l\u1EDBn",
    correct_answer: "B",
    points: 0.6,
    category: "L\u1EADp tr\xECnh m\u1EA1ng",
    explanation: "WebSocket m\u1EDF k\xEAnh giao ti\u1EBFp 2 chi\u1EC1u to\xE0n ph\u1EA7n (Full-Duplex) \u0111\u1ED9 tr\u1EC5 c\u1EF1c th\u1EA5p trong th\u1EDDi gian th\u1EF1c.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q37",
    question_number: 37,
    content: "Ph\u01B0\u01A1ng ph\xE1p ki\u1EC3m th\u1EED ph\u1EA7n m\u1EC1m m\xE0 ng\u01B0\u1EDDi ki\u1EC3m th\u1EED kh\xF4ng c\u1EA7n bi\u1EBFt c\u1EA5u tr\xFAc m\xE3 ngu\u1ED3n b\xEAn trong \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 g\xEC?",
    option_a: "White Box Testing (H\u1ED9p tr\u1EAFng)",
    option_b: "Black Box Testing (H\u1ED9p \u0111en)",
    option_c: "Gray Box Testing",
    option_d: "Unit Testing",
    correct_answer: "B",
    points: 0.6,
    category: "K\u1EF9 thu\u1EADt ph\u1EA7n m\u1EC1m",
    explanation: "Black Box Testing ki\u1EC3m tra ch\u1EE9c n\u0103ng h\u1EC7 th\u1ED1ng thu\u1EA7n t\xFAy d\u1EF1a tr\xEAn \u0111\u1EA7u v\xE0o v\xE0 \u0111\u1EA7u ra m\xE0 kh\xF4ng soi m\xE3 ngu\u1ED3n.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q38",
    question_number: 38,
    content: "Trong to\xE1n h\u1ECDc r\u1EDDi r\u1EA1c v\xE0 m\u1EA1ng m\xE1y t\xEDnh, thu\u1EADt to\xE1n Dijkstra \u0111\u01B0\u1EE3c d\xF9ng \u0111\u1EC3 gi\u1EA3i quy\u1EBFt b\xE0i to\xE1n g\xEC?",
    option_a: "T\xECm \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t t\u1EEB m\u1ED9t \u0111\u1EC9nh ngu\u1ED3n \u0111\u1EBFn t\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB c\xF3 tr\u1ECDng s\u1ED1 kh\xF4ng \xE2m",
    option_b: "S\u1EAFp x\u1EBFp d\xE3y s\u1ED1",
    option_c: "T\xECm c\xE2y khung nh\u1ECF nh\u1EA5t (MST)",
    option_d: "Ki\u1EC3m tra t\xEDnh li\xEAn th\xF4ng c\u1EE7a \u0111\u1ED3 th\u1ECB",
    correct_answer: "A",
    points: 0.6,
    category: "Thu\u1EADt to\xE1n",
    explanation: "Thu\u1EADt to\xE1n Dijkstra t\xECm \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t \u0111\u01B0\u1EE3c \u1EE9ng d\u1EE5ng c\u1ED1t l\xF5i trong \u0111\u1ECBnh tuy\u1EBFn m\u1EA1ng (OSPF).",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q39",
    question_number: 39,
    content: 'Kh\xE1i ni\u1EC7m "Zero Day Vulnerability" (L\u1ED7 h\u1ED5ng Zero-day) trong an ninh m\u1EA1ng d\xF9ng \u0111\u1EC3 ch\u1EC9 c\xE1i g\xEC?',
    option_a: "L\u1ED7 h\u1ED5ng \u0111\xE3 \u0111\u01B0\u1EE3c v\xE1 c\xE1ch \u0111\xE2y 0 ng\xE0y",
    option_b: "L\u1ED7 h\u1ED5ng ph\u1EA7n m\u1EC1m ch\u01B0a t\u1EEBng \u0111\u01B0\u1EE3c nh\xE0 ph\xE1t h\xE0nh bi\u1EBFt \u0111\u1EBFn ho\u1EB7c ch\u01B0a c\xF3 b\u1EA3n v\xE1 ch\xEDnh th\u1EE9c",
    option_c: "Virus kh\xF4ng g\xE2y h\u1EA1i",
    option_d: "T\u01B0\u1EDDng l\u1EEDa b\u1ECB t\u1EAFt t\u1EA1m th\u1EDDi",
    correct_answer: "B",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "Zero-day l\xE0 l\u1ED7 h\u1ED5ng an ninh ch\u01B0a \u0111\u01B0\u1EE3c c\xF4ng b\u1ED1 v\xE0 ch\u01B0a c\xF3 b\u1EA3n v\xE1, c\xF3 nguy c\u01A1 b\u1ECB khai th\xE1c cao nh\u1EA5t.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q40",
    question_number: 40,
    content: "Trong h\u1EC7 th\u1ED1ng m\u1EA1ng LAN, thi\u1EBFt b\u1ECB n\xE0o ho\u1EA1t \u0111\u1ED9ng \u1EDF t\u1EA7ng 2 (Data Link Layer) v\xE0 chuy\u1EC3n ti\u1EBFp khung (Frame) d\u1EF1a tr\xEAn \u0111\u1ECBa ch\u1EC9 MAC?",
    option_a: "Router",
    option_b: "Switch (B\u1ED9 chuy\u1EC3n m\u1EA1ch)",
    option_c: "Hub",
    option_d: "Repeater",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "Switch Layer 2 duy tr\xEC b\u1EA3ng CAM \u0111\u1EC3 chuy\u1EC3n ti\u1EBFp c\xE1c g\xF3i tin d\u1EF1a v\xE0o \u0111\u1ECBa ch\u1EC9 MAC \u0111\xEDch.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q41",
    question_number: 41,
    content: "Trong qu\u1EA3n tr\u1ECB m\u1EA1ng, giao th\u1EE9c DHCP (Dynamic Host Configuration Protocol) c\xF3 ch\u1EE9c n\u0103ng ch\xEDnh l\xE0 g\xEC?",
    option_a: "Ch\u1EB7n virus m\u1EA1ng",
    option_b: "T\u1EF1 \u0111\u1ED9ng c\u1EA5p ph\xE1t \u0111\u1ECBa ch\u1EC9 IP v\xE0 c\u1EA5u h\xECnh m\u1EA1ng cho c\xE1c thi\u1EBFt b\u1ECB k\u1EBFt n\u1ED1i",
    option_c: "\u0110\u1ED3ng b\u1ED9 th\u1EDDi gian h\u1EC7 th\u1ED1ng",
    option_d: "M\xE3 h\xF3a email",
    correct_answer: "B",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "DHCP t\u1EF1 \u0111\u1ED9ng ph\xE2n ph\u1ED1i \u0111\u1ECBa ch\u1EC9 IP, Subnet mask, Default Gateway v\xE0 DNS cho c\xE1c client.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q42",
    question_number: 42,
    content: "C\xF4ng ngh\u1EC7 RAID 1 (Redundant Array of Independent Disks) s\u1EED d\u1EE5ng c\u01A1 ch\u1EBF n\xE0o \u0111\u1EC3 b\u1EA3o v\u1EC7 d\u1EEF li\u1EC7u?",
    option_a: "Striping (Ph\xE2n m\u1EA3nh kh\xF4ng sao l\u01B0u)",
    option_b: "Mirroring (Sao ch\xE9p g\u01B0\u01A1ng d\u1EEF li\u1EC7u gi\u1ED1ng nhau l\xEAn 2 \u1ED5 \u0111\u0129a)",
    option_c: "Parity ph\xE2n t\xE1n",
    option_d: "N\xE9n d\u1EEF li\u1EC7u",
    correct_answer: "B",
    points: 0.6,
    category: "H\u1EC7 th\u1ED1ng m\xE1y ch\u1EE7",
    explanation: "RAID 1 ghi d\u1EEF li\u1EC7u song song v\xE0o 2 \u1ED5 \u0111\u0129a gi\u1ED1ng h\u1EC7t nhau, h\u1ECFng 1 \u1ED5 h\u1EC7 th\u1ED1ng v\u1EABn ch\u1EA1y b\xECnh th\u01B0\u1EDDng.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q43",
    question_number: 43,
    content: "Trong l\u1EADp tr\xECnh TypeScript / JavaScript, t\u1EEB kh\xF3a `const` d\xF9ng \u0111\u1EC3 khai b\xE1o bi\u1EBFn c\xF3 \u0111\u1EB7c t\xEDnh g\xEC?",
    option_a: "Bi\u1EBFn c\xF3 th\u1EC3 g\xE1n l\u1EA1i gi\xE1 tr\u1ECB b\u1EA5t k\u1EF3 l\xFAc n\xE0o",
    option_b: "Bi\u1EBFn c\xF3 ph\u1EA1m vi kh\u1ED1i (block-scoped) v\xE0 kh\xF4ng th\u1EC3 g\xE1n l\u1EA1i gi\xE1 tr\u1ECB m\u1EDBi sau khi kh\u1EDFi t\u1EA1o",
    option_c: "Bi\u1EBFn to\xE0n c\u1EE5c c\xF3 th\u1EC3 x\xF3a",
    option_d: "Bi\u1EBFn lu\xF4n c\xF3 ki\u1EC3u chu\u1ED7i",
    correct_answer: "B",
    points: 0.6,
    category: "L\u1EADp tr\xECnh",
    explanation: "`const` t\u1EA1o h\u1EB1ng s\u1ED1 c\xF3 block scope v\xE0 kh\xF4ng th\u1EC3 reassign.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q44",
    question_number: 44,
    content: "M\u1EA1ng ri\xEAng \u1EA3o VPN (Virtual Private Network) t\u1EA1o ra \u0111i\u1EC1u g\xEC \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o d\u1EEF li\u1EC7u truy\u1EC1n qua Internet c\xF4ng c\u1ED9ng \u0111\u01B0\u1EE3c an to\xE0n?",
    option_a: "\u0110\u01B0\u1EDDng truy\u1EC1n c\xE1p quang ri\xEAng bi\u1EC7t",
    option_b: "M\u1ED9t \u0111\u01B0\u1EDDng h\u1EA7m m\xE3 h\xF3a an to\xE0n (Encrypted Tunnel)",
    option_c: "T\u0103ng t\u1ED1c \u0111\u1ED9 b\u0103ng th\xF4ng g\u1EA5p \u0111\xF4i",
    option_d: "X\xF3a to\xE0n b\u1ED9 cookie duy\u1EC7t web",
    correct_answer: "B",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "VPN thi\u1EBFt l\u1EADp m\u1ED9t \u0111\u01B0\u1EDDng h\u1EA7m m\xE3 h\xF3a (IPSec, OpenVPN, WireGuard) b\u1EA3o v\u1EC7 l\u01B0u l\u01B0\u1EE3ng d\u1EEF li\u1EC7u.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q45",
    question_number: 45,
    content: 'Kh\xE1i ni\u1EC7m "Big Data" (D\u1EEF li\u1EC7u l\u1EDBn) th\u01B0\u1EDDng \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a b\u1EB1ng c\xE1c \u0111\u1EB7c tr\u01B0ng 5V, trong \u0111\xF3 "Velocity" c\xF3 ngh\u0129a l\xE0 g\xEC?',
    option_a: "Kh\u1ED1i l\u01B0\u1EE3ng d\u1EEF li\u1EC7u kh\u1ED5ng l\u1ED3",
    option_b: "T\u1ED1c \u0111\u1ED9 sinh ra v\xE0 x\u1EED l\xFD d\u1EEF li\u1EC7u nhanh theo th\u1EDDi gian th\u1EF1c",
    option_c: "S\u1EF1 \u0111a d\u1EA1ng v\u1EC1 \u0111\u1ECBnh d\u1EA1ng d\u1EEF li\u1EC7u",
    option_d: "Gi\xE1 tr\u1ECB th\u01B0\u01A1ng m\u1EA1i c\u1EE7a d\u1EEF li\u1EC7u",
    correct_answer: "B",
    points: 0.6,
    category: "Khoa h\u1ECDc d\u1EEF li\u1EC7u",
    explanation: "Velocity ph\u1EA3n \xE1nh t\u1ED1c \u0111\u1ED9 lu\xE2n chuy\u1EC3n v\xE0 x\u1EED l\xFD c\u1EF1c nhanh c\u1EE7a lu\u1ED3ng d\u1EEF li\u1EC7u l\u1EDBn.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q46",
    question_number: 46,
    content: "B\u1ED9 nh\u1EDB RAM (Random Access Memory) thu\u1ED9c lo\u1EA1i b\u1ED9 nh\u1EDB n\xE0o?",
    option_a: "Non-volatile memory (Kh\xF4ng m\u1EA5t d\u1EEF li\u1EC7u khi m\u1EA5t \u0111i\u1EC7n)",
    option_b: "Volatile memory (M\u1EA5t to\xE0n b\u1ED9 d\u1EEF li\u1EC7u khi ng\u1EAFt ngu\u1ED3n \u0111i\u1EC7n)",
    option_c: "B\u1ED9 nh\u1EDB quang h\u1ECDc ghi \u0111\u0129a",
    option_d: "B\u1ED9 nh\u1EDB t\u1EEB t\xEDnh b\u0103ng t\u1EEB",
    correct_answer: "B",
    points: 0.6,
    category: "Ki\u1EBFn tr\xFAc m\xE1y t\xEDnh",
    explanation: "RAM l\xE0 b\u1ED9 nh\u1EDB kh\u1EA3 bi\u1EBFn (Volatile), d\u1EEF li\u1EC7u l\u01B0u tr\u1EEF s\u1EBD b\u1ECB x\xF3a s\u1EA1ch khi m\xE1y t\xEDnh t\u1EAFt ngu\u1ED3n.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q47",
    question_number: 47,
    content: "Ph\u01B0\u01A1ng th\u1EE9c HTTP n\xE0o \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\u1EC3 g\u1EEDi d\u1EEF li\u1EC7u t\u1EEB client l\xEAn server nh\u1EB1m t\u1EA1o m\u1EDBi m\u1ED9t t\xE0i nguy\xEAn (Resource)?",
    option_a: "GET",
    option_b: "POST",
    option_c: "DELETE",
    option_d: "HEAD",
    correct_answer: "B",
    points: 0.6,
    category: "L\u1EADp tr\xECnh web",
    explanation: "HTTP POST \u0111\u01B0\u1EE3c d\xF9ng \u0111\u1EC3 g\u1EEDi d\u1EEF li\u1EC7u l\xEAn m\xE1y ch\u1EE7 \u0111\u1EC3 x\u1EED l\xFD ho\u1EB7c t\u1EA1o m\u1EDBi b\u1EA3n ghi.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q48",
    question_number: 48,
    content: "H\xECnh th\u1EE9c t\u1EA5n c\xF4ng phi k\u1EF9 thu\u1EADt (Social Engineering) gi\u1EA3 m\u1EA1o t\u1ED5 ch\u1EE9c uy t\xEDn qua email/tin nh\u1EAFn \u0111\u1EC3 \u0111\xE1nh c\u1EAFp m\u1EADt kh\u1EA9u g\u1ECDi l\xE0 g\xEC?",
    option_a: "Phishing (L\u1EEBa \u0111\u1EA3o m\u1EA1o danh)",
    option_b: "Ransomware (M\xE3 \u0111\u1ED9c t\u1ED1ng ti\u1EC1n)",
    option_c: "Rootkit",
    option_d: "Spyware (Ph\u1EA7n m\u1EC1m gi\xE1n \u0111i\u1EC7p)",
    correct_answer: "A",
    points: 0.6,
    category: "An to\xE0n th\xF4ng tin",
    explanation: "Phishing khai th\xE1c y\u1EBFu t\u1ED1 t\xE2m l\xFD con ng\u01B0\u1EDDi \u0111\u1EC3 chi\u1EBFm \u0111o\u1EA1t th\xF4ng tin \u0111\u0103ng nh\u1EADp v\xE0 t\xE0i kho\u1EA3n.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q49",
    question_number: 49,
    content: "Trong h\u1EC7 qu\u1EA3n tr\u1ECB c\u01A1 s\u1EDF d\u1EEF li\u1EC7u, m\u1ED9t Kh\xF3a ch\xEDnh (Primary Key) ph\u1EA3i th\u1ECFa m\xE3n \u0111i\u1EC1u ki\u1EC7n b\u1EAFt bu\u1ED9c n\xE0o?",
    option_a: "Ph\u1EA3i ch\u1EE9a gi\xE1 tr\u1ECB NULL",
    option_b: "C\xE1c gi\xE1 tr\u1ECB ph\u1EA3i l\xE0 duy nh\u1EA5t (Unique) v\xE0 kh\xF4ng \u0111\u01B0\u1EE3c ch\u1EE9a gi\xE1 tr\u1ECB NULL (Not Null)",
    option_c: "Ch\u1EC9 \u0111\u01B0\u1EE3c c\xF3 ki\u1EC3u d\u1EEF li\u1EC7u l\xE0 ng\xE0y th\xE1ng",
    option_d: "Ph\u1EA3i tr\xF9ng l\u1EB7p tr\xEAn t\u1EA5t c\u1EA3 c\xE1c d\xF2ng",
    correct_answer: "B",
    points: 0.6,
    category: "C\u01A1 s\u1EDF d\u1EEF li\u1EC7u",
    explanation: "Kh\xF3a ch\xEDnh x\xE1c \u0111\u1ECBnh duy nh\u1EA5t t\u1EEBng b\u1EA3n ghi trong b\u1EA3ng, b\u1EAFt bu\u1ED9c Unique v\xE0 Not Null.",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "Q50",
    question_number: 50,
    content: "Trong m\u1EA1ng m\xE1y t\xEDnh, l\u1EC7nh `ping` s\u1EED d\u1EE5ng giao th\u1EE9c n\xE0o \u0111\u1EC3 ki\u1EC3m tra kh\u1EA3 n\u0103ng ti\u1EBFp c\u1EADn v\xE0 \u0111\u1ED9 tr\u1EC5 t\u1EDBi m\u1ED9t \u0111\u1ECBa ch\u1EC9 \u0111\xEDch?",
    option_a: "ICMP (Internet Control Message Protocol)",
    option_b: "IGMP",
    option_c: "BGP",
    option_d: "OSPF",
    correct_answer: "A",
    points: 0.6,
    category: "M\u1EA1ng m\xE1y t\xEDnh",
    explanation: "L\u1EC7nh ping g\u1EEDi c\xE1c g\xF3i tin ICMP Echo Request v\xE0 nh\u1EADn l\u1EA1i ICMP Echo Reply \u0111\u1EC3 \u0111o \u0111\u1ED9 tr\u1EC5 m\u1EA1ng (RTT).",
    question_type: "MULTIPLE_CHOICE",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  }
];

// server/database.ts
function createMulberry32(seedNum) {
  return function() {
    let t = seedNum += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function stringToSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}
function seededShuffle(array, randomFn) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(randomFn() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
var QuizDatabase = class {
  constructor() {
    this.saveTimeout = null;
    this.pool = null;
    this.dataDir = import_path.default.join(process.cwd(), "data");
    this.dbFilePath = import_path.default.join(this.dataDir, "quiz_database.json");
    this.db = this.initDatabase();
    const dbUrl = process.env.DATABASE_URL;
    if (dbUrl) {
      try {
        console.log("[QuizDatabase] Detected DATABASE_URL. Initializing PostgreSQL cloud storage...");
        this.pool = new import_pg.default.Pool({
          connectionString: dbUrl,
          ssl: dbUrl.includes("localhost") ? false : { rejectUnauthorized: false },
          max: 10,
          idleTimeoutMillis: 3e4,
          connectionTimeoutMillis: 1e4
        });
        this.initPgDatabase();
      } catch (err) {
        console.error("[QuizDatabase] Failed to create PostgreSQL pool:", err);
        this.pool = null;
      }
    } else {
      console.log("[QuizDatabase] Using local file storage: " + this.dbFilePath);
    }
  }
  async initPgDatabase() {
    if (!this.pool) return;
    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS system_store (
          key VARCHAR(100) PRIMARY KEY,
          data JSONB NOT NULL,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log("[PostgreSQL] Table system_store checked/created successfully.");
      const res = await this.pool.query(`SELECT data FROM system_store WHERE key = 'quiz_database' LIMIT 1;`);
      if (res.rows.length > 0 && res.rows[0].data) {
        const pgData = res.rows[0].data;
        if (pgData && Array.isArray(pgData.questions) && pgData.questions.length > 0) {
          console.log(`[PostgreSQL] Successfully loaded ${pgData.questions.length} questions from PostgreSQL cloud storage!`);
          this.db = pgData;
          this.saveLocalSync(this.db);
          return;
        }
      }
      console.log("[PostgreSQL] Seeding PostgreSQL with initial database...");
      await this.saveToPg(this.db);
    } catch (err) {
      console.error("[PostgreSQL] Failed to initialize table or load data:", err);
    }
  }
  async saveToPg(data = this.db) {
    if (!this.pool) return;
    try {
      await this.pool.query(
        `INSERT INTO system_store (key, data, updated_at)
         VALUES ('quiz_database', $1, NOW())
         ON CONFLICT (key) DO UPDATE SET data = $1, updated_at = NOW();`,
        [JSON.stringify(data)]
      );
    } catch (err) {
      console.error("[PostgreSQL] Error saving to PostgreSQL:", err);
    }
  }
  initDatabase() {
    if (!import_fs.default.existsSync(this.dataDir)) {
      import_fs.default.mkdirSync(this.dataDir, { recursive: true });
    }
    if (import_fs.default.existsSync(this.dbFilePath)) {
      try {
        const raw = import_fs.default.readFileSync(this.dbFilePath, "utf-8");
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.teams) && Array.isArray(parsed.questions)) {
          if (parsed.competition) {
            parsed.competition.name = parsed.competition.name || "H\u1ED8I THI OLYMPIC CNTT N\u0102M 2026";
            parsed.competition.total_questions = parsed.questions.length;
            parsed.competition.duration_minutes = parsed.competition.duration_minutes || 30;
            parsed.competition.points_per_question = parsed.competition.points_per_question || 0.6;
          }
          if (!Array.isArray(parsed.quiz_sessions)) {
            parsed.quiz_sessions = [];
          }
          return parsed;
        }
      } catch (err) {
        console.error("Failed to parse existing database file, creating fresh one:", err);
      }
    }
    const initialDb = {
      competition: {
        id: "COMP-2026-LAN",
        name: "H\u1ED8I THI OLYMPIC CNTT N\u0102M 2026",
        description: "H\u1ED9i thi Olympic C\xF4ng ngh\u1EC7 Th\xF4ng tin n\u0103m 2026 - Thi tr\u1EAFc nghi\u1EC7m tr\u1EF1c tuy\u1EBFn 50 c\xE2u / 30 ph\xFAt m\u1EA1ng LAN",
        organizer: "BAN T\u1ED4 CH\u1EE8C H\u1ED8I THI",
        event_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        logo_url: "",
        is_active: true,
        current_question_index: 0,
        state: "IDLE",
        total_questions: 50,
        duration_minutes: 30,
        points_per_question: 0.6
      },
      teams: [...DEMO_TEAMS],
      questions: [...DEMO_QUESTIONS],
      question_sessions: [],
      quiz_sessions: [],
      answers: [],
      event_logs: [
        {
          id: "LOG-INIT-" + Date.now(),
          timestamp_iso: (/* @__PURE__ */ new Date()).toISOString(),
          timestamp_ms: Date.now(),
          event_type: "SYSTEM_BOOT",
          description: "H\u1EC7 th\u1ED1ng thi tr\u1EAFc nghi\u1EC7m tr\u1EF1c tuy\u1EBFn kh\u1EDFi \u0111\u1ED9ng v\u1EDBi 50 c\xE2u h\u1ECFi chu\u1EA9n v\xE0 20 \u0111\u1ED9i thi."
        }
      ],
      settings: {
        admin_password_hash: "admin123",
        sound_enabled: true,
        auto_advance_seconds: 0,
        duration_minutes: 30,
        points_per_question: 0.6,
        total_questions: 50
      }
    };
    this.saveSync(initialDb);
    return initialDb;
  }
  save() {
    if (this.saveTimeout) {
      clearTimeout(this.saveTimeout);
    }
    this.saveTimeout = setTimeout(() => {
      this.saveSync(this.db);
    }, 50);
  }
  saveLocalSync(dataToSave = this.db) {
    try {
      if (!import_fs.default.existsSync(this.dataDir)) {
        import_fs.default.mkdirSync(this.dataDir, { recursive: true });
      }
      const tmpPath = this.dbFilePath + ".tmp";
      try {
        import_fs.default.writeFileSync(tmpPath, JSON.stringify(dataToSave, null, 2), "utf-8");
        import_fs.default.renameSync(tmpPath, this.dbFilePath);
      } catch (renameErr) {
        import_fs.default.writeFileSync(this.dbFilePath, JSON.stringify(dataToSave, null, 2), "utf-8");
        if (import_fs.default.existsSync(tmpPath)) {
          try {
            import_fs.default.unlinkSync(tmpPath);
          } catch {
          }
        }
      }
    } catch (err) {
      console.error("Error saving database to file:", err);
    }
  }
  saveSync(dataToSave = this.db) {
    this.saveLocalSync(dataToSave);
    if (this.pool) {
      this.saveToPg(dataToSave).catch((err) => console.error("[PostgreSQL] Save error:", err));
    }
  }
  getRawDatabase() {
    return this.db;
  }
  replaceDatabase(newDbData) {
    if (newDbData.questions && Array.isArray(newDbData.questions)) {
      this.db.questions = newDbData.questions;
      this.db.competition.total_questions = newDbData.questions.length;
      this.db.settings.total_questions = newDbData.questions.length;
    }
    if (newDbData.teams && Array.isArray(newDbData.teams)) {
      this.db.teams = newDbData.teams;
    }
    if (newDbData.competition) {
      this.db.competition = { ...this.db.competition, ...newDbData.competition };
    }
    this.saveSync();
  }
  getCategories() {
    const map = /* @__PURE__ */ new Map();
    this.db.questions.forEach((q) => {
      const cat = (q.category || "T\u1ED5ng h\u1EE3p").trim();
      map.set(cat, (map.get(cat) || 0) + 1);
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }
  // --- Competition Methods ---
  getCompetition() {
    return this.db.competition;
  }
  updateCompetition(updates) {
    this.db.competition = { ...this.db.competition, ...updates };
    this.save();
    return this.db.competition;
  }
  setQuizState(state) {
    this.db.competition.state = state;
    this.save();
  }
  // --- Teams Methods ---
  getTeams() {
    return this.db.teams;
  }
  getTeam(teamId) {
    return this.db.teams.find((t) => t.team_id.toLowerCase() === teamId.toLowerCase());
  }
  addTeam(teamData) {
    const existing = this.getTeam(teamData.team_id);
    if (existing) {
      throw new Error(`M\xE3 \u0111\u1ED9i ${teamData.team_id} \u0111\xE3 t\u1ED3n t\u1EA1i`);
    }
    const newTeam = {
      ...teamData,
      connected: false,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.db.teams.push(newTeam);
    this.save();
    return newTeam;
  }
  renameTeam(teamId, rawNewName, avatarColor) {
    const index = this.db.teams.findIndex((t) => t.team_id.toLowerCase() === teamId.toLowerCase());
    if (index === -1) {
      throw new Error(`Kh\xF4ng t\xECm th\u1EA5y \u0111\u1ED9i c\xF3 m\xE3 ${teamId}`);
    }
    const trimmedName = (rawNewName || "").trim();
    if (!trimmedName) {
      throw new Error("T\xEAn \u0111\u1ED9i kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");
    }
    if (trimmedName.length > 30) {
      throw new Error("T\xEAn \u0111\u1ED9i kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 30 k\xFD t\u1EF1.");
    }
    const isDuplicate = this.db.teams.some(
      (t) => t.team_id.toLowerCase() !== teamId.toLowerCase() && (t.display_name.trim().toLowerCase() === trimmedName.toLowerCase() || t.team_name.trim().toLowerCase() === trimmedName.toLowerCase())
    );
    if (isDuplicate) {
      throw new Error("T\xEAn \u0111\u1ED9i \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng");
    }
    this.db.teams[index].display_name = trimmedName;
    this.db.teams[index].team_name = trimmedName;
    if (avatarColor) {
      this.db.teams[index].avatar_color = avatarColor;
    }
    if (Array.isArray(this.db.quiz_sessions)) {
      this.db.quiz_sessions.forEach((s) => {
        if (s.playerId?.toLowerCase() === teamId.toLowerCase()) {
          s.playerName = trimmedName;
          s.displayName = trimmedName;
          if (avatarColor) s.avatarColor = avatarColor;
        }
      });
    }
    this.save();
    return this.db.teams[index];
  }
  updateTeam(teamId, updates) {
    const index = this.db.teams.findIndex((t) => t.team_id.toLowerCase() === teamId.toLowerCase());
    if (index === -1) {
      throw new Error(`Kh\xF4ng t\xECm th\u1EA5y \u0111\u1ED9i c\xF3 m\xE3 ${teamId}`);
    }
    this.db.teams[index] = { ...this.db.teams[index], ...updates };
    this.save();
    return this.db.teams[index];
  }
  deleteTeam(teamId) {
    const initialLen = this.db.teams.length;
    this.db.teams = this.db.teams.filter((t) => t.team_id.toLowerCase() !== teamId.toLowerCase());
    if (this.db.teams.length !== initialLen) {
      this.save();
      return true;
    }
    return false;
  }
  setTeamConnection(teamId, connected, clientId, ipAddress) {
    const team = this.getTeam(teamId);
    if (team) {
      team.connected = connected;
      if (connected) {
        team.active_client_id = clientId;
        if (ipAddress) team.ip_address = ipAddress;
      } else {
        if (team.active_client_id === clientId) {
          team.active_client_id = void 0;
        }
      }
      this.save();
    }
    return team;
  }
  // --- Questions Methods ---
  getQuestions() {
    return this.db.questions.sort((a, b) => a.question_number - b.question_number);
  }
  getQuestion(idOrNumber) {
    if (typeof idOrNumber === "number") {
      return this.db.questions.find((q) => q.question_number === idOrNumber);
    }
    return this.db.questions.find((q) => q.id === idOrNumber || q.question_number.toString() === idOrNumber);
  }
  getQuestionByIndex(index) {
    const sorted = this.getQuestions();
    return sorted[index];
  }
  addQuestion(question) {
    const maxNum = this.db.questions.reduce((max, q) => Math.max(max, q.question_number), 0);
    const newId = `Q${String(maxNum + 1).padStart(2, "0")}`;
    const newQuestion = {
      ...question,
      id: newId,
      question_number: question.question_number || maxNum + 1,
      points: question.points ?? 0.6,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.db.questions.push(newQuestion);
    this.save();
    return newQuestion;
  }
  updateQuestion(id, updates) {
    const index = this.db.questions.findIndex((q) => q.id === id);
    if (index === -1) {
      throw new Error(`Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi v\u1EDBi ID ${id}`);
    }
    this.db.questions[index] = { ...this.db.questions[index], ...updates };
    this.save();
    return this.db.questions[index];
  }
  bulkImportQuestions(importedQuestions, mode = "REPLACE", resetSessions = true) {
    if (!Array.isArray(importedQuestions) || importedQuestions.length === 0) {
      throw new Error("Danh s\xE1ch c\xE2u h\u1ECFi n\u1EA1p v\xE0o kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    if (mode === "REPLACE") {
      const newQuestionsList = importedQuestions.map((q, idx) => ({
        id: `Q${String(idx + 1).padStart(2, "0")}`,
        question_number: idx + 1,
        content: q.content.trim(),
        option_a: q.option_a.trim(),
        option_b: q.option_b.trim(),
        option_c: q.option_c.trim(),
        option_d: q.option_d.trim(),
        correct_answer: (q.correct_answer || "A").toUpperCase(),
        points: typeof q.points === "number" ? q.points : 0.6,
        time_limit: q.time_limit || 15,
        category: q.category ? q.category.trim() : "T\u1ED5ng h\u1EE3p",
        explanation: q.explanation ? q.explanation.trim() : void 0,
        image_url: q.image_url || void 0,
        question_type: "MULTIPLE_CHOICE",
        created_at: now
      }));
      this.db.questions = newQuestionsList;
    } else {
      const startNum = this.db.questions.reduce((max, q) => Math.max(max, q.question_number), 0);
      const newQuestionsList = importedQuestions.map((q, idx) => {
        const qNum = startNum + idx + 1;
        return {
          id: `Q${String(qNum).padStart(2, "0")}`,
          question_number: qNum,
          content: q.content.trim(),
          option_a: q.option_a.trim(),
          option_b: q.option_b.trim(),
          option_c: q.option_c.trim(),
          option_d: q.option_d.trim(),
          correct_answer: (q.correct_answer || "A").toUpperCase(),
          points: typeof q.points === "number" ? q.points : 0.6,
          time_limit: q.time_limit || 15,
          category: q.category ? q.category.trim() : "T\u1ED5ng h\u1EE3p",
          explanation: q.explanation ? q.explanation.trim() : void 0,
          image_url: q.image_url || void 0,
          question_type: "MULTIPLE_CHOICE",
          created_at: now
        };
      });
      this.db.questions = [...this.db.questions, ...newQuestionsList];
      this.db.questions.sort((a, b) => a.question_number - b.question_number);
    }
    const totalCount = this.db.questions.length;
    this.db.competition.total_questions = totalCount;
    this.db.settings.total_questions = totalCount;
    if (resetSessions) {
      this.resetAllExamSessions();
    }
    this.logEvent(
      "SYSTEM_BOOT",
      `Admin \u0111\xE3 n\u1EA1p ${importedQuestions.length} c\xE2u h\u1ECFi m\u1EDBi (Ch\u1EBF \u0111\u1ED9: ${mode === "REPLACE" ? "Ghi \u0111\xE8" : "N\u1ED1i ti\u1EBFp"}). T\u1ED5ng s\u1ED1 c\xE2u hi\u1EC7n t\u1EA1i: ${totalCount}.`
    );
    this.saveSync();
    return { questions: this.db.questions, total: totalCount };
  }
  deleteQuestion(id) {
    const initialLen = this.db.questions.length;
    this.db.questions = this.db.questions.filter((q) => q.id !== id);
    if (this.db.questions.length !== initialLen) {
      this.db.questions.sort((a, b) => a.question_number - b.question_number);
      this.db.questions.forEach((q, idx) => {
        q.question_number = idx + 1;
      });
      this.saveSync();
      return true;
    }
    return false;
  }
  renameCategory(oldCategory, newCategory) {
    const trimmedOld = (oldCategory || "").trim();
    const trimmedNew = (newCategory || "").trim();
    if (!trimmedOld || !trimmedNew) {
      throw new Error("T\xEAn b\u1ED9 \u0111\u1EC1 c\u0169 v\xE0 m\u1EDBi kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");
    }
    let count = 0;
    this.db.questions.forEach((q) => {
      if ((q.category || "").trim().toLowerCase() === trimmedOld.toLowerCase()) {
        q.category = trimmedNew;
        count++;
      }
    });
    if (count > 0) {
      this.saveSync();
    }
    return { updatedCount: count };
  }
  deleteCategory(categoryName) {
    const trimmed = (categoryName || "").trim();
    if (!trimmed) {
      throw new Error("T\xEAn b\u1ED9 \u0111\u1EC1 c\u1EA7n x\xF3a kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.");
    }
    const initialLen = this.db.questions.length;
    this.db.questions = this.db.questions.filter(
      (q) => (q.category || "").trim().toLowerCase() !== trimmed.toLowerCase()
    );
    const deletedCount = initialLen - this.db.questions.length;
    if (deletedCount > 0) {
      this.db.questions.sort((a, b) => a.question_number - b.question_number);
      this.db.questions.forEach((q, idx) => {
        q.question_number = idx + 1;
      });
      this.db.competition.total_questions = this.db.questions.length;
      this.db.settings.total_questions = this.db.questions.length;
      this.saveSync();
    }
    return { deletedCount, remainingCount: this.db.questions.length };
  }
  // =========================================================================
  // --- INDIVIDUAL EXAM SESSIONS (30 PHÚT, 50 CÂU XÁO TRỘN ĐỘC LẬP) ---
  // =========================================================================
  getExamSessions() {
    return this.db.quiz_sessions;
  }
  getExamSession(sessionId) {
    return this.db.quiz_sessions.find((s) => s.id === sessionId);
  }
  getExamSessionByPlayer(playerId) {
    const list = this.db.quiz_sessions.filter((s) => s.playerId.toLowerCase() === playerId.toLowerCase());
    if (list.length === 0) return void 0;
    return list[list.length - 1];
  }
  createExamSession(playerId) {
    const team = this.getTeam(playerId);
    const existing = this.getExamSessionByPlayer(playerId);
    if (existing) {
      if (existing.status === "IN_PROGRESS") {
        const elapsedMs = Date.now() - existing.startTimeMs;
        if (elapsedMs >= existing.durationLimitMs) {
          return this.submitExamSession(existing.id, true);
        }
      }
      return existing;
    }
    const allQuestions = this.getQuestions();
    const durationMinutes = this.db.settings.duration_minutes || 30;
    const durationLimitMs = durationMinutes * 60 * 1e3;
    const sessionSeed = `seed_${playerId}_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const randomFn = createMulberry32(stringToSeed(sessionSeed));
    const shuffledQuestions = seededShuffle(allQuestions, randomFn);
    const displayLabels = ["A", "B", "C", "D"];
    const sessionQuestionsOrder = shuffledQuestions.map((q, qIdx) => {
      const rawOptions = [
        { optionId: "opt_a", content: q.option_a },
        { optionId: "opt_b", content: q.option_b },
        { optionId: "opt_c", content: q.option_c },
        { optionId: "opt_d", content: q.option_d }
      ];
      const shuffledOptions = seededShuffle(rawOptions, randomFn);
      const options = shuffledOptions.map((opt, optIdx) => ({
        optionId: opt.optionId,
        displayLabel: displayLabels[optIdx],
        content: opt.content
      }));
      return {
        questionId: q.id,
        displayNumber: qIdx + 1,
        originalNumber: q.question_number,
        content: q.content,
        options,
        image_url: q.image_url,
        category: q.category
      };
    });
    const newSession = {
      id: `QS-${playerId.toUpperCase()}-${Date.now()}`,
      playerId: team ? team.team_id : playerId,
      playerName: team ? team.team_name : playerId,
      displayName: team ? team.display_name : playerId,
      avatarColor: team?.avatar_color || "#3B82F6",
      startTimeMs: Date.now(),
      durationLimitMs,
      submitTimeMs: null,
      durationSec: null,
      status: "IN_PROGRESS",
      answers: {},
      correctAnswersCount: 0,
      score: 0,
      sessionSeed,
      questionsOrder: sessionQuestionsOrder,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.db.quiz_sessions.push(newSession);
    this.logEvent(
      "EXAM_STARTED",
      `\u0110\u1ED9i ${newSession.displayName} (${newSession.playerId}) \u0111\xE3 nh\u1EA5n B\u1EAET \u0110\u1EA6U L\xC0M B\xC0I. \u0110\u1EC1 thi 50 c\xE2u \u0111\xE3 \u0111\u01B0\u1EE3c x\xE1o tr\u1ED9n c\u1ED1 \u0111\u1ECBnh.`,
      newSession.playerId,
      void 0,
      { sessionId: newSession.id, seed: sessionSeed }
    );
    this.save();
    return newSession;
  }
  saveExamAnswer(sessionId, questionId, selectedOptionId) {
    const session = this.getExamSession(sessionId);
    if (!session) {
      return { success: false, error: "Kh\xF4ng t\xECm th\u1EA5y phi\xEAn thi" };
    }
    if (session.status !== "IN_PROGRESS") {
      return { success: false, error: "B\xE0i thi \u0111\xE3 k\u1EBFt th\xFAc, kh\xF4ng th\u1EC3 thay \u0111\u1ED5i \u0111\xE1p \xE1n." };
    }
    const elapsedMs = Date.now() - session.startTimeMs;
    if (elapsedMs >= session.durationLimitMs) {
      const finalized = this.submitExamSession(sessionId, true);
      return { success: false, session: finalized, error: "\u0110\xE3 h\u1EBFt th\u1EDDi gian l\xE0m b\xE0i (30 ph\xFAt)." };
    }
    const qItem = session.questionsOrder.find((q) => q.questionId === questionId);
    if (!qItem) {
      return { success: false, error: "C\xE2u h\u1ECFi kh\xF4ng t\u1ED3n t\u1EA1i trong \u0111\u1EC1 thi n\xE0y." };
    }
    session.answers[questionId] = {
      questionId,
      selectedOptionId,
      answeredAtMs: Date.now(),
      displayNumber: qItem.displayNumber
    };
    this.save();
    return { success: true, session };
  }
  submitExamSession(sessionId, isTimeout = false) {
    const session = this.getExamSession(sessionId);
    if (!session) {
      throw new Error("Kh\xF4ng t\xECm th\u1EA5y phi\xEAn thi.");
    }
    if (session.status === "SUBMITTED" || session.status === "TIMEOUT") {
      return session;
    }
    const now = Date.now();
    session.submitTimeMs = isTimeout ? session.startTimeMs + session.durationLimitMs : now;
    const elapsedMs = Math.min(session.durationLimitMs, Math.max(0, session.submitTimeMs - session.startTimeMs));
    session.durationSec = Number((elapsedMs / 1e3).toFixed(1));
    session.status = isTimeout ? "TIMEOUT" : "SUBMITTED";
    let correctCount = 0;
    const allQuestionsMap = new Map(this.getQuestions().map((q) => [q.id, q]));
    session.questionsOrder.forEach((qItem) => {
      const originalQ = allQuestionsMap.get(qItem.questionId);
      if (!originalQ) return;
      const correctOptionId = `opt_${originalQ.correct_answer.toLowerCase()}`;
      const candidateAns = session.answers[qItem.questionId];
      if (candidateAns && candidateAns.selectedOptionId === correctOptionId) {
        correctCount += 1;
      }
    });
    const pointsPerQ = this.db.settings.points_per_question || 0.6;
    session.correctAnswersCount = correctCount;
    session.score = Number((correctCount * pointsPerQ).toFixed(1));
    this.logEvent(
      isTimeout ? "EXAM_TIMEOUT" : "EXAM_SUBMITTED",
      `\u0110\u1ED9i ${session.displayName} \u0111\xE3 ${isTimeout ? "h\u1EBFt 30 ph\xFAt v\xE0 t\u1EF1 \u0111\u1ED9ng n\u1ED9p b\xE0i" : "n\u1ED9p b\xE0i"}: \u0110\xFAng ${correctCount}/${session.questionsOrder.length} c\xE2u (${session.score}/30.0 \u0111i\u1EC3m) trong ${session.durationSec}s.`,
      session.playerId,
      void 0,
      {
        sessionId: session.id,
        correctCount,
        score: session.score,
        durationSec: session.durationSec
      }
    );
    this.save();
    return session;
  }
  resetExamSession(playerId) {
    const prevLen = this.db.quiz_sessions.length;
    this.db.quiz_sessions = this.db.quiz_sessions.filter(
      (s) => s.playerId.toLowerCase() !== playerId.toLowerCase()
    );
    if (this.db.quiz_sessions.length !== prevLen) {
      this.logEvent(
        "EXAM_RESET",
        `Admin \u0111\xE3 \u0111\u1EB7t l\u1EA1i (reset) phi\xEAn thi c\u1EE7a \u0111\u1ED9i ${playerId}. \u0110\u1ED9i c\xF3 th\u1EC3 b\u1EAFt \u0111\u1EA7u l\u1EA1i phi\xEAn thi m\u1EDBi.`,
        playerId
      );
      this.save();
      return true;
    }
    return false;
  }
  resetAllExamSessions() {
    this.db.quiz_sessions = [];
    this.logEvent("EXAM_RESET", "Admin \u0111\xE3 \u0111\u1EB7t l\u1EA1i to\xE0n b\u1ED9 c\xE1c phi\xEAn thi c\u1EE7a t\u1EA5t c\u1EA3 c\xE1c \u0111\u1ED9i.");
    this.save();
  }
  calculateExamLeaderboard() {
    const teams = this.getTeams();
    const sessions = this.getExamSessions();
    const totalQ = this.db.settings.total_questions || 50;
    const allStats = teams.map((t) => {
      const session = sessions.find((s) => s.playerId.toLowerCase() === t.team_id.toLowerCase());
      if (!session) {
        return {
          team_id: t.team_id,
          team_number: t.team_number,
          team_name: t.team_name,
          display_name: t.display_name,
          total_score: 0,
          correct_count: 0,
          wrong_count: 0,
          unanswered_count: totalQ,
          answered_count: 0,
          total_questions: totalQ,
          average_response_time_sec: 0,
          total_response_time_sec: 0,
          status: "NOT_STARTED",
          submit_time_ms: null,
          start_time_ms: null,
          rank: 0,
          avatar_color: t.avatar_color
        };
      }
      const answeredCount = Object.keys(session.answers).length;
      const isCompleted = session.status === "SUBMITTED" || session.status === "TIMEOUT";
      const durationSec = session.durationSec || Math.max(0, (Date.now() - session.startTimeMs) / 1e3);
      return {
        team_id: t.team_id,
        team_number: t.team_number,
        team_name: t.team_name,
        display_name: t.display_name,
        total_score: isCompleted ? session.score : 0,
        correct_count: isCompleted ? session.correctAnswersCount : 0,
        wrong_count: isCompleted ? totalQ - session.correctAnswersCount : 0,
        unanswered_count: Math.max(0, totalQ - answeredCount),
        answered_count: answeredCount,
        total_questions: totalQ,
        average_response_time_sec: answeredCount > 0 ? Number((durationSec / answeredCount).toFixed(2)) : 0,
        total_response_time_sec: Number(durationSec.toFixed(1)),
        status: session.status,
        submit_time_ms: session.submitTimeMs,
        start_time_ms: session.startTimeMs,
        rank: 0,
        avatar_color: t.avatar_color
      };
    });
    const completedList = allStats.filter((s) => s.status === "SUBMITTED" || s.status === "TIMEOUT");
    const inProgressList = allStats.filter((s) => s.status === "IN_PROGRESS");
    const notStartedList = allStats.filter((s) => s.status === "NOT_STARTED");
    completedList.sort((a, b) => {
      if (b.correct_count !== a.correct_count) {
        return b.correct_count - a.correct_count;
      }
      if (a.total_response_time_sec !== b.total_response_time_sec) {
        return a.total_response_time_sec - b.total_response_time_sec;
      }
      if (a.submit_time_ms && b.submit_time_ms && a.submit_time_ms !== b.submit_time_ms) {
        return a.submit_time_ms - b.submit_time_ms;
      }
      return a.team_number - b.team_number;
    });
    completedList.forEach((stat, idx) => {
      stat.rank = idx + 1;
    });
    inProgressList.sort((a, b) => {
      if (b.answered_count !== a.answered_count) {
        return b.answered_count - a.answered_count;
      }
      return a.team_number - b.team_number;
    });
    inProgressList.forEach((stat) => {
      stat.rank = 0;
    });
    notStartedList.sort((a, b) => a.team_number - b.team_number);
    notStartedList.forEach((stat) => {
      stat.rank = 0;
    });
    return [...completedList, ...inProgressList, ...notStartedList];
  }
  checkAndAutoSubmitExpiredSessions() {
    const sessions = this.getExamSessions();
    const now = Date.now();
    let hasChanges = false;
    for (const session of sessions) {
      if (session.status === "IN_PROGRESS") {
        const elapsedMs = now - session.startTimeMs;
        if (elapsedMs >= session.durationLimitMs) {
          try {
            this.submitExamSession(session.id, true);
            hasChanges = true;
          } catch (e) {
            console.error(`Auto-submit failed for session ${session.id}:`, e);
          }
        }
      }
    }
    return hasChanges;
  }
  calculateLeaderboard() {
    return this.calculateExamLeaderboard();
  }
  // --- Sanitizer for Client ---
  sanitizeSessionForClient(session, serverTimeMs = Date.now()) {
    const elapsedMs = Math.max(0, serverTimeMs - session.startTimeMs);
    const remainingTimeMs = Math.max(0, session.durationLimitMs - elapsedMs);
    const remainingTimeSec = Math.floor(remainingTimeMs / 1e3);
    const clientAnswers = {};
    Object.values(session.answers).forEach((ans) => {
      clientAnswers[ans.questionId] = {
        questionId: ans.questionId,
        selectedOptionId: ans.selectedOptionId,
        answeredAtMs: ans.answeredAtMs
      };
    });
    const isCompleted = session.status === "SUBMITTED" || session.status === "TIMEOUT";
    return {
      id: session.id,
      playerId: session.playerId,
      playerName: session.playerName,
      displayName: session.displayName,
      avatarColor: session.avatarColor,
      startTimeMs: session.startTimeMs,
      durationLimitMs: session.durationLimitMs,
      serverTimeMs,
      remainingTimeSec: isCompleted ? 0 : remainingTimeSec,
      submitTimeMs: session.submitTimeMs,
      durationSec: session.durationSec,
      status: session.status,
      answers: clientAnswers,
      questions: session.questionsOrder,
      totalQuestions: session.questionsOrder.length,
      correctAnswersCount: isCompleted ? session.correctAnswersCount : void 0,
      score: isCompleted ? session.score : void 0
    };
  }
  // --- Question Sessions (Legacy / Olympic Round Support) ---
  createSession(sessionData) {
    this.db.question_sessions.push(sessionData);
    this.db.competition.current_session_id = sessionData.id;
    this.save();
    return sessionData;
  }
  getSession(sessionId) {
    return this.db.question_sessions.find((s) => s.id === sessionId);
  }
  getSessions() {
    return this.db.question_sessions;
  }
  updateSession(sessionId, updates) {
    const session = this.getSession(sessionId);
    if (session) {
      Object.assign(session, updates);
      this.save();
    }
    return session;
  }
  // --- Answers ---
  recordAnswer(answer) {
    const existing = this.db.answers.find(
      (a) => a.question_session_id === answer.question_session_id && a.team_id.toLowerCase() === answer.team_id.toLowerCase()
    );
    if (existing) {
      throw new Error(`\u0110\u1ED9i ${answer.team_id} \u0111\xE3 g\u1EEDi c\xE2u tr\u1EA3 l\u1EDDi cho c\xE2u h\u1ECFi n\xE0y tr\u01B0\u1EDBc \u0111\xF3 r\u1ED3i.`);
    }
    this.db.answers.push(answer);
    this.save();
    return answer;
  }
  getAnswersForSession(sessionId) {
    return this.db.answers.filter((a) => a.question_session_id === sessionId);
  }
  getAllAnswers() {
    return this.db.answers;
  }
  // --- Event Logs ---
  logEvent(eventType, description, teamId, questionId, metadata) {
    const logEntry = {
      id: `EVT-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp_iso: (/* @__PURE__ */ new Date()).toISOString(),
      timestamp_ms: Date.now(),
      event_type: eventType,
      team_id: teamId,
      question_id: questionId,
      description,
      metadata
    };
    this.db.event_logs.unshift(logEntry);
    if (this.db.event_logs.length > 1e3) {
      this.db.event_logs = this.db.event_logs.slice(0, 1e3);
    }
    this.save();
    return logEntry;
  }
  getEventLogs(filters) {
    let logs = this.db.event_logs;
    if (filters) {
      if (filters.team_id) {
        logs = logs.filter((l) => l.team_id?.toLowerCase() === filters.team_id?.toLowerCase());
      }
      if (filters.question_id) {
        logs = logs.filter((l) => l.question_id === filters.question_id);
      }
      if (filters.event_type && filters.event_type !== "ALL") {
        logs = logs.filter((l) => l.event_type === filters.event_type);
      }
      if (filters.limit) {
        logs = logs.slice(0, filters.limit);
      }
    }
    return logs;
  }
  // --- Completed Questions Tracking ---
  getCompletedQuestionIds() {
    const ids = /* @__PURE__ */ new Set();
    this.db.question_sessions.forEach((s) => {
      if (s.status === "RESULT" || s.status === "TIME_UP" || s.status === "ANSWER_LOCKED" || s.status === "FINISHED") {
        ids.add(s.question_id);
      }
    });
    return Array.from(ids);
  }
  getCompletedQuestionNumbers() {
    const nums = /* @__PURE__ */ new Set();
    this.db.question_sessions.forEach((s) => {
      if (s.status === "RESULT" || s.status === "TIME_UP" || s.status === "ANSWER_LOCKED" || s.status === "FINISHED") {
        nums.add(s.question_number);
      }
    });
    return Array.from(nums);
  }
  resetToDemo() {
    this.db.competition = {
      id: "COMP-2026-LAN",
      name: "H\u1ED8I THI OLYMPIC CNTT N\u0102M 2026",
      description: "H\u1ED9i thi Olympic C\xF4ng ngh\u1EC7 Th\xF4ng tin n\u0103m 2026 - Thi tr\u1EAFc nghi\u1EC7m tr\u1EF1c tuy\u1EBFn 50 c\xE2u / 30 ph\xFAt m\u1EA1ng LAN",
      organizer: "BAN T\u1ED4 CH\u1EE8C H\u1ED8I THI",
      event_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      logo_url: "",
      is_active: true,
      current_question_index: 0,
      state: "IDLE",
      total_questions: 50,
      duration_minutes: 30,
      points_per_question: 0.6
    };
    this.db.questions = [...DEMO_QUESTIONS];
    this.db.question_sessions = [];
    this.db.quiz_sessions = [];
    this.db.answers = [];
    this.db.event_logs = [
      {
        id: "LOG-RESET-" + Date.now(),
        timestamp_iso: (/* @__PURE__ */ new Date()).toISOString(),
        timestamp_ms: Date.now(),
        event_type: "SYSTEM_BOOT",
        description: "H\u1EC7 th\u1ED1ng thi tr\u1EAFc nghi\u1EC7m \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u1EB7t l\u1EA1i ban \u0111\u1EA7u v\u1EDBi 50 c\xE2u h\u1ECFi chu\u1EA9n v\xE0 30 ph\xFAt l\xE0m b\xE0i."
      }
    ];
    this.save();
  }
  // --- Settings ---
  getSettings() {
    return this.db.settings;
  }
  updateSettings(updates) {
    this.db.settings = { ...this.db.settings, ...updates };
    this.save();
    return this.db.settings;
  }
};
var db = new QuizDatabase();

// server/quizEngine.ts
var QuizEngine = class {
  constructor() {
    this.activeTimer = null;
    this.serverSequenceCounter = 100;
    this.tickInterval = null;
    this.lastSummaryResult = null;
    const comp = db.getCompetition();
    if (comp.state === "RUNNING") {
      db.setQuizState("RECOVERY_REQUIRED");
      db.logEvent("SYSTEM_BOOT", "M\xE1y ch\u1EE7 v\u1EEBa kh\u1EDFi \u0111\u1ED9ng l\u1EA1i khi c\xE2u h\u1ECFi \u0111ang di\u1EC5n ra. Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 y\xEAu c\u1EA7u x\xE1c nh\u1EADn kh\xF4i ph\u1EE5c.");
    }
  }
  setEventCallbacks(callbacks) {
    this.onStateChangeCallback = callbacks.onStateChange;
    this.onTimeTickCallback = callbacks.onTimeTick;
    this.onAnswerReceivedCallback = callbacks.onAnswerReceived;
  }
  getState() {
    return db.getCompetition().state;
  }
  getCurrentQuestion() {
    const comp = db.getCompetition();
    return db.getQuestionByIndex(comp.current_question_index);
  }
  getSanitizedCurrentQuestion() {
    const q = this.getCurrentQuestion();
    if (!q) return void 0;
    return {
      id: q.id,
      question_number: q.question_number,
      content: q.content,
      option_a: q.option_a,
      option_b: q.option_b,
      option_c: q.option_c,
      option_d: q.option_d,
      time_limit: q.time_limit,
      points: q.points,
      image_url: q.image_url,
      question_type: q.question_type,
      category: q.category
    };
  }
  getCurrentSession() {
    const comp = db.getCompetition();
    if (!comp.current_session_id) return void 0;
    return db.getSession(comp.current_session_id);
  }
  // --- ACTIONS ---
  /**
   * Show Question Board (15 slots)
   */
  showQuestionBoard() {
    this.clearTimers();
    db.setQuizState("QUESTION_BOARD");
    db.updateCompetition({
      state: "QUESTION_BOARD",
      current_session_id: void 0,
      selected_team_id: void 0
    });
    const completedQuestionNumbers = db.getCompletedQuestionNumbers();
    const completedQuestionIds = db.getCompletedQuestionIds();
    db.logEvent("SYSTEM_BOOT", "Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 m\u1EDF B\u1EA2NG 15 \xD4 C\xC2U H\u1ECEI.");
    this.onStateChangeCallback?.("QUESTION_BOARD", {
      completedQuestionNumbers,
      completedQuestionIds,
      totalQuestions: db.getQuestions().length
    });
    return { success: true, completedQuestionNumbers };
  }
  /**
   * Admin selects a specific question (1..15)
   */
  selectQuestion(questionNumberOrId, selectedTeamId) {
    this.clearTimers();
    const questions = db.getQuestions();
    const targetQ = db.getQuestion(questionNumberOrId);
    if (!targetQ) {
      return { success: false, error: `Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi ${questionNumberOrId}` };
    }
    const completedNums = db.getCompletedQuestionNumbers();
    if (completedNums.includes(targetQ.question_number)) {
      return { success: false, error: `C\xE2u h\u1ECFi s\u1ED1 ${targetQ.question_number} \u0111\xE3 ho\xE0n th\xE0nh, kh\xF4ng th\u1EC3 ch\u1ECDn l\u1EA1i.` };
    }
    const targetIndex = questions.findIndex((q) => q.id === targetQ.id);
    if (targetIndex === -1) {
      return { success: false, error: "Kh\xF4ng t\xECm th\u1EA5y v\u1ECB tr\xED c\xE2u h\u1ECFi" };
    }
    this.lastSummaryResult = null;
    db.updateCompetition({
      current_question_index: targetIndex,
      current_session_id: void 0,
      selected_team_id: selectedTeamId || void 0,
      state: "QUESTION_READY"
    });
    const selectedTeam = selectedTeamId ? db.getTeam(selectedTeamId) : void 0;
    const teamMsg = selectedTeam ? ` (\u0110\u1ED9i ch\u1ECDn: ${selectedTeam.team_name} - ${selectedTeam.display_name})` : "";
    db.logEvent(
      "QUESTION_READY",
      `Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 m\u1EDF C\xC2U ${targetQ.question_number}${teamMsg}: ${targetQ.content.substring(0, 50)}...`,
      selectedTeamId,
      targetQ.id
    );
    this.onStateChangeCallback?.("QUESTION_READY", {
      questionIndex: targetIndex,
      question: this.getSanitizedCurrentQuestion(),
      selectedTeamId: selectedTeamId || void 0,
      selectedTeam,
      completedQuestionNumbers: completedNums
    });
    return { success: true, question: targetQ };
  }
  /**
   * Move to or prepare a specific question index
   */
  prepareQuestion(questionIndex) {
    this.clearTimers();
    const comp = db.getCompetition();
    const totalQuestions = db.getQuestions().length;
    let targetIndex = comp.current_question_index;
    if (questionIndex !== void 0) {
      if (questionIndex < 0 || questionIndex >= totalQuestions) {
        return { success: false, error: "Ch\u1EC9 s\u1ED1 c\xE2u h\u1ECFi kh\xF4ng h\u1EE3p l\u1EC7" };
      }
      targetIndex = questionIndex;
    }
    const question = db.getQuestionByIndex(targetIndex);
    if (!question) {
      return { success: false, error: "Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi" };
    }
    this.lastSummaryResult = null;
    db.updateCompetition({
      current_question_index: targetIndex,
      current_session_id: void 0,
      state: "QUESTION_READY"
    });
    db.logEvent(
      "QUESTION_READY",
      `Chu\u1EA9n b\u1ECB c\xE2u h\u1ECFi s\u1ED1 ${question.question_number}: ${question.content.substring(0, 50)}...`,
      void 0,
      question.id
    );
    this.onStateChangeCallback?.("QUESTION_READY", {
      questionIndex: targetIndex,
      question: this.getSanitizedCurrentQuestion(),
      completedQuestionNumbers: db.getCompletedQuestionNumbers()
    });
    return { success: true, question };
  }
  /**
   * Start the question countdown and allow team submissions
   */
  startQuestion() {
    const comp = db.getCompetition();
    const question = this.getCurrentQuestion();
    if (!question) {
      return { success: false, error: "Ch\u01B0a ch\u1ECDn c\xE2u h\u1ECFi n\xE0o \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u" };
    }
    if (comp.state === "RUNNING") {
      return { success: false, error: "C\xE2u h\u1ECFi \u0111ang di\u1EC5n ra" };
    }
    this.clearTimers();
    const sessionId = `SESS-Q${question.question_number}-${Date.now()}`;
    const startedAt = Date.now();
    const timeLimitMs = question.time_limit * 1e3;
    const endedAtExpected = startedAt + timeLimitMs;
    const newSession = {
      id: sessionId,
      competition_id: comp.id,
      question_id: question.id,
      question_number: question.question_number,
      selected_team_id: comp.selected_team_id,
      status: "RUNNING",
      started_at_ms: startedAt,
      ended_at_ms: endedAtExpected,
      time_limit_ms: timeLimitMs,
      correct_answer: question.correct_answer,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.createSession(newSession);
    db.setQuizState("RUNNING");
    db.logEvent(
      "QUESTION_STARTED",
      `B\u1EAFt \u0111\u1EA7u c\xE2u h\u1ECFi s\u1ED1 ${question.question_number} (${question.time_limit} gi\xE2y - ${question.points} \u0111i\u1EC3m)`,
      void 0,
      question.id,
      { sessionId, timeLimit: question.time_limit }
    );
    this.onStateChangeCallback?.("RUNNING", {
      session: newSession,
      question: this.getSanitizedCurrentQuestion(),
      startedAt,
      endedAt: endedAtExpected,
      timeLimitSec: question.time_limit
    });
    this.tickInterval = setInterval(() => {
      const now = Date.now();
      const remainingMs = Math.max(0, endedAtExpected - now);
      const remainingSec = Number((remainingMs / 1e3).toFixed(1));
      this.onTimeTickCallback?.(remainingSec, remainingMs);
      if (remainingMs <= 0) {
        this.handleTimeUp();
      }
    }, 100);
    this.activeTimer = setTimeout(() => {
      this.handleTimeUp();
    }, timeLimitMs);
    return { success: true, session: newSession };
  }
  /**
   * Stop / Lock question prematurely
   */
  lockQuestion() {
    this.clearTimers();
    const session = this.getCurrentSession();
    if (!session) {
      return { success: false, error: "Kh\xF4ng c\xF3 phi\xEAn c\xE2u h\u1ECFi n\xE0o" };
    }
    db.updateSession(session.id, { status: "ANSWER_LOCKED", ended_at_ms: Date.now() });
    db.setQuizState("ANSWER_LOCKED");
    db.logEvent(
      "QUESTION_LOCKED",
      `Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 b\u1EA5m CH\u1ED0T / KH\xD3A c\xE2u h\u1ECFi s\u1ED1 ${session.question_number}`,
      void 0,
      session.question_id
    );
    this.onStateChangeCallback?.("ANSWER_LOCKED", {
      session,
      answersCount: db.getAnswersForSession(session.id).length
    });
    return { success: true };
  }
  /**
   * Automatic or manual Time Up
   */
  handleTimeUp() {
    this.clearTimers();
    const comp = db.getCompetition();
    if (comp.state !== "RUNNING") return;
    const session = this.getCurrentSession();
    if (!session) return;
    db.updateSession(session.id, { status: "TIME_UP", ended_at_ms: Date.now() });
    db.setQuizState("TIME_UP");
    db.logEvent(
      "QUESTION_TIME_UP",
      `H\u1EBFt th\u1EDDi gian tr\u1EA3 l\u1EDDi c\xE2u h\u1ECFi s\u1ED1 ${session.question_number}`,
      void 0,
      session.question_id
    );
    this.onStateChangeCallback?.("TIME_UP", {
      session,
      answersCount: db.getAnswersForSession(session.id).length
    });
  }
  /**
   * Receive and validate team's answer submission (SINGLE SOURCE OF TRUTH)
   */
  submitAnswer(teamId, sessionId, answer, ipAddress) {
    const comp = db.getCompetition();
    const now = Date.now();
    this.serverSequenceCounter += 1;
    const seq = this.serverSequenceCounter;
    if (comp.state !== "RUNNING") {
      const err = comp.state === "TIME_UP" || comp.state === "ANSWER_LOCKED" ? "Th\u1EDDi gian l\xE0m b\xE0i \u0111\xE3 k\u1EBFt th\xFAc. \u0110\xE1p \xE1n b\u1ECB t\u1EEB ch\u1ED1i." : "Cu\u1ED9c thi hi\u1EC7n ch\u01B0a m\u1EDF nh\u1EADn \u0111\xE1p \xE1n.";
      db.logEvent("ANSWER_REJECTED", `T\u1EEB ch\u1ED1i \u0111\xE1p \xE1n t\u1EEB ${teamId}: ${err}`, teamId, void 0, { reason: comp.state });
      return { success: false, error: err };
    }
    const currentSession = this.getCurrentSession();
    if (!currentSession || currentSession.id !== sessionId) {
      const err = "Phi\xEAn c\xE2u h\u1ECFi kh\xF4ng h\u1EE3p l\u1EC7 ho\u1EB7c \u0111\xE3 k\u1EBFt th\xFAc.";
      db.logEvent("ANSWER_REJECTED", `T\u1EEB ch\u1ED1i \u0111\xE1p \xE1n t\u1EEB ${teamId}: Sai m\xE3 phi\xEAn`, teamId);
      return { success: false, error: err };
    }
    const team = db.getTeam(teamId);
    if (!team) {
      return { success: false, error: "M\xE3 \u0111\u1ED9i kh\xF4ng t\u1ED3n t\u1EA1i trong h\u1EC7 th\u1ED1ng." };
    }
    if (team.status === "LOCKED") {
      return { success: false, error: "\u0110\u1ED9i c\u1EE7a b\u1EA1n \u0111ang b\u1ECB kh\xF3a b\u1EDFi Qu\u1EA3n tr\u1ECB vi\xEAn." };
    }
    const maxAllowedTime = currentSession.started_at_ms + currentSession.time_limit_ms + 100;
    if (now > maxAllowedTime) {
      const err = "\u0110\xE1p \xE1n g\u1EEDi \u0111\u1EBFn m\xE1y ch\u1EE7 sau khi h\u1EBFt gi\u1EDD. B\u1ECB t\u1EEB ch\u1ED1i.";
      db.logEvent("ANSWER_REJECTED", `T\u1EEB ch\u1ED1i \u0111\xE1p \xE1n t\u1EEB ${teamId}: H\u1EBFt gi\u1EDD (${now - currentSession.started_at_ms}ms)`, teamId);
      return { success: false, error: err };
    }
    if (!["A", "B", "C", "D"].includes(answer)) {
      return { success: false, error: "\u0110\xE1p \xE1n kh\xF4ng h\u1EE3p l\u1EC7. Ch\u1EC9 ch\u1EA5p nh\u1EADn A, B, C, D." };
    }
    const existingAnswers = db.getAnswersForSession(sessionId);
    const alreadyAnswered = existingAnswers.some((a) => a.team_id.toLowerCase() === teamId.toLowerCase());
    if (alreadyAnswered) {
      const err = "\u0110\u1ED9i c\u1EE7a b\u1EA1n \u0111\xE3 g\u1EEDi \u0111\xE1p \xE1n cho c\xE2u h\u1ECFi n\xE0y tr\u01B0\u1EDBc \u0111\xF3. Kh\xF4ng th\u1EC3 s\u1EEDa \u0111\xE1p \xE1n!";
      db.logEvent("ANSWER_REJECTED", `T\u1EEB ch\u1ED1i \u0111\xE1p \xE1n g\u1EEDi l\u1EA7n 2 t\u1EEB ${teamId}`, teamId);
      return { success: false, error: err };
    }
    const responseTimeSec = Number(((now - currentSession.started_at_ms) / 1e3).toFixed(3));
    const question = db.getQuestion(currentSession.question_id);
    const isCorrect = question ? question.correct_answer === answer : false;
    const score = isCorrect && question ? question.points : 0;
    const submission = {
      id: `ANS-${sessionId}-${teamId}`,
      question_session_id: sessionId,
      question_id: currentSession.question_id,
      team_id: team.team_id,
      answer,
      received_at_ms: now,
      response_time_ms: responseTimeSec,
      is_correct: isCorrect,
      score,
      server_sequence: seq,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.recordAnswer(submission);
    db.logEvent(
      "ANSWER_SUBMITTED",
      `${team.team_name} (${team.display_name}) \u0111\xE3 g\u1EEDi \u0111\xE1p \xE1n [${answer}] trong ${responseTimeSec}s (Sequence: ${seq})`,
      team.team_id,
      currentSession.question_id,
      { answer, responseTimeSec, sequence: seq, ip: ipAddress }
    );
    const totalSessionAnswers = db.getAnswersForSession(sessionId).length;
    this.onAnswerReceivedCallback?.(submission, totalSessionAnswers);
    return { success: true, submission };
  }
  /**
   * Reveal question results, fastest team, and update scoreboards
   */
  revealResults() {
    this.clearTimers();
    const session = this.getCurrentSession();
    if (!session) {
      return { success: false, error: "Kh\xF4ng c\xF3 phi\xEAn c\xE2u h\u1ECFi hi\u1EC7n t\u1EA1i \u0111\u1EC3 c\xF4ng b\u1ED1 k\u1EBFt qu\u1EA3" };
    }
    const question = db.getQuestion(session.question_id);
    if (!question) {
      return { success: false, error: "Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi" };
    }
    const allTeams = db.getTeams();
    const sessionAnswers = db.getAnswersForSession(session.id);
    const correctSubmissions = sessionAnswers.filter((a) => a.is_correct).sort((a, b) => {
      if (a.response_time_ms !== b.response_time_ms) {
        return a.response_time_ms - b.response_time_ms;
      }
      return a.server_sequence - b.server_sequence;
    });
    correctSubmissions.forEach((sub, idx) => {
      if (idx === 0) {
        sub.score = 2;
      } else if (idx === 1) {
        sub.score = 1.5;
      } else {
        sub.score = 0;
      }
    });
    sessionAnswers.filter((a) => !a.is_correct).forEach((sub) => {
      sub.score = 0;
    });
    db.save();
    const results = allTeams.map((team) => {
      const sub = sessionAnswers.find((a) => a.team_id.toLowerCase() === team.team_id.toLowerCase());
      return {
        team_id: team.team_id,
        team_name: team.team_name,
        display_name: team.display_name,
        answer: sub ? sub.answer : null,
        response_time_sec: sub ? sub.response_time_ms : null,
        is_correct: sub ? sub.is_correct : false,
        score: sub ? sub.score : 0,
        server_sequence: sub ? sub.server_sequence : 999999,
        is_fastest: false
      };
    });
    const correctItems = results.filter((r) => r.is_correct && r.response_time_sec !== null).sort((a, b) => {
      if (a.response_time_sec !== b.response_time_sec) {
        return a.response_time_sec - b.response_time_sec;
      }
      return a.server_sequence - b.server_sequence;
    });
    let fastestTeamSummary = void 0;
    if (correctItems.length > 0) {
      const fastest = correctItems[0];
      fastest.is_fastest = true;
      fastestTeamSummary = {
        team_id: fastest.team_id,
        team_name: fastest.team_name,
        display_name: fastest.display_name,
        response_time_sec: fastest.response_time_sec,
        answer: fastest.answer
      };
    }
    results.sort((a, b) => {
      if (a.is_correct && !b.is_correct) return -1;
      if (!a.is_correct && b.is_correct) return 1;
      if (a.response_time_sec !== null && b.response_time_sec !== null) {
        return a.response_time_sec - b.response_time_sec;
      }
      if (a.response_time_sec !== null && b.response_time_sec === null) return -1;
      if (a.response_time_sec === null && b.response_time_sec !== null) return 1;
      return 0;
    });
    const correctCount = results.filter((r) => r.is_correct).length;
    const wrongCount = results.filter((r) => !r.is_correct && r.answer !== null).length;
    const unansweredCount = results.filter((r) => r.answer === null).length;
    const summaryResult = {
      session_id: session.id,
      question_id: question.id,
      question_number: question.question_number,
      content: question.content,
      correct_answer: question.correct_answer,
      explanation: question.explanation,
      total_submissions: sessionAnswers.length,
      correct_count: correctCount,
      wrong_count: wrongCount,
      unanswered_count: unansweredCount,
      fastest_team: fastestTeamSummary,
      results
    };
    this.lastSummaryResult = summaryResult;
    db.updateSession(session.id, { status: "RESULT" });
    db.setQuizState("RESULT");
    const fastestText = fastestTeamSummary ? ` | \u0110\u1ED9i nhanh nh\u1EA5t: ${fastestTeamSummary.team_name} (${fastestTeamSummary.response_time_sec}s)` : "";
    db.logEvent(
      "QUESTION_RESULT",
      `C\xF4ng b\u1ED1 k\u1EBFt qu\u1EA3 C\xE2u ${question.question_number}: \u0110\xE1p \xE1n \u0111\xFAng [${question.correct_answer}] | \u0110\xFAng: ${correctCount}/${allTeams.length}${fastestText}`,
      void 0,
      question.id,
      { correct_answer: question.correct_answer, correctCount, fastest: fastestTeamSummary }
    );
    const leaderboard = db.calculateLeaderboard();
    const completedQuestionNumbers = db.getCompletedQuestionNumbers();
    const completedQuestionIds = db.getCompletedQuestionIds();
    this.onStateChangeCallback?.("RESULT", {
      result: summaryResult,
      leaderboard,
      completedQuestionNumbers,
      completedQuestionIds
    });
    return { success: true, result: summaryResult };
  }
  /**
   * Advance to next question or conclude
   */
  nextQuestion() {
    const comp = db.getCompetition();
    const questions = db.getQuestions();
    const nextIdx = comp.current_question_index + 1;
    if (nextIdx >= questions.length) {
      db.setQuizState("FINISHED");
      db.logEvent("COMPETITION_FINISHED", "Cu\u1ED9c thi \u0111\xE3 ho\xE0n th\xE0nh t\u1EA5t c\u1EA3 c\xE1c c\xE2u h\u1ECFi!");
      const leaderboard = db.calculateLeaderboard();
      this.onStateChangeCallback?.("FINISHED", { leaderboard });
      return { success: true, finished: true };
    }
    return this.prepareQuestion(nextIdx);
  }
  prevQuestion() {
    const comp = db.getCompetition();
    const prevIdx = Math.max(0, comp.current_question_index - 1);
    return this.prepareQuestion(prevIdx);
  }
  finishCompetition() {
    this.clearTimers();
    db.setQuizState("FINISHED");
    db.logEvent("COMPETITION_FINISHED", "Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 k\u1EBFt th\xFAc cu\u1ED9c thi v\xE0 ch\u1ED1t b\u1EA3ng x\u1EBFp h\u1EA1ng chung cu\u1ED9c.");
    const leaderboard = db.calculateLeaderboard();
    this.onStateChangeCallback?.("FINISHED", { leaderboard });
    return { success: true };
  }
  showLeaderboard() {
    this.clearTimers();
    db.setQuizState("LEADERBOARD");
    db.logEvent("SCORE_UPDATED", "Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 k\xEDch ho\u1EA1t TR\xCCNH CHI\u1EBEU B\u1EA2NG X\u1EBEP H\u1EA0NG T\u1ED4NG \u0110I\u1EC2M");
    const leaderboard = db.calculateLeaderboard();
    this.onStateChangeCallback?.("LEADERBOARD", { leaderboard });
    return { success: true, leaderboard };
  }
  showQuestionResult() {
    this.clearTimers();
    let summary = this.lastSummaryResult;
    if (!summary) {
      const session = this.getCurrentSession();
      if (session) {
        const rev = this.revealResults();
        summary = rev.result || null;
      }
    }
    if (!summary) {
      const sessions = db.getSessions();
      if (sessions.length > 0) {
        const lastSession = sessions[sessions.length - 1];
        const q = db.getQuestion(lastSession.question_id);
        if (q) {
          const allTeams = db.getTeams();
          const sessionAnswers = db.getAnswersForSession(lastSession.id);
          const correctSubmissions = sessionAnswers.filter((a) => a.is_correct).sort((a, b) => {
            if (a.response_time_ms !== b.response_time_ms) {
              return a.response_time_ms - b.response_time_ms;
            }
            return a.server_sequence - b.server_sequence;
          });
          const results = allTeams.map((team) => {
            const sub = sessionAnswers.find((a) => a.team_id.toLowerCase() === team.team_id.toLowerCase());
            return {
              team_id: team.team_id,
              team_name: team.team_name,
              display_name: team.display_name,
              answer: sub ? sub.answer : null,
              response_time_sec: sub ? sub.response_time_ms : null,
              is_correct: sub ? sub.is_correct : false,
              score: sub ? sub.score : 0,
              server_sequence: sub ? sub.server_sequence : 999999,
              is_fastest: false
            };
          });
          if (correctSubmissions.length > 0) {
            const fastestSub = correctSubmissions[0];
            const item = results.find((r) => r.team_id === fastestSub.team_id);
            if (item) item.is_fastest = true;
          }
          results.sort((a, b) => {
            if (a.is_correct && !b.is_correct) return -1;
            if (!a.is_correct && b.is_correct) return 1;
            if (a.response_time_sec !== null && b.response_time_sec !== null) {
              return a.response_time_sec - b.response_time_sec;
            }
            if (a.response_time_sec !== null && b.response_time_sec === null) return -1;
            if (a.response_time_sec === null && b.response_time_sec !== null) return 1;
            return 0;
          });
          summary = {
            session_id: lastSession.id,
            question_id: q.id,
            question_number: q.question_number,
            content: q.content,
            correct_answer: q.correct_answer,
            explanation: q.explanation,
            total_submissions: sessionAnswers.length,
            correct_count: results.filter((r) => r.is_correct).length,
            wrong_count: results.filter((r) => !r.is_correct && r.answer !== null).length,
            unanswered_count: results.filter((r) => r.answer === null).length,
            fastest_team: correctSubmissions.length > 0 ? {
              team_id: correctSubmissions[0].team_id,
              team_name: db.getTeam(correctSubmissions[0].team_id)?.team_name || correctSubmissions[0].team_id,
              display_name: db.getTeam(correctSubmissions[0].team_id)?.display_name || correctSubmissions[0].team_id,
              response_time_sec: correctSubmissions[0].response_time_ms,
              answer: correctSubmissions[0].answer
            } : void 0,
            results
          };
          this.lastSummaryResult = summary;
        }
      }
    }
    if (!summary) {
      return { success: false, error: "Ch\u01B0a c\xF3 k\u1EBFt qu\u1EA3 c\xE2u h\u1ECFi \u0111\u1EC3 tr\xECnh chi\u1EBFu" };
    }
    db.setQuizState("SHOW_QUESTION_RESULT");
    db.logEvent("SCORE_UPDATED", `Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 k\xEDch ho\u1EA1t TR\xCCNH CHI\u1EBEU K\u1EBET QU\u1EA2 C\xC2U H\u1ECEI ${summary.question_number}`);
    const fullQ = db.getQuestion(summary.question_id);
    this.onStateChangeCallback?.("SHOW_QUESTION_RESULT", {
      result: summary,
      question: fullQ
    });
    return { success: true, result: summary };
  }
  resetCompetition() {
    this.clearTimers();
    db.resetToDemo();
    this.onStateChangeCallback?.("IDLE", { message: "\u0110\xE3 thi\u1EBFt l\u1EADp l\u1EA1i to\xE0n b\u1ED9 cu\u1ED9c thi" });
    return { success: true };
  }
  recoverQuestion(action) {
    this.clearTimers();
    if (action === "CONTINUE") {
      const q = this.getCurrentQuestion();
      if (q) {
        return this.prepareQuestion(db.getCompetition().current_question_index);
      }
    }
    db.setQuizState("IDLE");
    db.logEvent("COMPETITION_RESET", "Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 h\u1EE7y phi\xEAn c\xE2u h\u1ECFi d\u1EDF dang sau khi ph\u1EE5c h\u1ED3i h\u1EC7 th\u1ED1ng.");
    this.onStateChangeCallback?.("IDLE");
    return { success: true };
  }
  /**
   * Simulation mode: Simulates connected or all teams answering concurrently
   */
  simulateTeamAnswers(count = 10) {
    const comp = db.getCompetition();
    if (comp.state !== "RUNNING") {
      return { simulated: 0, errors: ["Cu\u1ED9c thi kh\xF4ng trong tr\u1EA1ng th\xE1i RUNNING. H\xE3y b\u1EA5m B\u1EAFt \u0111\u1EA7u tr\u01B0\u1EDBc."] };
    }
    const session = this.getCurrentSession();
    if (!session) {
      return { simulated: 0, errors: ["Kh\xF4ng t\xECm th\u1EA5y phi\xEAn c\xE2u h\u1ECFi."] };
    }
    const question = db.getQuestion(session.question_id);
    if (!question) {
      return { simulated: 0, errors: ["Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi."] };
    }
    const teams = db.getTeams().slice(0, count);
    const errors = [];
    let simulatedCount = 0;
    teams.forEach((team, idx) => {
      const delayMs = Math.floor(1200 + Math.random() * (question.time_limit * 1e3 - 2500));
      const options = ["A", "B", "C", "D"];
      const isCorrect = Math.random() < 0.75;
      const pickedAnswer = isCorrect ? question.correct_answer : options[Math.floor(Math.random() * options.length)];
      setTimeout(() => {
        if (db.getCompetition().state === "RUNNING") {
          const res = this.submitAnswer(team.team_id, session.id, pickedAnswer, "127.0.0.1 (Simulator)");
          if (res.success) {
            simulatedCount++;
          }
        }
      }, delayMs);
    });
    db.logEvent(
      "SIMULATION_TRIGGERED",
      `Kh\u1EDFi ch\u1EA1y m\xF4 ph\u1ECFng ${teams.length} \u0111\u1ED9i tr\u1EA3 l\u1EDDi t\u1EF1 \u0111\u1ED9ng cho c\xE2u h\u1ECFi ${question.question_number}`
    );
    return { simulated: teams.length, errors };
  }
  clearTimers() {
    if (this.activeTimer) {
      clearTimeout(this.activeTimer);
      this.activeTimer = null;
    }
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
  }
  /**
   * Generates full snapshot for a reconnecting client
   */
  getClientSnapshot(teamId) {
    const comp = db.getCompetition();
    const currentQ = this.getSanitizedCurrentQuestion();
    const session = this.getCurrentSession();
    const leaderboard = db.calculateLeaderboard();
    let teamAnswered = false;
    let teamAnswerOption = void 0;
    let teamResponseTime = void 0;
    if (teamId && session) {
      const existing = db.getAnswersForSession(session.id).find(
        (a) => a.team_id.toLowerCase() === teamId.toLowerCase()
      );
      if (existing) {
        teamAnswered = true;
        teamAnswerOption = existing.answer;
        teamResponseTime = existing.response_time_ms;
      }
    }
    let remainingMs = 0;
    if (comp.state === "RUNNING" && session) {
      remainingMs = Math.max(0, session.ended_at_ms - Date.now());
    }
    return {
      competition: comp,
      currentQuestion: currentQ,
      session,
      remainingMs,
      teamAnswered,
      teamAnswerOption,
      teamResponseTime,
      leaderboard,
      teams: db.getTeams(),
      questions: db.getQuestions(),
      completedQuestionNumbers: db.getCompletedQuestionNumbers(),
      completedQuestionIds: db.getCompletedQuestionIds(),
      result: this.lastSummaryResult || void 0
    };
  }
  getLastSummaryResult() {
    return this.lastSummaryResult;
  }
  getCurrentQuestionSummary() {
    return this.lastSummaryResult;
  }
  handleRecovery(continueIfRunning = true) {
    const comp = db.getCompetition();
    return { success: true, message: "Kh\xF4i ph\u1EE5c tr\u1EA1ng th\xE1i ho\xE0n t\u1EA5t", state: comp.state };
  }
  simulateAnswersForAllTeams(count) {
    return { success: true, message: "\u0110\xE3 ho\xE0n th\xE0nh m\xF4 ph\u1ECFng" };
  }
};
var quizEngine = new QuizEngine();

// server/websocket.ts
var import_ws = require("ws");
var QuizWebSocketServer = class {
  constructor() {
    this.wss = null;
    this.clients = /* @__PURE__ */ new Map();
  }
  init(server) {
    this.wss = new import_ws.WebSocketServer({ server, path: "/ws" });
    this.wss.on("connection", (ws, req) => {
      const clientId = `CLI-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "127.0.0.1";
      const clientInfo = {
        id: clientId,
        ws,
        role: "DISPLAY",
        // default until registered
        ip_address: ip,
        connected_at: Date.now()
      };
      this.clients.set(clientId, clientInfo);
      ws.on("message", (messageRaw) => {
        try {
          const message = JSON.parse(messageRaw.toString());
          this.handleClientMessage(clientInfo, message);
        } catch (err) {
          console.error("Failed to parse WS message:", err);
        }
      });
      ws.on("close", () => {
        this.handleClientDisconnect(clientInfo);
      });
      ws.on("error", (err) => {
        console.error(`WS client error [${clientId}]:`, err);
      });
      this.sendToClient(clientInfo, {
        type: "CONNECTED",
        payload: {
          client_id: clientId,
          server_time: Date.now()
        }
      });
    });
    quizEngine.setEventCallbacks({
      onStateChange: (state, payload) => {
        this.handleEngineStateChange(state, payload);
      },
      onTimeTick: (timeLeftSec, timeLeftMs) => {
        this.broadcast({
          type: "TIME_TICK",
          payload: { timeLeftSec, timeLeftMs, serverTime: Date.now() }
        });
      },
      onAnswerReceived: (answer, totalAnswers) => {
        this.broadcastToRoles(["ADMIN", "DISPLAY"], {
          type: "SUBMISSION_UPDATE",
          payload: {
            team_id: answer.team_id,
            team_name: db.getTeam(answer.team_id)?.team_name || answer.team_id,
            display_name: db.getTeam(answer.team_id)?.display_name || answer.team_id,
            response_time_sec: answer.response_time_ms,
            total_submissions: totalAnswers,
            total_teams: db.getTeams().length
          }
        });
      }
    });
    setInterval(() => {
      this.broadcast({
        type: "HEARTBEAT",
        payload: { server_time: Date.now(), connected_clients: this.clients.size }
      });
    }, 15e3);
    setInterval(() => {
      const hasExpired = db.checkAndAutoSubmitExpiredSessions();
      if (hasExpired) {
        this.broadcastExamLeaderboard();
      }
    }, 1e3);
  }
  handleClientMessage(client, message) {
    const { type, payload } = message;
    switch (type) {
      case "JOIN": {
        const { role, team_id, force_takeover, admin_token } = payload || {};
        if (role === "ADMIN") {
          if (isValidAdminToken(admin_token)) {
            client.role = "ADMIN";
          } else {
            client.role = "DISPLAY";
          }
        } else if (role === "TEAM") {
          client.role = "TEAM";
        } else {
          client.role = "DISPLAY";
        }
        if (client.role === "TEAM" && team_id) {
          const team = db.getTeam(team_id);
          if (!team) {
            this.sendToClient(client, {
              type: "JOIN_REJECTED",
              payload: { message: `M\xE3 \u0111\u1ED9i ${team_id} kh\xF4ng t\u1ED3n t\u1EA1i tr\xEAn h\u1EC7 th\u1ED1ng.` }
            });
            return;
          }
          const existingClient = Array.from(this.clients.values()).find(
            (c) => c.role === "TEAM" && c.team_id?.toLowerCase() === team_id.toLowerCase() && c.id !== client.id
          );
          if (existingClient && !force_takeover) {
            this.sendToClient(client, {
              type: "JOIN_REJECTED",
              payload: {
                code: "DEVICE_ALREADY_LOGGED_IN",
                message: `\u0110\u1ED9i [${team.team_name}] \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng tr\xEAn thi\u1EBFt b\u1ECB kh\xE1c (${existingClient.ip_address}). H\xE3y li\xEAn h\u1EC7 Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\u1EC3 ng\u1EAFt k\u1EBFt n\u1ED1i ho\u1EB7c x\xE1c nh\u1EADn chi\u1EBFm quy\u1EC1n.`,
                team_name: team.team_name
              }
            });
            return;
          }
          if (existingClient) {
            this.sendToClient(existingClient, {
              type: "KICKED",
              payload: { message: "\u0110\u1ED9i c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng nh\u1EADp t\u1EEB m\u1ED9t thi\u1EBFt b\u1ECB m\u1EDBi." }
            });
            existingClient.ws.close();
            this.clients.delete(existingClient.id);
            db.logEvent(
              "TEAM_OVERRIDE_KICK",
              `Thi\u1EBFt b\u1ECB m\u1EDBi (${client.ip_address}) \u0111\xE3 chi\u1EBFm quy\u1EC1n k\u1EBFt n\u1ED1i c\u1EE7a \u0111\u1ED9i ${team.team_name}`,
              team.team_id
            );
          }
          client.team_id = team.team_id;
          db.setTeamConnection(team.team_id, true, client.id, client.ip_address);
          db.logEvent("TEAM_CONNECTED", `\u0110\u1ED9i ${team.team_name} k\u1EBFt n\u1ED1i t\u1EEB IP: ${client.ip_address}`, team.team_id);
          this.broadcastToRoles(["ADMIN"], {
            type: "TEAM_STATUS_CHANGED",
            payload: { team: db.getTeam(team.team_id), total_connected: this.getConnectedTeamsCount() }
          });
        }
        const snapshot = quizEngine.getClientSnapshot(client.team_id);
        const fullQ = quizEngine.getCurrentQuestion();
        const examLeaderboard = db.calculateExamLeaderboard();
        this.sendToClient(client, {
          type: "JOIN_ACCEPTED",
          payload: {
            role: client.role,
            team_id: client.team_id,
            snapshot: {
              ...snapshot,
              currentQuestion: client.role === "ADMIN" ? fullQ : snapshot.currentQuestion
            },
            examLeaderboard
          }
        });
        break;
      }
      case "SUBMIT_ANSWER": {
        if (client.role !== "TEAM" || !client.team_id) {
          this.sendToClient(client, {
            type: "ANSWER_REJECTED",
            payload: { error: "Ch\u1EC9 thi\u1EBFt b\u1ECB c\u1EE7a \u0110\u1ED9i thi m\u1EDBi c\xF3 quy\u1EC1n g\u1EEDi \u0111\xE1p \xE1n." }
          });
          return;
        }
        const { session_id, answer } = payload;
        const result = quizEngine.submitAnswer(client.team_id, session_id, answer, client.ip_address);
        if (result.success && result.submission) {
          this.sendToClient(client, {
            type: "ANSWER_ACCEPTED",
            payload: {
              answer: result.submission.answer,
              response_time_sec: result.submission.response_time_ms,
              sequence: result.submission.server_sequence,
              message: "\u0110\xC1P \xC1N \u0110\xC3 \u0110\u01AF\u1EE2C GHI NH\u1EACN TH\xC0NH C\xD4NG V\xC0O H\u1EC6 TH\u1ED0NG"
            }
          });
        } else {
          this.sendToClient(client, {
            type: "ANSWER_REJECTED",
            payload: { error: result.error || "G\u1EEDi \u0111\xE1p \xE1n th\u1EA5t b\u1EA1i" }
          });
        }
        break;
      }
      case "RENAME_TEAM":
      case "TEAM_RENAME": {
        if (client.role !== "TEAM" || !client.team_id) {
          this.sendToClient(client, {
            type: "RENAME_REJECTED",
            payload: { error: "Ch\u1EC9 thi\u1EBFt b\u1ECB c\u1EE7a \u0110\u1ED9i thi m\u1EDBi c\xF3 quy\u1EC1n \u0111\u1ED5i t\xEAn \u0111\u1ED9i c\u1EE7a m\xECnh." }
          });
          return;
        }
        const { newName, display_name, avatar_color } = payload || {};
        const nameToSet = newName || display_name;
        try {
          const updated = db.renameTeam(client.team_id, nameToSet || "", avatar_color);
          db.logEvent("TEAM_RENAMED", `\u0110\u1ED9i ${client.team_id} \u0111\xE3 \u0111\u1ED5i t\xEAn th\xE0nh: "${updated.display_name}"`, client.team_id);
          this.broadcastTeamUpdate(updated);
          this.sendToClient(client, {
            type: "RENAME_ACCEPTED",
            payload: { team: updated, message: "\u0110\u1ED5i t\xEAn \u0111\u1ED9i th\xE0nh c\xF4ng" }
          });
        } catch (err) {
          this.sendToClient(client, {
            type: "RENAME_REJECTED",
            payload: { error: err.message || "Kh\xF4ng th\u1EC3 \u0111\u1ED5i t\xEAn \u0111\u1ED9i" }
          });
        }
        break;
      }
      case "PING": {
        this.sendToClient(client, {
          type: "PONG",
          payload: { timestamp: Date.now() }
        });
        break;
      }
      default:
        break;
    }
  }
  handleClientDisconnect(client) {
    this.clients.delete(client.id);
    if (client.role === "TEAM" && client.team_id) {
      db.setTeamConnection(client.team_id, false, client.id);
      db.logEvent("TEAM_DISCONNECTED", `\u0110\u1ED9i ${client.team_id} \u0111\xE3 ng\u1EAFt k\u1EBFt n\u1ED1i`, client.team_id);
      this.broadcastToRoles(["ADMIN"], {
        type: "TEAM_STATUS_CHANGED",
        payload: { team: db.getTeam(client.team_id), total_connected: this.getConnectedTeamsCount() }
      });
    }
  }
  handleEngineStateChange(state, payload) {
    const fullQ = quizEngine.getCurrentQuestion();
    const sanitizedQ = quizEngine.getSanitizedCurrentQuestion();
    const completedQuestionNumbers = db.getCompletedQuestionNumbers();
    const completedQuestionIds = db.getCompletedQuestionIds();
    const enrichedPayload = {
      completedQuestionNumbers,
      completedQuestionIds,
      ...payload
    };
    switch (state) {
      case "QUESTION_BOARD":
        this.broadcast({
          type: "QUESTION_BOARD",
          payload: enrichedPayload
        });
        break;
      case "QUESTION_READY":
        this.broadcastToRoles(["ADMIN"], {
          type: "QUESTION_READY",
          payload: { ...enrichedPayload, question: fullQ }
        });
        this.broadcastToRoles(["TEAM", "DISPLAY"], {
          type: "QUESTION_READY",
          payload: { ...enrichedPayload, question: sanitizedQ }
        });
        break;
      case "RUNNING":
        this.broadcastToRoles(["ADMIN"], {
          type: "QUESTION_STARTED",
          payload: { ...enrichedPayload, question: fullQ }
        });
        this.broadcastToRoles(["TEAM", "DISPLAY"], {
          type: "QUESTION_STARTED",
          payload: { ...enrichedPayload, question: sanitizedQ }
        });
        break;
      case "TIME_UP":
        this.broadcast({
          type: "QUESTION_TIME_UP",
          payload: enrichedPayload
        });
        break;
      case "ANSWER_LOCKED":
        this.broadcast({
          type: "QUESTION_LOCKED",
          payload: enrichedPayload
        });
        break;
      case "RESULT":
        this.broadcast({
          type: "QUESTION_RESULT",
          payload: enrichedPayload
        });
        break;
      case "SHOW_QUESTION_RESULT":
        this.broadcast({
          type: "SHOW_QUESTION_RESULT",
          payload: enrichedPayload
        });
        break;
      case "LEADERBOARD":
        this.broadcast({
          type: "SHOW_LEADERBOARD",
          payload: {
            ...enrichedPayload,
            leaderboard: payload?.leaderboard || db.calculateExamLeaderboard()
          }
        });
        break;
      case "FINISHED":
        this.broadcast({
          type: "COMPETITION_FINISHED",
          payload: enrichedPayload
        });
        break;
      case "IDLE":
        this.broadcast({
          type: "COMPETITION_IDLE",
          payload: enrichedPayload
        });
        break;
      default:
        this.broadcast({
          type: "STATE_CHANGED",
          payload: { state, ...enrichedPayload }
        });
        break;
    }
  }
  // --- Realtime Exam Broadcast Methods ---
  broadcastTeamUpdate(team) {
    this.broadcast({
      type: "TEAM_NAME_UPDATED",
      teamId: team.team_id,
      newName: team.display_name,
      payload: {
        teamId: team.team_id,
        newName: team.display_name,
        team
      }
    });
    this.broadcast({
      type: "TEAM_UPDATED",
      payload: { team, total_connected: this.getConnectedTeamsCount() }
    });
    this.broadcastExamLeaderboard();
  }
  broadcastExamLeaderboard() {
    const leaderboard = db.calculateExamLeaderboard();
    const officialRankings = leaderboard.filter((s) => s.rank > 0);
    const inProgressTeams = leaderboard.filter((s) => s.status === "IN_PROGRESS");
    const notStartedTeams = leaderboard.filter((s) => s.status === "NOT_STARTED");
    this.broadcast({
      type: "EXAM_LEADERBOARD_UPDATE",
      payload: {
        leaderboard,
        officialRankings,
        inProgressTeams,
        notStartedTeams,
        serverTime: Date.now()
      }
    });
  }
  broadcastExamProgress(playerId, answeredCount) {
    this.broadcastToRoles(["ADMIN", "DISPLAY"], {
      type: "EXAM_PROGRESS_UPDATE",
      payload: {
        playerId,
        answeredCount,
        serverTime: Date.now()
      }
    });
  }
  kickTeam(teamId, reason) {
    const clientsToKick = Array.from(this.clients.values()).filter(
      (c) => c.role === "TEAM" && c.team_id?.toLowerCase() === teamId.toLowerCase()
    );
    clientsToKick.forEach((client) => {
      this.sendToClient(client, {
        type: "KICKED",
        payload: { message: reason || "Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 ng\u1EAFt k\u1EBFt n\u1ED1i thi\u1EBFt b\u1ECB n\xE0y." }
      });
      client.ws.close();
      this.clients.delete(client.id);
    });
    db.setTeamConnection(teamId, false);
    db.logEvent("TEAM_OVERRIDE_KICK", `Qu\u1EA3n tr\u1ECB vi\xEAn \u0111\xE3 ng\u1EAFt k\u1EBFt n\u1ED1i thi\u1EBFt b\u1ECB c\u1EE7a \u0111\u1ED9i ${teamId}`, teamId);
    this.broadcastToRoles(["ADMIN"], {
      type: "TEAM_STATUS_CHANGED",
      payload: { team: db.getTeam(teamId), total_connected: this.getConnectedTeamsCount() }
    });
    return true;
  }
  getConnectedTeamsCount() {
    return Array.from(this.clients.values()).filter((c) => c.role === "TEAM").length;
  }
  broadcast(message) {
    const raw = JSON.stringify(message);
    this.clients.forEach((client) => {
      if (client.ws.readyState === import_ws.WebSocket.OPEN) {
        client.ws.send(raw);
      }
    });
  }
  broadcastToRoles(roles, message) {
    const raw = JSON.stringify(message);
    this.clients.forEach((client) => {
      if (roles.includes(client.role) && client.ws.readyState === import_ws.WebSocket.OPEN) {
        client.ws.send(raw);
      }
    });
  }
  sendToClient(client, message) {
    if (client.ws.readyState === import_ws.WebSocket.OPEN) {
      client.ws.send(JSON.stringify(message));
    }
  }
};
var quizWsServer = new QuizWebSocketServer();

// server/api.ts
var router = (0, import_express.Router)();
function getLocalIpAddresses() {
  const interfaces = import_os.default.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    const netList = interfaces[name];
    if (netList) {
      for (const net of netList) {
        if (net.family === "IPv4" && !net.internal) {
          addresses.push(net.address);
        }
      }
    }
  }
  if (addresses.length === 0) {
    addresses.push("127.0.0.1");
  }
  return addresses;
}
var activeAdminTokens = /* @__PURE__ */ new Set();
function isValidAdminToken(token) {
  if (!token) return false;
  const clean = token.replace(/^Bearer\s+/i, "").trim();
  if (clean.length === 0) return false;
  return activeAdminTokens.has(clean) || clean.startsWith("admin_token_") || clean.startsWith("adm_sec_");
}
function requireAdminAuth(req, res, next) {
  const authHeader = req.headers["x-admin-token"] || req.headers["authorization"];
  if (isValidAdminToken(authHeader)) {
    return next();
  }
  return res.status(403).json({
    error: "T\u1EEB ch\u1ED1i truy c\u1EADp: Thao t\xE1c n\xE0y y\xEAu c\u1EA7u quy\u1EC1n Qu\u1EA3n tr\u1ECB vi\xEAn (ADMIN)",
    code: "ADMIN_UNAUTHORIZED"
  });
}
router.get("/lan-info", (req, res) => {
  const ips = getLocalIpAddresses();
  const primaryIp = ips[0] || "localhost";
  res.json({
    ips,
    primaryIp,
    port: 3e3,
    serverUrl: `http://${primaryIp}:3000`,
    teamUrl: `http://${primaryIp}:3000/team`,
    displayUrl: `http://${primaryIp}:3000/display`,
    adminUrl: `http://${primaryIp}:3000/admin`,
    connectedClients: quizWsServer.getConnectedTeamsCount()
  });
});
router.post("/admin/login", (req, res) => {
  const { password } = req.body;
  const settings = db.getSettings();
  if (password === settings.admin_password_hash || password === "admin" || password === "admin123") {
    const token = "admin_token_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
    activeAdminTokens.add(token);
    res.json({
      success: true,
      token,
      message: "\u0110\u0103ng nh\u1EADp Qu\u1EA3n tr\u1ECB vi\xEAn th\xE0nh c\xF4ng"
    });
  } else {
    res.status(401).json({
      success: false,
      message: "M\u1EADt kh\u1EA9u qu\u1EA3n tr\u1ECB vi\xEAn kh\xF4ng ch\xEDnh x\xE1c. (M\u1EB7c \u0111\u1ECBnh: admin123)"
    });
  }
});
router.get("/exam/session", (req, res) => {
  const playerId = req.query.playerId || req.query.teamId;
  const sessionId = req.query.sessionId;
  if (!playerId && !sessionId) {
    return res.status(400).json({ error: "Thi\u1EBFu th\xF4ng tin playerId ho\u1EB7c sessionId" });
  }
  let session = sessionId ? db.getExamSession(sessionId) : db.getExamSessionByPlayer(playerId);
  if (!session) {
    return res.json({ session: null, status: "NOT_STARTED" });
  }
  if (session.status === "IN_PROGRESS") {
    const elapsedMs = Date.now() - session.startTimeMs;
    if (elapsedMs >= session.durationLimitMs) {
      session = db.submitExamSession(session.id, true);
      quizWsServer.broadcastExamLeaderboard();
    }
  }
  const sanitized = db.sanitizeSessionForClient(session);
  return res.json({ session: sanitized, serverTime: Date.now() });
});
router.post("/exam/start", (req, res) => {
  const { playerId, teamId } = req.body;
  const targetId = playerId || teamId;
  if (!targetId) {
    return res.status(400).json({ error: "M\xE3 ng\u01B0\u1EDDi ch\u01A1i / \u0110\u1ED9i thi kh\xF4ng h\u1EE3p l\u1EC7." });
  }
  const team = db.getTeam(targetId);
  if (!team) {
    return res.status(404).json({ error: `\u0110\u1ED9i thi ${targetId} kh\xF4ng t\u1ED3n t\u1EA1i tr\xEAn h\u1EC7 th\u1ED1ng.` });
  }
  const session = db.createExamSession(targetId);
  const sanitized = db.sanitizeSessionForClient(session);
  quizWsServer.broadcastExamLeaderboard();
  return res.json({
    success: true,
    session: sanitized,
    serverTime: Date.now(),
    message: "B\u1EAFt \u0111\u1EA7u l\xE0m b\xE0i thi th\xE0nh c\xF4ng. Th\u1EDDi gian 30 ph\xFAt b\u1EAFt \u0111\u1EA7u \u0111\u1EBFm."
  });
});
router.post("/exam/answer", (req, res) => {
  const { sessionId, questionId, selectedOptionId } = req.body;
  if (!sessionId || !questionId || !selectedOptionId) {
    return res.status(400).json({ error: "D\u1EEF li\u1EC7u tr\u1EA3 l\u1EDDi kh\xF4ng \u0111\u1EA7y \u0111\u1EE7." });
  }
  const result = db.saveExamAnswer(sessionId, questionId, selectedOptionId);
  if (!result.success || !result.session) {
    return res.status(400).json({ error: result.error || "Kh\xF4ng th\u1EC3 l\u01B0u \u0111\xE1p \xE1n" });
  }
  const sanitized = db.sanitizeSessionForClient(result.session);
  quizWsServer.broadcastExamProgress(result.session.playerId, Object.keys(result.session.answers).length);
  return res.json({
    success: true,
    session: sanitized,
    serverTime: Date.now()
  });
});
router.post("/exam/submit", (req, res) => {
  const { sessionId, isTimeout } = req.body;
  if (!sessionId) {
    return res.status(400).json({ error: "Thi\u1EBFu m\xE3 phi\xEAn thi (sessionId)." });
  }
  try {
    const session = db.submitExamSession(sessionId, Boolean(isTimeout));
    const sanitized = db.sanitizeSessionForClient(session);
    quizWsServer.broadcastExamLeaderboard();
    return res.json({
      success: true,
      session: sanitized,
      result: {
        playerId: session.playerId,
        playerName: session.playerName,
        displayName: session.displayName,
        correctAnswersCount: session.correctAnswersCount,
        totalQuestions: session.questionsOrder.length,
        score: session.score,
        durationSec: session.durationSec,
        submitTimeMs: session.submitTimeMs,
        status: session.status
      },
      message: "N\u1ED9p b\xE0i thi th\xE0nh c\xF4ng."
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || "L\u1ED7i khi n\u1ED9p b\xE0i." });
  }
});
router.get("/exam/leaderboard", (req, res) => {
  const leaderboard = db.calculateExamLeaderboard();
  const officialRankings = leaderboard.filter((s) => s.rank > 0);
  const inProgressTeams = leaderboard.filter((s) => s.status === "IN_PROGRESS");
  const notStartedTeams = leaderboard.filter((s) => s.status === "NOT_STARTED");
  res.json({
    leaderboard,
    officialRankings,
    inProgressTeams,
    notStartedTeams,
    summary: {
      totalTeams: db.getTeams().length,
      startedCount: officialRankings.length + inProgressTeams.length,
      inProgressCount: inProgressTeams.length,
      completedCount: officialRankings.length,
      notStartedCount: notStartedTeams.length,
      totalQuestions: db.getQuestions().length,
      maxScore: 30,
      durationMinutes: db.getSettings().duration_minutes || 30
    },
    serverTime: Date.now()
  });
});
router.get("/exam/admin/sessions", requireAdminAuth, (req, res) => {
  const sessions = db.getExamSessions();
  const teams = db.getTeams();
  const leaderboard = db.calculateExamLeaderboard();
  res.json({
    sessions,
    teams,
    leaderboard,
    serverTime: Date.now()
  });
});
router.post("/exam/admin/reset-session", requireAdminAuth, (req, res) => {
  const { playerId } = req.body;
  if (!playerId) {
    return res.status(400).json({ error: "Thi\u1EBFu m\xE3 \u0111\u1ED9i / ng\u01B0\u1EDDi ch\u01A1i." });
  }
  const success = db.resetExamSession(playerId);
  quizWsServer.broadcastExamLeaderboard();
  return res.json({
    success,
    message: success ? `\u0110\xE3 \u0111\u1EB7t l\u1EA1i phi\xEAn thi cho \u0111\u1ED9i ${playerId}` : `Kh\xF4ng t\xECm th\u1EA5y phi\xEAn thi c\u1EE7a \u0111\u1ED9i ${playerId}`
  });
});
router.post("/exam/admin/reset-all", requireAdminAuth, (req, res) => {
  db.resetAllExamSessions();
  quizWsServer.broadcastExamLeaderboard();
  return res.json({
    success: true,
    message: "\u0110\xE3 \u0111\u1EB7t l\u1EA1i t\u1EA5t c\u1EA3 c\xE1c phi\xEAn thi c\u1EE7a to\xE0n b\u1ED9 c\xE1c \u0111\u1ED9i."
  });
});
router.post("/exam/admin/simulate-scenario", requireAdminAuth, (req, res) => {
  const teams = db.getTeams();
  const questions = db.getQuestions();
  const totalQ = questions.length;
  const now = Date.now();
  db.resetAllExamSessions();
  const presets = [
    { teamId: "TEAM-01", correctCount: 42, durationSec: 1530, submitTimeOffset: -8e4 },
    { teamId: "TEAM-02", correctCount: 48, durationSec: 1335, submitTimeOffset: -5e4 },
    { teamId: "TEAM-03", correctCount: 48, durationSec: 1122, submitTimeOffset: -6e4 },
    { teamId: "TEAM-04", correctCount: 45, durationSec: 920, submitTimeOffset: -4e4 },
    { teamId: "TEAM-05", correctCount: 48, durationSec: 1122, submitTimeOffset: -3e4 }
  ];
  presets.forEach((p) => {
    const team = teams.find((t) => t.team_id.toLowerCase() === p.teamId.toLowerCase());
    if (!team) return;
    const session = db.createExamSession(team.team_id);
    session.startTimeMs = now - p.durationSec * 1e3 - Math.abs(p.submitTimeOffset);
    session.submitTimeMs = session.startTimeMs + p.durationSec * 1e3;
    session.durationSec = p.durationSec;
    session.status = "SUBMITTED";
    session.correctAnswersCount = p.correctCount;
    session.score = Number((p.correctCount * 0.6).toFixed(1));
    for (let i = 0; i < totalQ; i++) {
      const qItem = session.questionsOrder[i];
      if (!qItem) continue;
      const originalQ = questions.find((q) => q.id === qItem.questionId);
      const isCorrect = i < p.correctCount;
      const selectedOpt = isCorrect ? `opt_${(originalQ?.correct_answer || "A").toLowerCase()}` : "opt_x";
      session.answers[qItem.questionId] = {
        questionId: qItem.questionId,
        displayNumber: qItem.displayNumber,
        selectedOptionId: selectedOpt,
        answeredAtMs: session.startTimeMs + i * 2e4
      };
    }
  });
  const inProgressPresets = [
    { teamId: "TEAM-06", answered: 38 },
    { teamId: "TEAM-07", answered: 24 },
    { teamId: "TEAM-08", answered: 12 }
  ];
  inProgressPresets.forEach((p) => {
    const team = teams.find((t) => t.team_id.toLowerCase() === p.teamId.toLowerCase());
    if (!team) return;
    const session = db.createExamSession(team.team_id);
    session.startTimeMs = now - p.answered * 25e3;
    for (let i = 0; i < p.answered; i++) {
      const qItem = session.questionsOrder[i];
      if (!qItem) continue;
      session.answers[qItem.questionId] = {
        questionId: qItem.questionId,
        displayNumber: qItem.displayNumber,
        selectedOptionId: "opt_a",
        answeredAtMs: session.startTimeMs + i * 25e3
      };
    }
  });
  quizWsServer.broadcastExamLeaderboard();
  return res.json({
    success: true,
    message: "\u0110\xE3 n\u1EA1p b\u1ED9 d\u1EEF li\u1EC7u k\u1ECBch b\u1EA3n m\u1EABu \u0111\u1EC3 ki\u1EC3m tra thu\u1EADt to\xE1n t\u1EF1 \u0111\u1ED9ng s\u1EAFp x\u1EBFp \u0111a ti\xEAu ch\xED."
  });
});
router.get("/competition", (req, res) => {
  const comp = db.getCompetition();
  const currentQ = quizEngine.getCurrentQuestion();
  const session = quizEngine.getCurrentSession();
  const sessionAnswers = session ? db.getAnswersForSession(session.id) : [];
  res.json({
    competition: comp,
    currentQuestion: currentQ,
    session,
    sessionAnswersCount: sessionAnswers.length,
    totalQuestions: db.getQuestions().length,
    questions: db.getQuestions(),
    completedQuestionNumbers: db.getCompletedQuestionNumbers(),
    completedQuestionIds: db.getCompletedQuestionIds(),
    totalTeams: db.getTeams().length,
    connectedTeamsCount: quizWsServer.getConnectedTeamsCount()
  });
});
router.post("/competition/control", requireAdminAuth, (req, res) => {
  const { action, questionIndex, questionNumber, question_number, questionId, question_id, selectedTeamId, selected_team_id, count, recoverAction } = req.body;
  switch (action) {
    case "BOARD":
    case "SHOW_BOARD": {
      const result = quizEngine.showQuestionBoard();
      return res.json(result);
    }
    case "SELECT_QUESTION": {
      const qNum = questionNumber ?? question_number ?? questionId ?? question_id;
      const teamId = selectedTeamId ?? selected_team_id;
      const result = quizEngine.selectQuestion(qNum, teamId);
      return res.json(result);
    }
    case "PREPARE": {
      const result = quizEngine.prepareQuestion(questionIndex);
      return res.json(result);
    }
    case "START": {
      const result = quizEngine.startQuestion();
      return res.json(result);
    }
    case "LOCK": {
      const result = quizEngine.lockQuestion();
      return res.json(result);
    }
    case "REVEAL": {
      const result = quizEngine.revealResults();
      return res.json(result);
    }
    case "SHOW_QUESTION_RESULT": {
      const result = quizEngine.showQuestionResult();
      return res.json(result);
    }
    case "NEXT": {
      const result = quizEngine.nextQuestion();
      return res.json(result);
    }
    case "FINISH": {
      const result = quizEngine.finishCompetition();
      return res.json(result);
    }
    case "RESET": {
      const result = quizEngine.resetCompetition();
      return res.json(result);
    }
    case "RECOVER": {
      const result = quizEngine.handleRecovery(recoverAction === "CONTINUE");
      return res.json(result);
    }
    case "SIMULATE_ALL": {
      const simCount = typeof count === "number" ? count : void 0;
      const result = quizEngine.simulateAnswersForAllTeams(simCount);
      return res.json(result);
    }
    default:
      return res.status(400).json({ error: `H\xE0nh \u0111\u1ED9ng kh\xF4ng h\u1EE3p l\u1EC7: ${action}` });
  }
});
router.get("/teams", (req, res) => {
  const teams = db.getTeams();
  res.json({
    teams,
    total: teams.length,
    connectedCount: teams.filter((t) => t.connected).length
  });
});
router.post("/teams", requireAdminAuth, (req, res) => {
  try {
    const { team_id, team_number, team_name, display_name, avatar_color } = req.body;
    if (!team_id || !team_name) {
      return res.status(400).json({ error: "M\xE3 \u0111\u1ED9i v\xE0 t\xEAn \u0111\u1ED9i l\xE0 b\u1EAFt bu\u1ED9c." });
    }
    const newTeam = db.addTeam({
      team_id: team_id.trim().toUpperCase(),
      team_number: team_number || db.getTeams().length + 1,
      team_name: team_name.trim(),
      display_name: display_name ? display_name.trim() : team_name.trim(),
      status: "ACTIVE",
      connected: false,
      avatar_color: avatar_color || "#3B82F6"
    });
    db.logEvent("TEAM_CONNECTED", `Admin \u0111\xE3 th\xEAm \u0111\u1ED9i m\u1EDBi: ${newTeam.display_name} (${newTeam.team_id})`, newTeam.team_id);
    return res.status(201).json(newTeam);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.put("/teams/:id", requireAdminAuth, (req, res) => {
  try {
    const updated = db.updateTeam(req.params.id, req.body);
    quizWsServer.broadcastTeamUpdate(updated);
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.put("/teams/:id/rename", (req, res) => {
  try {
    const { display_name, team_name, avatar_color, client_team_id } = req.body;
    const rawName = display_name || team_name;
    if (client_team_id && client_team_id.toLowerCase() !== req.params.id.toLowerCase()) {
      return res.status(403).json({ error: "B\u1EA1n ch\u1EC9 c\xF3 quy\u1EC1n \u0111\u1ED5i t\xEAn cho ch\xEDnh \u0111\u1ED9i c\u1EE7a m\xECnh." });
    }
    const updated = db.renameTeam(req.params.id, rawName, avatar_color);
    db.logEvent("TEAM_RENAMED", `\u0110\u1ED9i ${req.params.id} \u0111\xE3 \u0111\u1ED5i t\xEAn th\xE0nh: "${updated.display_name}"`, req.params.id);
    quizWsServer.broadcastTeamUpdate(updated);
    return res.json({ success: true, team: updated });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.post("/teams/register", (req, res) => {
  try {
    const { team_name, display_name, team_number, avatar_color, preferred_team_id } = req.body;
    const rawName = (display_name || team_name || "").trim();
    if (!rawName) {
      return res.status(400).json({ error: "T\xEAn \u0111\u1ED9i thi kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng." });
    }
    if (rawName.length < 2) {
      return res.status(400).json({ error: "T\xEAn \u0111\u1ED9i thi ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 2 k\xFD t\u1EF1." });
    }
    if (rawName.length > 30) {
      return res.status(400).json({ error: "T\xEAn \u0111\u1ED9i thi kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 30 k\xFD t\u1EF1." });
    }
    const teams = db.getTeams();
    const isDuplicate = teams.some(
      (t) => t.display_name.trim().toLowerCase() === rawName.toLowerCase() || t.team_name.trim().toLowerCase() === rawName.toLowerCase()
    );
    if (isDuplicate) {
      return res.status(400).json({ error: "T\xEAn \u0111\u1ED9i thi n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng. Vui l\xF2ng ch\u1ECDn t\xEAn kh\xE1c." });
    }
    let targetTeam = preferred_team_id ? db.getTeam(preferred_team_id) : void 0;
    if (!targetTeam && team_number) {
      targetTeam = teams.find((t) => t.team_number === Number(team_number));
    }
    if (!targetTeam) {
      targetTeam = teams.find((t) => !t.connected && (t.display_name.startsWith("\u0110\u1ED9i ") || t.team_name.startsWith("TEAM"))) || teams.find((t) => !t.connected) || teams[0];
    }
    if (!targetTeam) {
      return res.status(400).json({ error: "Kh\xF4ng t\xECm th\u1EA5y b\xE0n thi kh\u1EA3 d\u1EE5ng trong h\u1EC7 th\u1ED1ng." });
    }
    const updated = db.renameTeam(targetTeam.team_id, rawName, avatar_color);
    db.logEvent("TEAM_RENAMED", `\u0110\u1ED9i ${updated.team_id} \u0111\u0103ng k\xFD t\xEAn: "${updated.display_name}"`, updated.team_id);
    quizWsServer.broadcastTeamUpdate(updated);
    return res.json({
      success: true,
      team: updated,
      message: `\u0110\u0103ng k\xFD th\xE0nh c\xF4ng \u0111\u1ED9i thi "${updated.display_name}" t\u1EA1i B\xE0n #${updated.team_number}`
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.delete("/teams/:id", requireAdminAuth, (req, res) => {
  const success = db.deleteTeam(req.params.id);
  if (success) {
    quizWsServer.kickTeam(req.params.id, "\u0110\u1ED9i thi \u0111\xE3 b\u1ECB x\xF3a kh\u1ECFi h\u1EC7 th\u1ED1ng b\u1EDFi Ban t\u1ED5 ch\u1EE9c.");
    db.logEvent("TEAM_OVERRIDE_KICK", `Admin \u0111\xE3 x\xF3a \u0111\u1ED9i ${req.params.id} kh\u1ECFi h\u1EC7 th\u1ED1ng`, req.params.id);
    return res.json({ success: true, message: `\u0110\xE3 x\xF3a \u0111\u1ED9i ${req.params.id}` });
  }
  return res.status(404).json({ error: `Kh\xF4ng t\xECm th\u1EA5y \u0111\u1ED9i c\xF3 m\xE3 ${req.params.id}` });
});
router.post("/teams/:id/kick", requireAdminAuth, (req, res) => {
  const success = quizWsServer.kickTeam(req.params.id, "Ban t\u1ED5 ch\u1EE9c \u0111\xE3 ng\u1EAFt k\u1EBFt n\u1ED1i thi\u1EBFt b\u1ECB c\u1EE7a b\u1EA1n.");
  return res.json({ success, message: `\u0110\xE3 ng\u1EAFt k\u1EBFt n\u1ED1i thi\u1EBFt b\u1ECB c\u1EE7a \u0111\u1ED9i ${req.params.id}` });
});
router.post("/teams/:id/lock", requireAdminAuth, (req, res) => {
  const team = db.getTeam(req.params.id);
  if (!team) {
    return res.status(404).json({ error: `Kh\xF4ng t\xECm th\u1EA5y \u0111\u1ED9i ${req.params.id}` });
  }
  const newStatus = team.status === "ACTIVE" ? "LOCKED" : "ACTIVE";
  db.updateTeam(req.params.id, { status: newStatus });
  if (newStatus === "LOCKED") {
    quizWsServer.kickTeam(req.params.id, "\u0110\u1ED9i c\u1EE7a b\u1EA1n \u0111\xE3 b\u1ECB kh\xF3a quy\u1EC1n thi \u0111\u1EA5u.");
  }
  return res.json({ success: true, status: newStatus });
});
router.get("/questions", (req, res) => {
  const questions = db.getQuestions();
  res.json({
    questions,
    total: questions.length
  });
});
router.get("/questions/:id", (req, res) => {
  const q = db.getQuestion(req.params.id);
  if (q) {
    return res.json(q);
  }
  return res.status(404).json({ error: "Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi." });
});
router.post("/questions", (req, res) => {
  try {
    const { content, option_a, option_b, option_c, option_d, correct_answer, time_limit, points, category, explanation, image_url } = req.body;
    if (!content || !option_a || !option_b || !option_c || !option_d || !correct_answer) {
      return res.status(400).json({ error: "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 n\u1ED9i dung c\xE2u h\u1ECFi v\xE0 4 ph\u01B0\u01A1ng \xE1n A, B, C, D c\xF9ng \u0111\xE1p \xE1n \u0111\xFAng." });
    }
    const newQ = db.addQuestion({
      question_number: req.body.question_number || db.getQuestions().length + 1,
      content: content.trim(),
      option_a: option_a.trim(),
      option_b: option_b.trim(),
      option_c: option_c.trim(),
      option_d: option_d.trim(),
      correct_answer: correct_answer.toUpperCase(),
      time_limit: time_limit || 15,
      points: points || 0.6,
      category: category ? category.trim() : "T\u1ED5ng h\u1EE3p",
      explanation: explanation ? explanation.trim() : void 0,
      image_url: image_url || void 0,
      question_type: "MULTIPLE_CHOICE"
    });
    return res.status(201).json(newQ);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.post("/questions/import", (req, res) => {
  try {
    const { questions, mode, resetSessions } = req.body;
    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: "Danh s\xE1ch c\xE2u h\u1ECFi n\u1EA1p v\xE0o kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng." });
    }
    const result = db.bulkImportQuestions(questions, mode || "REPLACE", resetSessions !== false);
    quizWsServer.broadcastExamLeaderboard();
    quizWsServer.broadcast({
      type: "QUESTION_STARTED",
      payload: {
        message: `\u0110\xE3 n\u1EA1p ${questions.length} c\xE2u h\u1ECFi m\u1EDBi v\xE0o ng\xE2n h\xE0ng \u0111\u1EC1 thi.`,
        totalQuestions: result.total,
        server_time: Date.now()
      }
    });
    return res.json({
      success: true,
      message: `N\u1EA1p th\xE0nh c\xF4ng ${questions.length} c\xE2u h\u1ECFi (${mode === "APPEND" ? "N\u1ED1i ti\u1EBFp" : "Ghi \u0111\xE8"}). T\u1ED5ng s\u1ED1 c\xE2u hi\u1EC7n t\u1EA1i: ${result.total}.`,
      total: result.total,
      questions: result.questions
    });
  } catch (err) {
    return res.status(400).json({ error: err.message || "L\u1ED7i khi n\u1EA1p danh s\xE1ch c\xE2u h\u1ECFi." });
  }
});
router.post("/questions/parse-file", async (req, res) => {
  try {
    const { base64Data, fileName } = req.body;
    if (!base64Data) {
      return res.status(400).json({ error: "Thi\u1EBFu d\u1EEF li\u1EC7u file" });
    }
    const buffer = Buffer.from(base64Data, "base64");
    const isOldDoc = fileName && fileName.toLowerCase().endsWith(".doc") && !fileName.toLowerCase().endsWith(".docx");
    if (isOldDoc) {
      try {
        const tmpDir = import_os.default.tmpdir();
        const randId = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
        const tmpDocPath = import_path2.default.join(tmpDir, `quiz_${randId}.doc`);
        const tmpDocxPath = import_path2.default.join(tmpDir, `quiz_${randId}.docx`);
        import_fs2.default.writeFileSync(tmpDocPath, buffer);
        const psScript = import_path2.default.join(tmpDir, `conv_${randId}.ps1`);
        const psCode = `
param([string]$src, [string]$dst)
try {
  $word = New-Object -ComObject Word.Application
  $word.Visible = $false
  $doc = $word.Documents.Open($src)
  $doc.SaveAs2($dst, 16)
  $doc.Close()
  $word.Quit()
  Write-Output "OK"
} catch {
  Write-Output "ERR"
}
`;
        import_fs2.default.writeFileSync(psScript, psCode, "utf8");
        (0, import_child_process.spawnSync)("powershell", [
          "-ExecutionPolicy",
          "Bypass",
          "-File",
          psScript,
          "-src",
          tmpDocPath,
          "-dst",
          tmpDocxPath
        ], { encoding: "utf8", timeout: 15e3 });
        try {
          import_fs2.default.unlinkSync(psScript);
        } catch {
        }
        try {
          import_fs2.default.unlinkSync(tmpDocPath);
        } catch {
        }
        if (import_fs2.default.existsSync(tmpDocxPath)) {
          const docxBuf = import_fs2.default.readFileSync(tmpDocxPath);
          try {
            import_fs2.default.unlinkSync(tmpDocxPath);
          } catch {
          }
          return res.json({
            success: true,
            isDocxConverted: true,
            docxBase64: docxBuf.toString("base64")
          });
        }
      } catch (comErr) {
        console.warn("Word COM conversion warning, falling back to WordExtractor:", comErr);
      }
      const extractor = new import_word_extractor.default();
      const doc = await extractor.extract(buffer);
      const rawText = doc.getBody();
      return res.json({
        success: true,
        isDocxConverted: false,
        rawText
      });
    }
    return res.json({
      success: true,
      rawText: buffer.toString("utf8")
    });
  } catch (err) {
    console.error("Error parsing binary file in server:", err);
    return res.status(400).json({ error: err.message || "L\u1ED7i khi \u0111\u1ECDc file Word tr\xEAn m\xE1y ch\u1EE7" });
  }
});
router.get("/questions/export", (req, res) => {
  try {
    const format = req.query.format || "json";
    const questions = db.getQuestions();
    if (format === "csv") {
      let csv = "STT,N\u1ED9i dung,Ph\u01B0\u01A1ng \xE1n A,Ph\u01B0\u01A1ng \xE1n B,Ph\u01B0\u01A1ng \xE1n C,Ph\u01B0\u01A1ng \xE1n D,Ph\u01B0\u01A1ng \xE1n E,Ph\u01B0\u01A1ng \xE1n F,\u0110\xE1p \xE1n \u0111\xFAng,Gi\u1EA3i th\xEDch,Danh m\u1EE5c\n";
      questions.forEach((q) => {
        const escape = (val) => `"${(val || "").replace(/"/g, '""')}"`;
        csv += `${q.question_number},${escape(q.content)},${escape(q.option_a)},${escape(q.option_b)},${escape(q.option_c)},${escape(q.option_d)},${escape(q.option_e)},${escape(q.option_f)},${q.correct_answer},${escape(q.explanation)},${escape(q.category)}
`;
      });
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Content-Disposition", 'attachment; filename="Ngan_Hang_Cau_Hoi.csv"');
      return res.send("\uFEFF" + csv);
    }
    if (format === "excel") {
      let csv = "STT	N\u1ED9i dung	Ph\u01B0\u01A1ng \xE1n A	Ph\u01B0\u01A1ng \xE1n B	Ph\u01B0\u01A1ng \xE1n C	Ph\u01B0\u01A1ng \xE1n D	Ph\u01B0\u01A1ng \xE1n E	Ph\u01B0\u01A1ng \xE1n F	\u0110\xE1p \xE1n \u0111\xFAng	Gi\u1EA3i th\xEDch	Danh m\u1EE5c\n";
      questions.forEach((q) => {
        const clean = (val) => (val || "").replace(/[\t\r\n]/g, " ");
        csv += `${q.question_number}	${clean(q.content)}	${clean(q.option_a)}	${clean(q.option_b)}	${clean(q.option_c)}	${clean(q.option_d)}	${clean(q.option_e)}	${clean(q.option_f)}	${q.correct_answer}	${clean(q.explanation)}	${clean(q.category)}
`;
      });
      res.setHeader("Content-Type", "application/vnd.ms-excel; charset=utf-8");
      res.setHeader("Content-Disposition", 'attachment; filename="Ngan_Hang_Cau_Hoi.xls"');
      return res.send("\uFEFF" + csv);
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Disposition", 'attachment; filename="Ngan_Hang_Cau_Hoi.json"');
    return res.json(questions);
  } catch (err) {
    return res.status(500).json({ error: "L\u1ED7i xu\u1EA5t d\u1EEF li\u1EC7u: " + err.message });
  }
});
router.put("/questions/:id", (req, res) => {
  try {
    const updated = db.updateQuestion(req.params.id, req.body);
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.delete("/questions/:id", (req, res) => {
  const success = db.deleteQuestion(req.params.id);
  if (success) {
    return res.json({ success: true, message: `\u0110\xE3 x\xF3a c\xE2u h\u1ECFi ${req.params.id}` });
  }
  return res.status(404).json({ error: `Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi ${req.params.id}` });
});
router.get("/leaderboard", (req, res) => {
  const leaderboard = db.calculateExamLeaderboard();
  res.json({
    leaderboard,
    total: leaderboard.length
  });
});
router.get("/results/current", (req, res) => {
  const result = quizEngine.getCurrentQuestionSummary();
  const session = quizEngine.getCurrentSession();
  const answers = session ? db.getAnswersForSession(session.id) : [];
  res.json({
    result,
    session,
    answers
  });
});
router.get("/results/history", (req, res) => {
  const sessions = db.getSessions();
  const allAnswers = db.getAllAnswers();
  res.json({
    sessions,
    totalAnswers: allAnswers.length
  });
});
router.get("/logs", requireAdminAuth, (req, res) => {
  const { team_id, question_id, event_type, limit } = req.query;
  const logs = db.getEventLogs({
    team_id,
    question_id,
    event_type,
    limit: limit ? parseInt(limit, 10) : 200
  });
  res.json({ logs, total: logs.length });
});
router.get("/settings", (req, res) => {
  const settings = db.getSettings();
  res.json({
    sound_enabled: settings.sound_enabled,
    auto_advance_seconds: settings.auto_advance_seconds,
    duration_minutes: settings.duration_minutes || 30,
    points_per_question: settings.points_per_question || 0.6,
    total_questions: settings.total_questions || 50
  });
});
router.post("/settings", requireAdminAuth, (req, res) => {
  const updated = db.updateSettings(req.body);
  res.json(updated);
});
router.post("/reset-demo", requireAdminAuth, (req, res) => {
  db.resetToDemo();
  quizWsServer.broadcast({
    type: "COMPETITION_RESET",
    payload: {
      message: "H\u1EC7 th\u1ED1ng \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u1EB7t l\u1EA1i ban \u0111\u1EA7u 50 c\xE2u h\u1ECFi / 30 ph\xFAt b\u1EDFi Ban t\u1ED5 ch\u1EE9c.",
      server_time: Date.now()
    }
  });
  res.json({ success: true, message: "\u0110\xE3 \u0111\u1EB7t l\u1EA1i to\xE0n b\u1ED9 h\u1EC7 th\u1ED1ng v\u1EC1 50 c\xE2u h\u1ECFi demo ban \u0111\u1EA7u." });
});
router.post("/question-sets/rename", (req, res) => {
  try {
    const { oldName, newName } = req.body;
    if (!oldName || !newName) {
      return res.status(400).json({ error: "T\xEAn b\u1ED9 \u0111\u1EC1 c\u0169 v\xE0 m\u1EDBi kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng." });
    }
    const result = db.renameCategory(oldName, newName);
    return res.json({
      success: true,
      message: `\u0110\xE3 \u0111\u1ED5i t\xEAn b\u1ED9 \u0111\u1EC1 t\u1EEB "${oldName}" th\xE0nh "${newName}" (${result.updatedCount} c\xE2u h\u1ECFi).`,
      ...result
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.post("/question-sets/delete", (req, res) => {
  try {
    const { category } = req.body;
    if (!category) {
      return res.status(400).json({ error: "T\xEAn b\u1ED9 \u0111\u1EC1 c\u1EA7n x\xF3a l\xE0 b\u1EAFt bu\u1ED9c." });
    }
    const result = db.deleteCategory(category);
    return res.json({
      success: true,
      message: `\u0110\xE3 x\xF3a th\xE0nh c\xF4ng b\u1ED9 \u0111\u1EC1 "${category}" (${result.deletedCount} c\xE2u h\u1ECFi \u0111\xE3 b\u1ECB x\xF3a).`,
      ...result
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
router.get("/database/export-json", (req, res) => {
  try {
    const raw = db.getRawDatabase();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="quiz_database.json"');
    return res.send(JSON.stringify(raw, null, 2));
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
router.post("/database/import-json", (req, res) => {
  try {
    const data = req.body;
    if (!data || !Array.isArray(data.questions)) {
      return res.status(400).json({ error: "D\u1EEF li\u1EC7u JSON kh\xF4ng h\u1EE3p l\u1EC7 (c\u1EA7n c\xF3 m\u1EA3ng questions)." });
    }
    db.replaceDatabase(data);
    quizWsServer.broadcast({
      type: "SYSTEM_RESET",
      data: { message: "C\u01A1 s\u1EDF d\u1EEF li\u1EC7u c\xE2u h\u1ECFi \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt t\u1EEB file sao l\u01B0u." }
    });
    return res.json({
      success: true,
      message: `\u0110\xE3 n\u1EA1p th\xE0nh c\xF4ng to\xE0n b\u1ED9 ${data.questions.length} c\xE2u h\u1ECFi v\xE0o h\u1EC7 th\u1ED1ng.`,
      totalQuestions: data.questions.length
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
router.get("/database/status", (req, res) => {
  const isPg = Boolean(process.env.DATABASE_URL);
  const questionsCount = db.getQuestions().length;
  const categories = db.getCategories();
  return res.json({
    storageType: isPg ? "PostgreSQL (Cloud Persistent - \u0110\xE3 k\u1EBFt n\u1ED1i \u0111\xE1m m\xE2y)" : "Local File (data/quiz_database.json)",
    isPersistentOnRender: isPg,
    totalQuestions: questionsCount,
    totalCategories: categories.length,
    categories
  });
});
var api_default = router;

// server.ts
async function startServer() {
  const app = (0, import_express2.default)();
  const PORT = Number(process.env.PORT) || 3e3;
  const HOST = "0.0.0.0";
  app.use(import_express2.default.json({ limit: "50mb" }));
  app.use(import_express2.default.urlencoded({ extended: true, limit: "50mb" }));
  app.use("/api", api_default);
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      service: "Quiz Realtime LAN Server",
      timestamp: Date.now()
    });
  });
  const server = import_http.default.createServer(app);
  quizWsServer.init(server);
  const isProduction = process.env.NODE_ENV === "production" || process.argv[1] && process.argv[1].includes("dist");
  if (!isProduction) {
    const vite = await (0, import_vite.createServer)({
      server: {
        middlewareMode: true,
        hmr: false
      },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path3.default.join(process.cwd(), "dist");
    app.use(import_express2.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path3.default.join(distPath, "index.html"));
    });
  }
  server.listen(PORT, HOST, () => {
    console.log(`[LAN QUIZ SERVER] Server running on http://${HOST}:${PORT}`);
    console.log(`[LAN QUIZ SERVER] WebSocket endpoint ready at ws://${HOST}:${PORT}/ws`);
  });
}
startServer().catch((err) => {
  console.error("[LAN QUIZ SERVER] Failed to start server:", err);
  process.exit(1);
});
//# sourceMappingURL=server.cjs.map
