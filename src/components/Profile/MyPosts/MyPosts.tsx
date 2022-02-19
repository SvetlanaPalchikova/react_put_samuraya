import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {stringify} from "querystring";

export type PostPropsType = {
    id: number;
    message: string;
    likesCount: number;
    like: string;
}

export type  MyPostsType={
    posts: Array<PostPropsType>;
    addPost: (text: string)=> void
}

export const MyPosts = (props: MyPostsType) => {
    let postsElement =
        props.posts.map((post) => <Post id={post.id} message={post.message} like={post.like} likesCount={post.likesCount} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost=()=>{
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
        }
        // let text = newPostElement.current?.value;
        // props.addPost(newPostElement.current? newPostElement.current.value : " ");
    }
    return <div className={s.postsBlock}>
        <h3> My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}> </textarea>
            </div>
            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
                <button >Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}

        </div>
    </div>
}
