import {SendMessageActionType, UpdateNewMessageActionType} from "./DialogsReducer";
import {ChangeEvent} from "react";


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
    // action:ActionType
    addPost: ()=>void
    updateNewPostText: (e: string) => void
}

export type ActionType =
    // SendMessageActionType
    // | UpdateNewMessageActionType
    | UpdateNewPostActionType
    | AddPostActionType

export type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
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