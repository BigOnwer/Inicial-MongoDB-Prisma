import prismaClient from "../prisma";

interface idProps{
    id: string
}


// Função para obter um usuário pelo ID
export class getUserById{
    async execute({id}: idProps) {
        return await prismaClient.livros.findFirst({
            where:{
                id: id
            }
        })
    }
  
}
