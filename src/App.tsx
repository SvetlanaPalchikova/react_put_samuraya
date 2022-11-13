import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile, ProfileTypeProps} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionType, StatePropsType, store, StoreTypeProps} from "./Redux/State";


export type AppProps = {
    // state: StatePropsType
    // dispatch: (action: ActionType) => void
    store: StoreTypeProps
}

const App = (props: AppProps) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                                                             // dialogsData={props.state.dialogsData}
                                                             // messagesData={props.state.messagesData}
                                                             // newMessageText={props.state.newMessageText}
                                                             // dispatch = {props.dispatch}
                                                             store = {props.store}
                    />}/>
                    <Route path='/profile' element={<Profile posts={props.store._state.posts}
                                                             newPostText={props.store._state.newPostText}
                                                             dispatch = {props.store.dispatch}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

