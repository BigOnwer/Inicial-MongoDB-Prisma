import { FastifyReply, FastifyRequest } from "fastify";
import { ListUserService } from "../services/ListUserService";

export class ListUsersControllers{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listUserService = new ListUserService()

        const alunos = await listUserService.execute()

        reply.send(alunos)
    }
}