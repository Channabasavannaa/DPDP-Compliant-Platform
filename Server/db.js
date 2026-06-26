import Database from "better-sqlite3";

const db = new Database("consent.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS users(
id TEXT PRIMARY KEY,
full_name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
phone TEXT NOT NULL,
consent INTEGER NOT NULL,
created_at TEXT NOT NULL
)
`).run();

export default db;