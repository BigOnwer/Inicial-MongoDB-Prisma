import prismaClient from "../prisma"

interface CreateUserProps{
    name: string
    syntase: string
    capa: string  // Adicione o campo da URL da capa
}

class CreateLivroService {
    async execute({name, syntase, capa}: CreateUserProps) {
        if(!name || !syntase || !capa){
            throw new Error("Preencha todos os campos")
        }

        const livro = await prismaClient.livros.create({
            data:{
                name,
                syntase,
                capa  // Passe a URL da capa fornecida
            }
        })

        return livro
    }
}

export {CreateLivroService}
