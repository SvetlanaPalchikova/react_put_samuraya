import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {RootStoreType} from "./Redux/Redux_Store";


export  let renderEntireTree = (state: RootStoreType)=> {
    // @ts-ignore
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}  />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}



renderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

reportWebVitals();
