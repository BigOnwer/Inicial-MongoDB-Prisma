import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.query as {id: string}
        const userService = new DeleteUserService()

        const aluno = await userService.execute({id})

        reply.send(aluno)
    }
}