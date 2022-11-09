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
import {ActionType, StatePropsType} from "./Redux/State";


export type AppProps = {
    state: StatePropsType
    dispatch: (action: ActionType) => void

}

const App = (props: AppProps) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs dialogsData={props.state.dialogsData}
                                                             messagesData={props.state.messagesData}/>}/>
                    <Route path='/profile' element={<Profile posts={props.state.posts}
                                                             newPostText={props.state.newPostText}
                                                             dispatch = {props.dispatch}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

