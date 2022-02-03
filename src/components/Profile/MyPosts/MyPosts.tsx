import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export type PostPropsType = {
    id: number;
    message: string;
    likesCount: number;
    like: string;
}

export type  MyPostsType={
    posts: Array<PostPropsType>;
}

export const MyPosts = (props: MyPostsType) => {

    let postsElement =
        props.posts.map((post) => <Post id={post.id} message={post.message} like={post.like} likesCount={post.likesCount} />)
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
