import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagePageType} from "../../Redux/DialogsReducer";
import {ProfilePageType} from "../../Redux/ProfileReducer";



type DialogsType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sendMessage: ()=> void
    updateNewMessageText: (messageText: string)=> void
}


export const Dialogs = (props: DialogsType) => {

    const dialogsElements = props.profilePage.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                                    id={dialog.id}/>)
    const messagesElements = props.messagePage.messagesData.map(m => <Message message={m.message}
                                                                              id={m.id}/>)
    const newMessageText = props.messagePage.newMessageText

    const onSendMessageClick = () => {
       props.sendMessage()
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = event.target.value;
        props.updateNewMessageText(messageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={newMessageText}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}