import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../../../context/BooksContext";
import { Content, InfosContent } from "./style";

export function BookDetails() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/get-book')
  }

  const { id } = useParams();

  const { books } = useContext(UserContext);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div> Livro não encontrado</div>;
  }

  return (
    <div>
      <Content>
        <div>
          <img src={book.capa} alt={"Livro:" + book.name} />
        </div>

        <InfosContent>
          <h2>{book.name}</h2>
          <br />
          <p>{book.syntase}</p>
          <br /><br /><br />
          <button onClick={handleNavigate}>Pegar Livro</button>
        </InfosContent>
      </Content>
    </div>
  );
}