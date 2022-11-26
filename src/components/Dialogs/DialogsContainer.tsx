import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagePageType, sendMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {ProfilePageType} from "../../Redux/ProfileReducer";
import store, {RootStoreType} from "../../Redux/Redux_Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

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

type MapStateToProps = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

type MapDispatchToProps = {
    sendMessage: ()=>void
    updateNewMessageText: (messageText: string) => void
}


    let mapStateToProps = (state: RootStoreType): MapStateToProps => {
    return {
        profilePage: state.profilePage,
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch: any): MapDispatchToProps => {
    return {
        sendMessage: () => {
            const newMessageText = state.messagePage.newMessageText
            dispatch(sendMessageAC(newMessageText))
        },
        updateNewMessageText: (messageText: string) => {
            dispatch(updateNewMessageTextAC(messageText))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;