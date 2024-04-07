import { Helmet } from "react-helmet-async"
import { UserContext } from "../../../context/BooksContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Search } from "./components/search"
import { Content } from "./style"

export function Livros() {
    const {books} = useContext(UserContext)

    return(
        <div>
            <Helmet title="Admin"/>
            <Search/>
            <Content>
                {books.map(book => {
                    return(
                        <Link to={`/book/${book.id}`} key={book.id}>
                            <div>
                                <img src={book.capa}/>
                                <p>{book.name}</p>
                            </div>
                        </Link>
                )
                })}
            </Content>
            
        </div>
    )
}