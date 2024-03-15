import { useContext} from "react"
import { UserContext } from "../../../context/UsersContext"

export function Dashboard() {
    const {users} = useContext(UserContext)

    return(
        <div>
            {users.map(user => {
                return(
                    <div key={user.id}>
                        <p>{user.email}</p>
                        <p>{user.name}</p>
                        <br /><br />
                    </div>
                )
            })}
        </div>
    )
}