import prismaClient from "../prisma";

interface DeleteUserProps{
    id: string
}

export class DeleteUserService{
    async execute({id}: DeleteUserProps) {
        if(!id){
            throw new Error('Solicictacao invalida')
        }

        const findUsers = await prismaClient.alunos.findFirst({
            where:{
                id: id
            }
        })

        if(!findUsers){
            throw new Error('Usuario nao encontrado')
        }

        await prismaClient.alunos.delete({
            where:{
                id: findUsers.id
            }
        })

        return {message: "Usuario deletado com sucesso!"}
    }
}