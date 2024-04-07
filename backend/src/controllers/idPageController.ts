import { FastifyReply, FastifyRequest } from "fastify";
import { getUserById } from "../services/idPageService";


// Controlador para obter um usuário pelo ID
export class getUser {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const userId = request.query as {id: string};
    const bookService = new getUserById
    const id = await bookService.execute(userId)
  
  if (!id) {
    return reply.code(404).send({ message: 'Usuário não encontrado' });
  }
  
  return id;
  }
}
