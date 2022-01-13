import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem, DialogItemTypeProps} from "./DialogItem/DialogItem";
import {Message, MessageTypeProps} from "./Message/Message";




export type DialogsProps={
    dialogsData:Array<DialogItemTypeProps>
    messagesData: Array<MessageTypeProps>
}
export const Dialogs = (props:DialogsProps) => {
    // let DialogsData = [
    //     {id: '1', name: 'Dmitriy'},
    //     {id: '2', name: 'Svetlana'},
    //     {id: '3', name: 'Anna'},
    //     {id: '4', name: 'Sergey'}
    // ]
    //
    // let MassagesData = [
    //     {id: '1', message: 'Hi'},
    //     {id: '2', message: 'How is your it-kamasutra?'},
    //     {id: '3', message: 'Yo'},
    //     {id: '4', message: 'Yo'}
    // ]

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