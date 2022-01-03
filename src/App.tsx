import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profaile} from "./components/Profaile/Profaile";
import {Dialogs} from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
            <Dialogs/>
            {/*    <Profaile/>*/}
            </div>

        </div>);
}

export default App;

