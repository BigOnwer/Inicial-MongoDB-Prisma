import * as Dialog from "@radix-ui/react-dialog"
import { X } from "phosphor-react"
import { Close, Content, Overlay } from "./style"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react"
import { UserContext } from "../../context/BooksContext"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const regisBookForm = z.object({
    name: z.string(),
    capa: z.string(),
    syntase: z.string()
})

type RegisBookForm = z.infer<typeof regisBookForm>

export function ModalBook() {
    const {createBook} = useContext(UserContext)

    const { register, handleSubmit, reset } = useForm<RegisBookForm>({
        resolver: zodResolver(regisBookForm),
    })

    async function handleRegister(data: RegisBookForm) {
       try{
            console.log(data)
            toast.success('Livro Adicionado com sucesso')

            const {name, capa, syntase} = data

            await createBook({
                name,
                capa,
                syntase
            })

            reset()
        } catch{
            toast.error('Erro ao registrar livro')
            reset()
        }
    }

    return(
        <Dialog.Portal>
                <Overlay/>

                <Content>
                    <header>
                        <Dialog.Title>Cadastro</Dialog.Title>
                        <Close> <X size={22}/> </Close>
                    </header>

                    <form action="" onSubmit={handleSubmit(handleRegister)}>
                        <input type="text" placeholder="Nome do livro..." required {...register("name")}/>
                        <input type="text" placeholder="Capa do livro..." required {...register("capa")}/>
                        <input type="text" placeholder="Syntase do livro..." required {...register("syntase")}/>
                        <button type="submit">Cadastrar</button>
                    </form>
                </Content>
            </Dialog.Portal>
    )
}