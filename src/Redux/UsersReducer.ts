


// export type UserType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: LocationPropsType
// }

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
}

// type LocationPropsType = {
//     city: string
//     country: string
// }

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

type ActionType = FollowActionType | UnFollowActionType | SetUsersActionType

const initialState = {
    users: [],

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
            return {...state, users: [...state.users, ...action.users]}
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

export default usersReducer;