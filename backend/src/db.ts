import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const dbPath = path.resolve(process.env.DB_PATH || './database.sqlite');

let dbInstance: Database | null = null;

export async function getDb(): Promise<Database> {
  if (!dbInstance) {
    dbInstance = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
  }
  return dbInstance;
}

export async function initDb(): Promise<void> {
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
