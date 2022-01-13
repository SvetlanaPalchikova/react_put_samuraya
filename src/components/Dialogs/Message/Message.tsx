import React from 'react';
import s from './../Dialogs.module.css';



export type MessageTypeProps = {
    message: string
    id: string

}

export const Message = (props: MessageTypeProps) => {
    return <div className={s.dialog}>{props.message}</div>
}
