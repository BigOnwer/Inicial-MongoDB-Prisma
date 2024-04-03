import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, serie, turno, livro } = request.body as {name: string, serie: string, turno: string, livro: string}
        console.log(name)
        console.log(serie)

        const userService= new CreateUserService()
        const alunos = await userService.execute({name, serie, turno, livro})

        reply.send(alunos)
    }
}

export {CreateUserController}