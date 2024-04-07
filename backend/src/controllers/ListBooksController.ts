import { FastifyReply, FastifyRequest } from "fastify";
import { ListBooksService } from "../services/ListBooks";

export class ListBooksController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listUserService = new ListBooksService()

        const books = await listUserService.execute()

        reply.send(books)
    }
}