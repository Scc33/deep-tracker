import Database from 'better-sqlite3';
const db = new Database('times.db', { verbose: console.log });

function readDB() {
  const tableSchema = `SELECT * FROM sessions`;
  db.exec(tableSchema);
}

readDB();
