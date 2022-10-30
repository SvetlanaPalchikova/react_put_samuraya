let renderEntireTree = (props: StatePropsType) => {
    console.log("State changed")
}

export type StatePropsType = {
    dialogsData: Array<DialogItemTypeProps>
    messagesData: Array<MessageTypeProps>
    posts: Array<PostType>
    newPostText: string
    updateNewPostText:(newText: string)=>void
    onPostChange: (newText: string)=>void
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

export const state = {
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
    posts: [
        {id: 1, message: "Hi, how are you?", like: 'like', likesCount: 20},
        {id: 2, message: "It`s my first post?", like: 'like', likesCount: 0}
    ],
    newPostText: "it-kamasutra.com",
    updateNewPostText: (newText: string) => {},
    onPostChange: (newText: string)=> {}
}

export const addPost = (text: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        like: "like",
        message: state.newPostText,
        likesCount: 0
    }
    state.posts.push(newPost);
    state.newPostText = "";
    renderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.newPostText=newText;
    renderEntireTree(state);
}

export const onPostChange = (newText: string) => {

}

 export const subscriber = (observer: (state: StatePropsType) => void) => {
     renderEntireTree = observer
 }
