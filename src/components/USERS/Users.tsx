import React from 'react'
import styles from './Users.module.css'
import {RootUsersType} from "./UsersContainer";

let Users = (props: RootUsersType) => {
    if (props.users.length === 0){
    props.setUsers(
        [{
            id: 1,
            photoUrl: "https://ava-24.com/_ph/102/2/91441472.jpg?1669841459",
            followed: false,
            fullName: "Dmitry",
            status: 'I like a apple',
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            photoUrl: "https://ava-24.com/_ph/102/2/91441472.jpg?1669841459",
            followed: true,
            fullName: "Svetlana",
            status: 'I like a pineapple',
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            photoUrl: "https://ava-24.com/_ph/102/2/91441472.jpg?1669841459",
            followed: false,
            fullName: "Alex",
            status: 'I like a cars',
            location: {city: "Kiev", country: "Ukraine"}
        }]
    )}
    return <div>
        {
            props.users.map(u => <div key={u.id}>

            <span>
                <div>
                    <img src={u.photoUrl} className={styles.avatar}/>
                </div>
                 <div>
                     {u.followed ?
                         <button onClick={() => {
                             props.unFollow(u.id)
                         }}> Unfollow</button> :
                         <button onClick={() => {
                             props.follow(u.id)
                         }}> Follow</button>
                     }
                 </div>
            </span>
                    <span>
                <span>
            <div>{u.fullName}</div><div>{u.status}</div>
                </span>
            </span>
                    <span>
                 <span>
                      <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                 </span>
            </span>
                </div>
            )
        }
    </div>

}

export default Users;