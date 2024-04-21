import Database from 'better-sqlite3';
const db = new Database('times.db', { verbose: console.log });

function readDB() {
  console.log(db.exec(`SELECT * FROM sessions`));
}

readDB();
