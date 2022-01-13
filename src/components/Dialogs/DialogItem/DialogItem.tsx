import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


export type DialogItemTypeProps = {
    name: string;
    id: string
}
export const DialogItem = (props: DialogItemTypeProps) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {props.name}</NavLink>
    </div>
}

