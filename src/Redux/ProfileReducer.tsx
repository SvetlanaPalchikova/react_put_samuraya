import {ActionType, AddPostActionType, PostType, ProfilePageType, UpdateNewPostActionType} from "./State";

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
    ]
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                like: "like",
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}
export const updateNewPostTextAC = (newText: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}

export default profileReducer;