import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let PostData=[
        {id:1, message:"Hi, how are you?", like:'like', likesCount:20},
        {id:2, message:"It`s my first post?", like:'like', likesCount:0}
    ]
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
            <Post message={PostData[0].message} like={PostData[0].like} likesCount={PostData[0].likesCount} id={PostData[0].id} />
            <Post message={PostData[1].message} like={PostData[1].like} likesCount={PostData[1].likesCount} id={PostData[1].id} />

        </div>
    </div>
}