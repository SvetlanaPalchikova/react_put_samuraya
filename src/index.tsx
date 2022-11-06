
import reportWebVitals from './reportWebVitals';
import {StatePropsType, store} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export  let renderEntireTree = (state: StatePropsType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    onPostChange={store.onPostChange.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}



renderEntireTree(store.getState());

store.subscriber(renderEntireTree)

reportWebVitals();
