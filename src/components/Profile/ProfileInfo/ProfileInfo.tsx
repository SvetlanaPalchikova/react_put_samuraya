import React from "react";
import {ProfileType} from "../../../Redux/ProfileReducer";
import Preloader from "../../common/Preloader/Preloader";
import style from './ProfileInfo.module.css'

type ProfileInfoType ={
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div >
            <div className={style.content}>
                <img src='https://i.pinimg.com/564x/6c/0e/34/6c0e34c3c6813b1ebcd501fdbfcdc56d.jpg'/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}