export type StatePropsType = {
    dialogsData: Array<DialogItemTypeProps>
    messagesData: Array<MessageTypeProps>
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    onPostChange: (newText: string) => void
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

export type OnPostChangeActionType = {
    type: "ON-POST-CHANGE"

}

export type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    messageText: string
}

export type SendMessageActionType = {
    type: "SEND-MESSAGE"
    newMessageText: string
}

export type ActionType = SendMessageActionType | UpdateNewMessageActionType | UpdateNewPostActionType | AddPostActionType | OnPostChangeActionType

export type StoreTypeProps = {
    _state: StatePropsType
    _callSubscriber: (state: StatePropsType) => void
    // addPost: (text: string) => void
    // updateNewPostText: (newText: string) => void
    onPostChange: (newText: string) => void
    subscriber: (observer: (state: StatePropsType) => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionType) => void
}

export let store: StoreTypeProps = {
    _state: {
        posts: [
            {id: 1, message: "Hi, how are you?", like: 'like', likesCount: 20},
            {id: 2, message: "It`s my first post?", like: 'like', likesCount: 0}
        ],

        newPostText: "it-kamasutra.com",
        updateNewPostText: (newText: string) => {
        },
        onPostChange: (newText: string) => {
        },
        dialogsData: [
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
       newMessageText:""
    },
    _callSubscriber(state: StatePropsType){
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscriber(observer: (state: StatePropsType) => void) {this._callSubscriber = observer},
    // addPost() {const newPost: PostType = {
    //         id: new Date().getTime(),
    //         like: "like",
    //         message: this._state.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.posts.push(newPost);
    //     this._state.newPostText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText: string) {
    //     this._state.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    onPostChange() {},
    dispatch(action) {
    if (action.type === "ADD-POST"){
        const newPost: PostType = {
            id: new Date().getTime(),
            like: "like",
            message: this._state.newPostText,
            likesCount: 0
        }
        this._state.posts.push(newPost);
        this._state.newPostText = "";
        this._callSubscriber(this._state);
    }else if (action.type === "UPDATE-NEW-POST-TEXT"){
        this._state.newPostText = action.newText;
        this._callSubscriber(this._state);
    }else if(action.type === "ON-POST-CHANGE"){

    }else if(action.type === "UPDATE-NEW-MESSAGE-TEXT"){
        this._state.newMessageText = action.messageText;
        this._callSubscriber(this._state)
    }else if(action.type === "SEND-MESSAGE"){
        let messageText = this._state.newMessageText;
        this._state.newMessageText = '';
        this._state.messagesData.push({id:"5", message: messageText});
        this._callSubscriber(this._state)
    }

    }

}

export const addPostAC = (newPostText: string):AddPostActionType => {
    return {
        type:"ADD-POST",
        newPostText: newPostText
    }
}
export const updateNewPostTextAC = (newText: string):UpdateNewPostActionType => {
    return {
        type:"UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}
export const updateNewMessageTextAC = (messageText: string):UpdateNewMessageActionType=> {
    return {
        type:"UPDATE-NEW-MESSAGE-TEXT",
        messageText: messageText
    }
}
export const sendMessageAC = (newMessageText: string):SendMessageActionType => {
    return {
        type:"SEND-MESSAGE",
        newMessageText: newMessageText
    }
}

// window.store = store;





