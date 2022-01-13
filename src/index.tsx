import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogsData = [
    {id: '1', name: 'Dmitriy'},
    {id: '2', name: 'Svetlana'},
    {id: '3', name: 'Anna'},
    {id: '4', name: 'Sergey'}
]

const messagesData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How is your it-kamasutra?'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'Yo'}
]
const posts = [
    {id: 1, message: "Hi, how are you?", like: 'like', likesCount: 20},
    {id: 2, message: "It`s my first post?", like: 'like', likesCount: 0}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsProps={{dialogsData, messagesData }} postsProps={{posts}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
