import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea> </textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message="Hi, how are you?" like={"15 like"}/>
            <Post message="It`s my first post" like={'20 like'}/>

        </div>
    </div>
}