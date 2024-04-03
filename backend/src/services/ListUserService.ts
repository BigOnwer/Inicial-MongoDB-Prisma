import prismaClient from "../prisma";

export class ListUserService{
    async execute() {
        const alunos = await prismaClient.alunos.findMany()

        return alunos
    }
}