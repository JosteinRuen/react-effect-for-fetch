import UsersListItem from "./UsersListItem"
import { useState, useEffect } from "react"

export default function UsersList(){
    const[users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () =>{
            try{
                const response = await fetch(`https://boolean-uk-api-server.fly.dev/josteinruen/contact`)
                if(!response.ok){
                    throw Error("Coudln't fetch users")
                }
                const data = await response.json()
                setUsers(data)
            } catch(error){
                console.error("Error fetching x", error)
            }
        }

        fetchUsers()
    }, [])

    return (
        <ul className="users-list">
            {users.map((user, index) =>
            <UsersListItem
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                gender={user.gender}
                email={user.email}
                jobTitle={user.jobTitle}
                street = {user.street}
                city={user.city}
                latitude={user.latitude}
                longitude={user.longitude}
                favouriteColour={user.favouriteColour}
                profileImage={user.profileImage}
            />
            )}
        </ul>
    )
}