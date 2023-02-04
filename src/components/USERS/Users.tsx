import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import {UserType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    unFollow: (id: number) => void
    follow: (id: number) => void
 }

export const Users = (props: UsersPropsType) => {
    let pagesCount =Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);}

    return <div>
        <div>
            {pages.map(page => {
                return  <span className={props.currentPage === page ? styles.selectedPage : ""}
                              onClick = {(e) => {props.onPageChanged(page);}}>
                      {page}
                  </span>
            })}

        </div>
        {
           props.users.map(u => <div key={u.id}>

            <span>
                <div>
                    
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar}/>
                    </NavLink>
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

export default Users;