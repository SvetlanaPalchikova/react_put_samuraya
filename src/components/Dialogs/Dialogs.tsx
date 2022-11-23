import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StatePropsType, store} from "../../Redux/State";
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";


export const Dialogs = (props: StatePropsType) => {

    const dialogsElements = props.profilePage.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                                    id={dialog.id}/>)
    const messagesElements = props.messagePage.messagesData.map(m => <Message message={m.message}
                                                                              id={m.id}/>)
    const newMessageText = props.messagePage.newMessageText

    const onSendMessageClick = () => {
        store.dispatch(sendMessageAC(newMessageText))
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = event.target.value;
        store.dispatch(updateNewMessageTextAC(messageText))
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