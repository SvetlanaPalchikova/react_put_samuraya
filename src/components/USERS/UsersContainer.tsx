import React from 'react'
import {connect} from "react-redux";
import {RootStoreType} from "../../Redux/Redux_Store";
import {
    followAC,
    SetCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType,
} from "../../Redux/UsersReducer";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";


type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
}

export type RootUsersType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<RootUsersType> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>

            <Users totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}

            />
        </>
    }
}


let mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onPageChanged: (pageNumber: number) => {
        },
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
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
