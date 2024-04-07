import { Link } from "react-router-dom";
import { DivNotFoundContainer } from "./style";

export function NotFound() {
    return(
        <DivNotFoundContainer>
            <h1>Pagina nao encontrada</h1>
            <p>Voltar para a <Link to="/">Home</Link></p>
        </DivNotFoundContainer>
    )
}