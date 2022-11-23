import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreTypeProps} from "./Redux/State";


export type AppProps = {
    store: StoreTypeProps
}

const App = (props: AppProps) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs profilePage={props.store._state.profilePage}
                                                             messagePage={props.store._state.messagePage}
                    />}/>
                    <Route path='/profile' element={<Profile posts={props.store._state.profilePage.posts}
                                                             newPostText={props.store._state.profilePage.newPostText}
                                                             dialogsData={props.store._state.profilePage.dialogsData}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

