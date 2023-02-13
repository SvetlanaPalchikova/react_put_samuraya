
export type DialogItemTypeProps = {
    name: string;
    id: string
}

export type PostType = {
    id: number
    message: string;
    like: string;
    likesCount: number;
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null | string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null | string,
        github: string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    dialogsData: Array<DialogItemTypeProps>
    profile: ProfileType | null
}

export type ActionType =
    | UpdateNewPostActionType
    | AddPostActionType
    | setUsersProfileType

export type AddPostActionType = {
    type: "ADD-POST"
    newText: string
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}

export type setUsersProfileType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}


const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", like: 'like', likesCount: 20},
        {id: 2, message: "It`s my first post?", like: 'like', likesCount: 0}],
    newPostText: "it-kamasutra.com",
    dialogsData: [
        {id: '1', name: 'Dmitriy'},
        {id: '2', name: 'Svetlana'},
        {id: '3', name: 'Anna'},
        {id: '4', name: 'Sergey'}
    ],
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newText: PostType = {
                id: new Date().getTime(),
                like: "like",
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newText],
                newPostText: ""
            };
        case "UPDATE-NEW-POST-TEXT":
             return {
                ...state,
                newPostText: action.newPostText
            }
            case "SET-USER-PROFILE":
             return {...state, profile: action.profile}

        default:
            return state;

    }
}

export const addPost = (newText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newText: newText
    }
}
export const updateNewPostText = (newPostText: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    }
}

export const setUsersProfile = (profile: ProfileType): setUsersProfileType => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    }

}

export default profileReducer;