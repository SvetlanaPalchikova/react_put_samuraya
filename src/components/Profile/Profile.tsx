import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileTypeProps = {
    posts: Array<{ id: number, message: string, like: string, likesCount: number }>
    newPostText: string
    dispatch: (action: { type: string; newText: string }) => void
}
export const Profile = (props: ProfileTypeProps) => {
    return <div>
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch = {props.dispatch}/>
        </div>
    </div>
}