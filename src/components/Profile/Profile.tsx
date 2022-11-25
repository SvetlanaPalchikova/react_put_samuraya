import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/ProfileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import store from "../../Redux/Redux_Store";




export const Profile = (props: ProfilePageType) => {
    return <div>
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                store={store}
                // posts={props.posts}
                // newPostText={props.newPostText}
                // dialogsData={props.dialogsData}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    </div>
}