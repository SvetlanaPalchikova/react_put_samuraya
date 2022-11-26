import React, {ChangeEvent} from "react";
import store, {RootStoreType} from "../../../Redux/Redux_Store";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {sendMessageAC, updateNewMessageTextAC} from "../../../Redux/DialogsReducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";


// export const MyPostsContainer = (props: ProfilePageType ) => {
//     let state = store.getState();
//     const addPost = () => {
//          store.dispatch(addPostAC(props.newPostText));
//     }
//
//     const updateNewPostTextLocal = (newPostText: string) => {
//         store.dispatch(updateNewPostTextAC(newPostText));
//     }
//
//     return (<MyPosts
//                      updateNewPostText={updateNewPostTextLocal}
//                      addPost = {addPost}
//                      posts={state.profilePage.posts}
//                      newPostText={state.profilePage.newPostText}
//                      dialogsData={state.profilePage.dialogsData}/>)
//
// }

let mapStateToProps = (state: RootStoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        dialogsData: state.profilePage.dialogsData
    }
}
let mapDispatchToProps = (state: RootStoreType) => {
    return {
        updateNewPostText: (newPostText: string) => {
            store.dispatch(updateNewPostTextAC(newPostText));
        },

        addPost: () => {
            store.dispatch(addPostAC(state.profilePage.newPostText));
        }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;