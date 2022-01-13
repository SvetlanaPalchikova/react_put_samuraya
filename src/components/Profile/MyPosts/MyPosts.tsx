import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type Post = {
    id: number;
    message: string;
    likesCount: number;
    like: string;
}

type  MyPostsType={
    posts: Array<Post>;
}

export const MyPosts = (props: MyPostsType) => {

    let postsElement =
        props.posts.map((post) => <Post message={post.message} like={post.like} likesCount={post.likesCount} />)
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
