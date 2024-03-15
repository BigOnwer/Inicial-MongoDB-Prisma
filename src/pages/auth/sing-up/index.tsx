import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'
import { UserContext } from '../../../context/UsersContext'
import { zodResolver } from '@hookform/resolvers/zod'

const signUpForm = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
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
            toast.success('Conta criada com sucesso', {
                action: {
                    label: 'Entrar',
                    onClick: () => navigate('/')
                }
            })

            const {email, name, password} = data

            await createUser({
                email,
                name,
                password
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
            <form action="" onSubmit={handleSubmit(handleRegister)}>
                <input type="email" required {...register('email')} placeholder='Email...'/>
                <input type="text" required {...register('name')} placeholder='Usuario...'/>
                <input type="password" required {...register('password')} placeholder='Senha...'/>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}