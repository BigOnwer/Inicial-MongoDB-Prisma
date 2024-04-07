import { useContext} from "react"
import { UserContext } from "../../../context/UsersContext"
import { Helmet } from "react-helmet-async"
import {ButtonAddBook, Conatiner, ConteinerDiv} from './style'
import checkImg from '../../../assets/check.svg'
import { DateFormartter } from "../../../utils/formatter"
import * as Dialog from "@radix-ui/react-dialog";
import { ModalBook } from "../../../components/ModalBook"

export function Admin() {
    const {users, deleteUser} = useContext(UserContext)


    return(
        <Conatiner>
            <Helmet title="admin"/>
            {users.map(aluno => {
                return(
                    <ConteinerDiv key={aluno.id}>
                        <div>
                            <button onClick={() => deleteUser(aluno.id)}><img src={checkImg} alt="" /></button>
                        <h2>Informações do empréstimo</h2>
                        <p>Nome: {aluno.name}</p>
                        <p>Série: {aluno.serie}</p>
                        <p>Turno: {aluno.turno}</p>
                        <p>Data: {DateFormartter.format(new Date(aluno.data))}</p>
                        <p>Livro: {aluno.livro}</p>
                        </div>
                        
                    </ConteinerDiv>
                )
            })}
            <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <ButtonAddBook>Adicionar Livro</ButtonAddBook>
                    </Dialog.Trigger>

                    <ModalBook/>
                </Dialog.Root>
        </Conatiner>
    )
}