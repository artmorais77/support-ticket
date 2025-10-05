import { randomUUID } from "node:crypto";

export function createTicket({ req, res }) {
  const { equipment, description, user_name } = req.body;

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    create_at: new Date(),
    update_at: new Date(),
  };

  return res.writeHead(201).end(JSON.stringify(ticket));
}
