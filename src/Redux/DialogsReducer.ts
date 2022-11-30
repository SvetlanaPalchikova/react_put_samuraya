import {AddPostActionType, UpdateNewPostActionType} from "./ProfileReducer";
import store from "./Redux_Store";


export type MessagePageType = {
    messagesData: Array<MessageTypeProps>
    newMessageText: string
    sendMessage: () => void,
    updateNewMessageText: (messageText: string) => void
}

export type MessageTypeProps = {
    message: string
    id: string
}

export type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    messageText: string
}

export type SendMessageActionType = {
    type: "SEND-MESSAGE"
    newMessageText: string
}

export type ActionType =
    SendMessageActionType
    | UpdateNewMessageActionType

const initialState = {
    messagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'}
    ],
    newMessageText: "",
    sendMessage: () => {
    },
    updateNewMessageText: (messageText: string) => {
    }
}


const dialogsReducer = (state: MessagePageType = initialState, action: ActionType): MessagePageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.messageText
            }
        case "SEND-MESSAGE":
            let messageText = state.newMessageText;
            return{
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: "5", message: messageText}]
            }

        default:
            return state;
    }

}

export const updateNewMessageTextAC = (messageText: string): UpdateNewMessageActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        messageText: messageText
    }
}
export const sendMessageAC = (newMessageText: string): SendMessageActionType => {
    return {
        type: "SEND-MESSAGE",
        newMessageText: newMessageText
    }
}

export default dialogsReducer;