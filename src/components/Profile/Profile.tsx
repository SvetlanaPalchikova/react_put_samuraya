import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";


export const Profile = (props: ProfilePageType) => {
    return <div>
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dialogsData={props.dialogsData}/>
        </div>
    </div>
}