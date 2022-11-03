
import reportWebVitals from './reportWebVitals';
import {store, StoreTypeProps} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export  let renderEntireTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={store.getState()}
                    addPost={store.addPost}
                    updateNewPostText={store.updateNewPostText}
                    onPostChange={store.onPostChange}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}



renderEntireTree(store.getState());

store.subscriber(renderEntireTree)

reportWebVitals();
