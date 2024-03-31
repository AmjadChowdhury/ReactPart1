import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){
    const [users,setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div style={{border: '2px dotted blue',padding: '10px',borderRadius: '15px',marginTop: '10px'}}>
            <h2>Users : {users.length}</h2>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}