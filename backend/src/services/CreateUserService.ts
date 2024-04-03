import prismaClient from "../prisma";

interface CreateUserProps{
    name: string
    serie: string
    turno: string
    livro: string
}

class CreateUserService{
    async execute({name, serie, turno, livro}: CreateUserProps) {
        if(!name || !serie || !turno || !livro){
            throw new Error("Preencha todos os campos")
        }

        const alunos = await prismaClient.alunos.create({
            data:{
                name,
                serie,
                turno,
                livro
            }
        })

        return alunos
    }
}

export {CreateUserService}