import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import {addPost, StatePropsType} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export  let renderEntireTree = (state: StatePropsType )=> {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
