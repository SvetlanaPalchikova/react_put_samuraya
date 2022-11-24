import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import store from "../../../Redux/Redux_Store";
import {Post} from "./Post/Post";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";



export const MyPostsContainer = (props: ProfilePageType) => {
    let postsElement =
        props.posts.map((post) => <Post id={post.id} message={post.message} like={post.like}
                                        likesCount={post.likesCount}/>)
    const addPost = () => {
         store.dispatch(addPostAC(props.newPostText));
    }

    const updateNewPostTextLocal = (e: ChangeEvent<HTMLTextAreaElement>) => {
        store.dispatch(updateNewPostTextAC(e.currentTarget.value));
    }

    return (<MyPosts updateNewPostText={updateNewPostTextLocal} addPost = {addPost}/>)

}
