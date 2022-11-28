import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagePageType, sendMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {ProfilePageType} from "../../Redux/ProfileReducer";
import store, {RootStoreType} from "../../Redux/Redux_Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type DialogsType = {
//     profilePage: ProfilePageType
//     messagePage: MessagePageType
// }

// export const DialogsContainer = (props: DialogsType) => {
//
//     let state = store.getState()
//
//     const newMessageText = state.messagePage.newMessageText
//
//     const onSendMessageClick = () => {
//         store.dispatch(sendMessageAC(newMessageText))
//     }
//     const onNewMessageChange = (messageText: string) => {
//         store.dispatch(updateNewMessageTextAC(messageText))
//     }
//     return (
//         <Dialogs profilePage={state.profilePage}
//                  messagePage={state.messagePage}
//                  sendMessage={onSendMessageClick}
//                  updateNewMessageText={onNewMessageChange}
//         />
//
//     )
// }

type MapStateToPropsType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageText:string)=>void
    updateNewMessageText: (messageText: string) => void
}

export type DialogsPropsType = MapStateToPropsType&MapDispatchToPropsType



    let mapStateToProps = (state: RootStoreType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText:string) => {
            // const newMessageText = state.messagePage.newMessageText
            dispatch(sendMessageAC(newMessageText))
        },
        updateNewMessageText: (messageText: string) => {
            dispatch(updateNewMessageTextAC(messageText))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;