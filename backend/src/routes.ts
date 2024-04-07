import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersControllers } from "./controllers/ListUsersControllers";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { CreateBookController } from "./controllers/CreateBookController";
import { ListBooksController } from "./controllers/ListBooksController";
import { getUser } from "./controllers/idPageController";
import { getBook } from "./controllers/GetNameController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post('/register', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })

    fastify.post('/book', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBookController().handle(request, reply)
    })

    fastify.get('/list', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersControllers().handle(request, reply)
    })

    fastify.get('/books', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListBooksController().handle(request, reply)
    })

    fastify.delete('/delete', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply)
    })

    fastify.get('/books/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        return new getUser().handle(request, reply)
      });
    }