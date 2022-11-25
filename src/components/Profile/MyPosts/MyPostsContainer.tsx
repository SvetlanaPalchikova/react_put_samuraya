import React, {ChangeEvent} from "react";
import store from "../../../Redux/Redux_Store";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";



export const MyPostsContainer = (props: ProfilePageType ) => {
    let state = store.getState();
    const addPost = () => {
         store.dispatch(addPostAC(props.newPostText));
    }

    const updateNewPostTextLocal = (newPostText: string) => {
        store.dispatch(updateNewPostTextAC(newPostText));
    }

    return (<MyPosts
                     updateNewPostText={updateNewPostTextLocal}
                     addPost = {addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
                     dialogsData={state.profilePage.dialogsData}/>)

}
