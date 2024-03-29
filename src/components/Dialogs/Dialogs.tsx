import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";




export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.profilePage.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                                    id={dialog.id}/>)
    const messagesElements = props.messagePage.messagesData.map(m => <Message message={m.message}
                                                                              id={m.id}/>)
    const newMessageText = props.messagePage.newMessageText

    const onSendMessageClick = () => {
       props.sendMessage(newMessageText)
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