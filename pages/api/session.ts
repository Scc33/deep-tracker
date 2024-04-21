import type { NextApiRequest, NextApiResponse } from "next";
import { addSession, getSessions } from "./lib/session";

type Data = {
  id: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const id = addSession(req.body);
    res.status(200).json({ id: id });
  } else if (req.method === "GET") {
    const sessions = getSessions();
    res.status(200).json(sessions);
    return sessions;
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
