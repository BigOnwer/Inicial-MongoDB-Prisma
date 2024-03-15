import prismaClient from "../prisma";

interface DeleteUserProps{
    id: string
}

export class DeleteUserService{
    async execute({id}: DeleteUserProps) {
        if(!id){
            throw new Error('Solicictacao invalida')
        }

        const findUsers = await prismaClient.user.findFirst({
            where:{
                id: id
            }
        })

        if(!findUsers){
            throw new Error('Usuario nao encontrado')
        }

        await prismaClient.user.delete({
            where:{
                id: findUsers.id
            }
        })

        return {message: "Usuario deletado com sucesso!"}
    }
}