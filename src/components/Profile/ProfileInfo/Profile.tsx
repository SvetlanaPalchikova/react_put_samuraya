import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {MapDispatchToPropsProfileType, MapStateToPropsProfileType} from "./ProfileContainer";

export type ProfileRootType = MapStateToPropsProfileType & MapDispatchToPropsProfileType



export const Profile = (props: ProfileRootType) => {
    return <div>
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    </div>
}