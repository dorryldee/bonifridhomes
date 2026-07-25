"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = getDb;
exports.initDb = initDb;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const dbPath = path_1.default.resolve(process.env.DB_PATH || './database.sqlite');
let dbInstance = null;
async function getDb() {
    if (!dbInstance) {
        dbInstance = await (0, sqlite_1.open)({
            filename: dbPath,
            driver: sqlite3_1.default.Database,
        });
    }
    return dbInstance;
}
async function initDb() {
    const db = await getDb();
    // Create inquiries table to store contact form queries
    await db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT NOT NULL,
      date TEXT NOT NULL
    )
  `);
    console.log('SQLite inquiries table ready.');
}
