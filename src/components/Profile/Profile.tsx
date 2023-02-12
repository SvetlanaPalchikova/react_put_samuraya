import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {MapDispatchToPropsProfileType, MapStateToPropsProfileType} from "./ProfileInfo/ProfileContainer";

type ProfileType = MapStateToPropsProfileType & MapDispatchToPropsProfileType



export const Profile = (props: ProfileType) => {
    return <div>
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    </div>
}