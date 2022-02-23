import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileTypeProps = {
    posts: Array<{ id: number, message: string, like: string, likesCount: number }>
    addPost:(message: string)=>void
    newPostText: string
    updateNewPostText:(newText: string)=>void
    onPostChange: (postText: string)=>void
}
export const Profile = (props: ProfileTypeProps) => {
    return <div>
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                onPostChange={props.onPostChange}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    </div>
}