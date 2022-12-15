import React from 'react'
import styles from './Users.module.css'
import {RootUsersType} from "./UsersContainer";
import axios from 'axios'
import userPhoto from "../../assets/images/avatar.png"

class Users extends React.Component<RootUsersType> {

    componentDidMount(): void {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(page => {
                    <span className={this.props.currentPage === page && styles.selectedPage}>{page}</span>
                })}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>

            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar}/>
                </div>
                 <div>
                     {u.followed ?
                         <button onClick={() => {
                             this.props.unFollow(u.id)
                         }}> Unfollow</button> :
                         <button onClick={() => {
                             this.props.follow(u.id)
                         }}> Follow</button>
                     }
                 </div>
            </span>
                        <span>
                <span>
            <div>{u.name}</div><div>{u.status}</div>
                </span>
            </span>
                        <span>
                 <span>
                      <div>{"u.location.country"}</div>
                     <div>{"u.location.city"}</div>
                 </span>
            </span>
                    </div>
                )
            }
        </div>

    }
}

export default Users;