import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile, ProfileTypeProps} from "./components/Profile/Profile";
import {Dialogs, DialogsProps} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

type AppProps={
    dialogsProps:DialogsProps
    postsProps:ProfileTypeProps
}

const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   <Routes>
                    <Route path='/dialogs'  element={<Dialogs dialogsData={props.dialogsProps.dialogsData} messagesData={props.dialogsProps.messagesData}/>}/>
                    <Route path='/profile' element={<Profile posts={props.postsProps.posts}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                   </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;

