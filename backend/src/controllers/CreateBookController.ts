import { FastifyReply, FastifyRequest } from "fastify";
import { CreateLivroService } from "../services/CreateBook";

class CreateBookController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, syntase, capa } = request.body as {name: string, syntase: string, capa: string}

        const userService= new CreateLivroService()
        const alunos = await userService.execute({name, syntase, capa})

        reply.send(alunos)
    }
}

export {CreateBookController}