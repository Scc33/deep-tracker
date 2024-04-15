import { addSession, getSessions } from '../lib/session';

export async function post(duration) {
    const id = addSession(duration);
    return id;
}

export async function get(res) {
    const sessions = getSessions();
    return sessions;
}
