import Database from 'better-sqlite3';
export const db = new Database('times.db', { verbose: console.log });

export function addSession(body) {
  console.log('duration', body.duration);
  const insert = db.prepare('INSERT INTO sessions (duration) VALUES (?)');
  const result = insert.run(body.duration);
  return result.lastInsertRowid;
}

export function getSessions() {
  const select = db.prepare(`
    SELECT DATE(createdAt) as DATE, count(*) as EFFORTS, SUM(duration) as TOTAL_DURATION
    FROM sessions GROUP BY DATE(createdAt) 
    ORDER BY createdAt DESC`);
  return select.all();
}
