import { ReactNode, createContext, useEffect, useState } from "react";
import { API } from "../lib/axios";

interface User {
    id: number;
    email: string;
    password: number;
    name: string;
  }

  interface UserInput{
    email: string;
    password: string;
    name: string;
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
    const {email, password, name} = data

    const response = await API.post('/register', {
      email,
      password,
      name
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