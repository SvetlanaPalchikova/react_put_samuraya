import React from "react";
import s from './Profaile.module.css';

export const Profaile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://cs13.pikabu.ru/post_img/big/2019/10/03/6/157009310718123799.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}