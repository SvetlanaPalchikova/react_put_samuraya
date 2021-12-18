import React from "react";
import s from './Profaile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profaile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://cs13.pikabu.ru/post_img/big/2019/10/03/6/157009310718123799.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            <MyPosts/>
        </div>
    </div>
}