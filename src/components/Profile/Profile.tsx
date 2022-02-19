import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileTypeProps = {
    posts: Array<{ id: number, message: string, like: string, likesCount: number }>
    addPost:(message: string)=>void
}
export const Profile = (props: ProfileTypeProps) => {
    // let posts = [
    //     {id: 1, message: "Hi, how are you?", like: 'like', likesCount: 20},
    //     {id: 2, message: "It`s my first post?", like: 'like', likesCount: 0}
    // ]

    return <div>
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    </div>
}