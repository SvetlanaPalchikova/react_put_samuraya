import React from "react";
import store, {RootStoreType} from "../../../Redux/Redux_Store";
import {
    addPostAC,
    DialogItemTypeProps,
    PostType,
    updateNewPostTextAC
} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    dialogsData: Array<DialogItemTypeProps>
}

type mapDispatchToPropsType = {
    updateNewPostText: (newPostText: string) => void,
    addPost: (newPost: string) => void
}

export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        dialogsData: state.profilePage.dialogsData
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (newPostText: string) => {
            store.dispatch(updateNewPostTextAC(newPostText));
        },

        addPost: (newPost: string) => {
            store.dispatch(addPostAC(newPost));
        }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;