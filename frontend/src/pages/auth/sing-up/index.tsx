import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'
import { UserContext } from '../../../context/UsersContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContainerForm, Divisor, Form, DivInput } from './style'

const signUpForm = z.object({
    name: z.string(),
    serie: z.string(),
    turno: z.string(),
    livro: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function Signup() {
    const {createUser} = useContext(UserContext)

    const { register, handleSubmit, reset } = useForm<SignUpForm>({
        resolver: zodResolver(signUpForm),
    })
    const navigate = useNavigate()

    async function handleRegister(data: SignUpForm) {
       try{
            console.log(data)
            toast.success('Pronto agora voce ja pode ir', {
                action: {
                    label: 'Voltar',
                    onClick: () => navigate('/')
                }
            })

            const {name, serie, turno, livro} = data

            await createUser({
                name,
                serie,
                turno,
                livro
            })

            reset()

            await new Promise(resolve => setTimeout(resolve, 2000))
            navigate('/')
        } catch{
            toast.error('Erro ao criar sua conta')
            reset()
        }
    }

    return(
        <div>
            <ContainerForm>
                <Divisor/>
                <Form action="" onSubmit={handleSubmit(handleRegister)}>
                    <h2>Informações Do Aluno:</h2>
                    <DivInput>
                        <div>
                        <label>Turma</label>
                        <input type="text" required {...register('turno')} placeholder='turno...' autoComplete="off"/>
                        <label>Serie</label>
                        <input type="text" required {...register('serie')} placeholder='serie...' autoComplete="off"/>
                        </div>
                        <div>
                        <label>Nome</label>
                        <input type="text" required {...register('name')} placeholder='nome...' autoComplete="off"/>
                        <label>Livro</label>
                        <input type="text" required {...register('livro')} placeholder='livro...' autoComplete="off"/>
                        </div>
                        
                    </DivInput>
                    <button type="submit">Cadastrar</button>
                </Form>
            </ContainerForm>
            
        </div>
    )
}