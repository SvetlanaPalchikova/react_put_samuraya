import React from 'react'
import {connect} from "react-redux";
import {RootStoreType} from "../../Redux/Redux_Store";
import {
    followAC,
    SetCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserPageType,
    UsersPropsType
} from "../../Redux/UsersReducer";
import {Dispatch} from "redux";
import UsersAPIComponent from "./UsersAPIComponent";


type mapStateToPropsType = {
    usersPage: UsersPropsType
    users: Array<UserPageType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow:(userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users: Array<UserPageType>) => void
    setCurrentPage: (pageNumber:number) => void
    setTotalUsersCount: (totalCount: number) => void}

 export type RootUsersType = mapStateToPropsType&mapDispatchToPropsType

let mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return{
        usersPage: state.usersPage,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);