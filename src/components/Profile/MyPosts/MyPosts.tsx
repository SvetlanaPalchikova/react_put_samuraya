import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";



export const MyPosts = (props: MyPostsType) => {
    let postsElement =
        props.posts.map((post) => <Post id={post.id}
                                        message={post.message}
                                        like={post.like}
                                        likesCount={post.likesCount}/>)
    const addPost = (e: React.MouseEvent<HTMLElement>) => {
        let newText = e.currentTarget.title
        props.addPost(newText);
    }

    const updateNewPostTextLocal = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.target.value)

    }

    return <div className={s.postsBlock}>
        <h3> My posts</h3>
        <div>
            <div>
                <textarea onChange={updateNewPostTextLocal} value={props.newPostText}/>
            </div>
            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}

        </div>
    </div>
}
