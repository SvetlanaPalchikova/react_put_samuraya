import React from "react";
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://cs16planet.ru/steam-avatars/544"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>)
}