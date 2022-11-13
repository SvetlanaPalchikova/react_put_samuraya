import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

export type StatePropsType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    dialogsData: Array<DialogItemTypeProps>
}

export type MessagePageType = {
    messagesData: Array<MessageTypeProps>
    newMessageText: string
}

export type DialogItemTypeProps = {
    name: string;
    id: string
}

export type MessageTypeProps = {
    message: string
    id: string
}

export type PostType = {
    id: number
    message: string;
    like: string;
    likesCount: number;

}

export type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
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
    | UpdateNewPostActionType
    | AddPostActionType

export type StoreTypeProps = {
    _state: StatePropsType
    _callSubscriber: (state: StatePropsType) => void
    subscriber: (observer: (state: StatePropsType) => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionType) => void
}

export let store: StoreTypeProps = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", like: 'like', likesCount: 20},
                {id: 2, message: "It`s my first post?", like: 'like', likesCount: 0}],
            newPostText: "it-kamasutra.com",
            dialogsData: [
                {id: '1', name: 'Dmitriy'},
                {id: '2', name: 'Svetlana'},
                {id: '3', name: 'Anna'},
                {id: '4', name: 'Sergey'}
            ]
        },
        messagePage: {
            messagesData: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How is your it-kamasutra?'},
                {id: '3', message: 'Yo'},
                {id: '4', message: 'Yo'}
            ],
            newMessageText: ""
        }
    },
    _callSubscriber(state: StatePropsType) {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscriber(observer: (state: StatePropsType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.messagePage = dialogsReducer(this._state.messagePage, action);

    }
}

// window.store = store;





