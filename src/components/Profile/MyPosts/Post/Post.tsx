import React from "react";
import s from './Post.module.css';

export type PostType={
    message: string;
    like: string;
    likesCount: number;
    // id: number
}
export const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src="https://cs16planet.ru/steam-avatars/544"/>
            {props.message}
            <div>
                <span>{props.like}</span>{props.likesCount}
            </div>
        </div>)
}