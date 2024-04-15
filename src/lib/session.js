import db from './db';

export function addSession(duration) {
  const insert = db.prepare('INSERT INTO sessions (duration) VALUES (?)');
  const result = insert.run(duration);
  return result.lastInsertRowid;
}

export function getSessions() {
  const select = db.prepare('SELECT * FROM sessions');
  return select.all();
}
