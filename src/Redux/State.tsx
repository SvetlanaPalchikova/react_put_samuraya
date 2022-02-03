import React from "react";

// type PostsType={
//     id: number;
//     message: string;
//     like: string;
//     likesCount: number
// }
//
// type MessagesDataType={
//     id: string;
//     message: string
// }
//  type DialogsDataType={
//     id: string;
//     name: string
//  }

export type StatePropsType = {
     dialogsData: Array<DialogItemTypeProps>
    messagesData: Array<MessageTypeProps>
    posts: Array<PostType>
}


// export type DialogsProps= {
//     dialogsData: Array<DialogItemTypeProps>
//     messagesData: Array<MessageTypeProps>
// }
export type DialogItemTypeProps = {
    name: string;
    id: string
}
export type MessageTypeProps = {
    message: string
    id: string
}

export type PostType={
    id: number
    message: string;
    like: string;
    likesCount: number;

}
export const state = {
    dialogsData:[
        {id: '1', name: 'Dmitriy'},
        {id: '2', name: 'Svetlana'},
        {id: '3', name: 'Anna'},
        {id: '4', name: 'Sergey'}
    ],
    messagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'}
    ],
    posts:[
        {id: 1, message: "Hi, how are you?", like: 'like', likesCount: 20},
        {id: 2, message: "It`s my first post?", like: 'like', likesCount: 0}
        ]
}