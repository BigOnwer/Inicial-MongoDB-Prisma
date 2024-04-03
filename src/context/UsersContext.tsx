import { ReactNode, createContext, useEffect, useState } from "react";
import { API } from "../lib/axios";

interface User {
    id: number;
    data: string;
    name: string;
    serie: number;
    turno: string;
    livro: string
  }

  interface UserInput{
    name: string;
    serie: string;
    turno: string;
    livro: string
  }

interface UserContextType{
    users: User[]
    fetchList: (query?: string) => Promise<void>
    createUser: (data: UserInput) => Promise<void>
}

interface UserProviderProps{
    children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UsersProvider({children}: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  async function fetchList(query?: string) {
    const response = await API.get('/list', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      }
    })

    setUsers(response.data)
  }

  async function createUser(data: UserInput) {
    const {name, serie, turno, livro} = data

    const response = await API.post('/register', {
      name,
      serie,
      turno,
      livro
  })

  setUsers(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchList()
  }, [])

  return(
    <UserContext.Provider
    value={{
    users,
    fetchList,
    createUser,
  }}
    >
        {children}
    </UserContext.Provider>
  )
}