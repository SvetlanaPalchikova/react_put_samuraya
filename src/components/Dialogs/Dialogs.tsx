import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemTypeProps, MessageTypeProps} from "../../Redux/State";




export type DialogsProps={
    dialogsData:Array<DialogItemTypeProps>
    messagesData: Array<MessageTypeProps>
}
export const Dialogs = (props:DialogsProps) => {

    const dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}