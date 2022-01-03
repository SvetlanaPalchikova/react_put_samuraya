import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type MessageType = {
    message: string
    id: string
}
type PropsDialogItemType = {
    name: string;
    id: string
}
export const DialogItem = (props: PropsDialogItemType) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {props.name}</NavLink>
    </div>
}
export const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}
export const Dialogs = () => {
    let DialogsData = [
        {id: '1', name: 'Dmitriy'},
        {id: '2', name: 'Svetlana'},
        {id: '3', name: 'Anna'},
        {id: '4', name: 'Sergey'}
    ]

    let MassagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'}
    ]

    let DialogsElement = DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let MessagesElement = MassagesData.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {MessagesElement}
            </div>
        </div>
    )
}