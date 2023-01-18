
export type UserPageType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: boolean
}

export type UsersPropsType ={
    users: Array<UserPageType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    // follow: boolean
    // unFollow: boolean
    // onPageChanged: () => void
}

type FollowActionType = {
    type: "FOLLOW"
    userId: number
}

type UnFollowActionType = {
    type: "UN-FOLLOW"
    userId: number
}

type SetUsersActionType = {
    type: "SET-USERS"
    users: Array<UserPageType>
}
type SetCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

type setTotalUsersCountActionType = {
    type: "SET-TOTAL-COUNT"
    count: number
}
type ActionType = setTotalUsersCountActionType |FollowActionType | UnFollowActionType | SetUsersActionType | SetCurrentPageActionType

const initialState = {
    users: [],
    pageSize:20,
    totalUsersCount: 0,
    currentPage: 2,
    // follow: true,
    // unFollow: false,
    // onPageChanged: 0
}

const usersReducer = (state: UsersPropsType = initialState, action: ActionType): UsersPropsType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                    {return {...u, followed: true}
                    }
                        return u;
                })
            }

            case "UN-FOLLOW":
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId)
                        {return {...u, followed: false}
                        }
                        return u;
                    })
                }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;

    }
}

export const followAC = (userId: number): FollowActionType => {
    return {
        type: "FOLLOW",
        userId
    }
}
export const unFollowAC = (userId: number): UnFollowActionType => {
    return {
        type: "UN-FOLLOW",
        userId
    }
}
export const setUsersAC = (users: Array<UserPageType>): SetUsersActionType => {
    return {
        type: "SET-USERS",
        users
    }
}

export const SetCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
   return {
        type: "SET-CURRENT-PAGE",
        currentPage
    }}

export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountActionType => {
   return {
        type:  "SET-TOTAL-COUNT",
       count: totalUsersCount
    }}




export default usersReducer;