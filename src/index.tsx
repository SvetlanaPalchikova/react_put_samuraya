import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {RootStoreType} from "./Redux/Redux_Store";
import {Provider} from "react-redux";



export  let renderEntireTree = (state: RootStoreType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App profilePage={state.profilePage} messagePage={state.messagePage} />
            </Provider>
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
