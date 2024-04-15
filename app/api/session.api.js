import { addSession, getSessions } from './lib/session';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const id = addSession(duration);
        res.status(200).json({ id: id });
    } else if (req.method === 'GET') {
        const sessions = getSessions();
        return sessions;
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }