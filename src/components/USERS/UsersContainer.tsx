import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {RootStoreType} from "../../Redux/Redux_Store";
import {followAC, setUsersAC, unFollowAC, UserPageType, UsersPropsType} from "../../Redux/UsersReducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    usersPage: UsersPropsType
    users: Array<UserPageType>
}

type mapDispatchToPropsType = {
    follow:(userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users: Array<UserPageType>) => void
}

 export type RootUsersType = mapStateToPropsType&mapDispatchToPropsType

let mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return{
        usersPage: state.usersPage,
        users: state.usersPage.users
    }
}


let  mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return{
        follow:(userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers:(users: Array<UserPageType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);