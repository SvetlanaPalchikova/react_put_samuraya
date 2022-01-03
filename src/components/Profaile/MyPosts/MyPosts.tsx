import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let PostData=[
        {id:1, message:"Hi, how are you?", like:'like', likesCount:20},
        {id:2, message:"It`s my first post?", like:'like', likesCount:0}
    ]
    let postsElement = PostData.map(p=><Post message={p.message} like={p.like} likesCount={p.likesCount} id={p.id} />)
    return <div className={s.postsBlock}>
        <h3> My posts</h3>
        <div>
            <div>
            <textarea> </textarea>
            </div>
            <div className={s.button}>
            <button>Add post</button>
            <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}

        </div>
    </div>
}
