import { ReactNode, createContext, useEffect, useState } from "react"
import { API } from "../lib/axios"

interface Book {
    id: string
    criado_em: string
    name: string
    syntase: number
    capa: string
  }

  interface BookInput{
    name: string
    syntase: string
    capa: string
  }

interface UserContextType{
    books: Book[]
    fetchList: (query?: string) => Promise<void>
    createBook: (data: BookInput) => Promise<void>
}

interface UserProviderProps{
    children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function BooksProviders({children}: UserProviderProps) {
  const [books, setBooks] = useState<Book[]>([])

  async function fetchList(query?: string) {
    const response = await API.get('/books', {
      params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
      }
  })

    setBooks(response.data)
  }

  async function createBook(data: BookInput) {
    const {name, capa, syntase} = data

    const response = await API.post('/book', {
      name,
      capa,
      syntase
  })

  setBooks(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchList()
  }, [])

  return(
    <UserContext.Provider
    value={{
    books,
    fetchList,
    createBook,
  }}
    >
        {children}
    </UserContext.Provider>
  )
}