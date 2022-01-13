import React from "react";
import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div >
            <div className={s.content}>
                <img src='https://cs13.pikabu.ru/post_img/big/2019/10/03/6/157009310718123799.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}