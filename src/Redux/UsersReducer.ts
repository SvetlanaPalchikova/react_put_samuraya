
export type UserType = {
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

export type InitialStateType ={
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    users: Array<UserType>
}
type SetCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

type setTotalUsersCountActionType = {
    type: "SET-TOTAL-COUNT"
    count: number
}
type toggleIsFetchingType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}
type ActionType = setTotalUsersCountActionType
    |FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    |toggleIsFetchingType

const initialState = {
    users: [],
    pageSize:20,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
}

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;

    }
}

export const follow = (userId: number): FollowActionType => {
    return {
        type: "FOLLOW",
        userId
    }
}
export const unFollow = (userId: number): UnFollowActionType => {
    return {
        type: "UN-FOLLOW",
        userId
    }
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {
        type: "SET-USERS",
        users
    }
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
   return {
        type: "SET-CURRENT-PAGE",
        currentPage
    }}

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => {
   return {
        type:  "SET-TOTAL-COUNT",
       count: totalUsersCount
    }}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
   return {
        type:  "TOGGLE-IS-FETCHING",
       isFetching
    }}




export default usersReducer;