import React from "react";
import {RootStoreType} from "../../../Redux/Redux_Store";
import {
    addPost,
    DialogItemTypeProps,
    PostType,
    updateNewPostText
} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";




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
        dialogsData: state.profilePage.dialogsData,
    }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost })(MyPosts)

export default MyPostsContainer;