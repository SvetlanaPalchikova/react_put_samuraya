import React from 'react';
import {MessagePageType, sendMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {ProfilePageType} from "../../Redux/ProfileReducer";
import {RootStoreType} from "../../Redux/Redux_Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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