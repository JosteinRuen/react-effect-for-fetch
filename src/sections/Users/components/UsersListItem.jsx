

export default function UserListItem(props) {
    return(
        <li style={{ backgroundColor: props.favouriteColour}}>
            <div className ="user-picture">
                <img
                src={props.profileImage}
                />
            </div>
            <h3>{props.firstName}</h3>
            <p>{props.email}</p>
            
        </li>
    )
}