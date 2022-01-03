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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={MassagesData[0].message} id={MassagesData[0].id}/>
                <Message message={MassagesData[1].message} id={MassagesData[1].id}/>
            </div>
        </div>
    )
}