// lib/db.js
import Database from 'better-sqlite3';
const db = new Database('./mydb.sqlite', { verbose: console.log });

function initializeDB() {
  const tableSchema = `
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      duration INTEGER NOT NULL,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `;
  db.exec(tableSchema);
}

initializeDB();

module.exports = db;
