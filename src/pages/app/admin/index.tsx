import { useContext} from "react"
import { UserContext } from "../../../context/UsersContext"
import { Helmet } from "react-helmet-async"
import {ConteinerDiv} from './style'
import checkImg from '../../../assets/check.svg'
import { DateFormartter } from "../../../utils/formatter"

export function Admin() {
    const {users} = useContext(UserContext)

    return(
        <div>
            <Helmet title="admin"/>
            {users.map(aluno => {
                return(
                    <ConteinerDiv key={aluno.id}>
                        <div>
                            <button><img src={checkImg} alt="" /></button>
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
        </div>
    )
}