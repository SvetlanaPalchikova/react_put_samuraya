import React from 'react'
import {RootUsersType} from "./UsersContainer";
import axios from 'axios'
import Users from "./Users";




class UsersAPIComponent extends React.Component<RootUsersType > {
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

        return <Users/>
    }
}

export default UsersAPIComponent;