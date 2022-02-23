import React from 'react';
import s from './../Dialogs.module.css';
import {MessageTypeProps} from "../../../Redux/State";

export const Message = (props: MessageTypeProps) => {
    return <div>
        <div className={s.dialog}>{props.message}</div>
        <div>
            <textarea> </textarea>
            <button>Add</button>
        </div>
    </div>
    
}
