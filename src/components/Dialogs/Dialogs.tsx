import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    DialogItemTypeProps,
    MessageTypeProps,
    sendMessageAC,
    StoreTypeProps,
    updateNewMessageTextAC
} from "../../Redux/State";




export type DialogsProps={
    // dialogsData:Array<DialogItemTypeProps>
    // messagesData: Array<MessageTypeProps>
    // newMessageText: string
    // dispatch: (action: ActionType) => void
    store: StoreTypeProps

}
export const Dialogs = (props:DialogsProps) => {

    const dialogsElements = props.store._state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.store._state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    const newMessageText = props.store._state.newMessageText

    const onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageAC(newMessageText))
    }
    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>)=>{
        let messageText = event.target.value;
        props.store.dispatch(updateNewMessageTextAC(messageText))
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
                               placeholder= 'Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}