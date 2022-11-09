import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../Redux/State";

export type ProfileTypeProps = {
    posts: Array<{ id: number, message: string, like: string, likesCount: number }>
    newPostText: string
    dispatch: (action: ActionType) => void
}
export const Profile = (props: ProfileTypeProps) => {
    return <div>
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                // newText={props.newText}
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch = {props.dispatch}/>
        </div>
    </div>
}