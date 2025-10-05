export function remove({req, res, database}) {
  const { id } = req.params

  database.delete("tickets", id)
  res.writeHead(200).end("Ticket excluído")
}