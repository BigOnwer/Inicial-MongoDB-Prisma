import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersControllers } from "./controllers/ListUsersControllers";
import { DeleteUserController } from "./controllers/DeleteUserController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post('/register', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })

    fastify.get('/list', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersControllers().handle(request, reply)
    })

    fastify.delete('/delete', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply)
    })
    }