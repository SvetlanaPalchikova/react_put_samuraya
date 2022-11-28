
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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    dialogsData: Array<DialogItemTypeProps>
    addPost: (newText: string)=>void
    updateNewPostText: (e: string) => void
}

export type ActionType =
    | UpdateNewPostActionType
    | AddPostActionType

export type AddPostActionType = {
    type: "ADD-POST"
    newText: string
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
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
    addPost : () => {},
    updateNewPostText : () => {}
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newText: PostType = {
                id: new Date().getTime(),
                like: "like",
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newText);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case "UPDATE-NEW-POST-TEXT": {

            let stateCopy = {...state}
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        }
        default:
            return state;

    }
}

export const addPostAC = (newText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newText: newText
    }
}
export const updateNewPostTextAC = (newPostText: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: newPostText
    }
}

export default profileReducer;