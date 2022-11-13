import {ActionType, MessagePageType, SendMessageActionType, UpdateNewMessageActionType} from "./State";

const initialState = {
    messagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'}
    ],
    newMessageText: ""
}
const dialogsReducer = (state: MessagePageType = initialState, action: ActionType): MessagePageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.messageText;
            return state;
        case "SEND-MESSAGE":
            let messageText = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({id: "5", message: messageText});
            return state;
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