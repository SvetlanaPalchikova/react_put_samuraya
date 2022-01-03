import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

//
// type PropsDialogType={
// title: string;
// }

export const Dialogs = ()=>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to ='/dialogs/1'> Dmitriy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ='/dialogs/2'> Svetlana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ='/dialogs/3'>Anna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ='/dialogs/4'> Sergey</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your it-kamasutra?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}