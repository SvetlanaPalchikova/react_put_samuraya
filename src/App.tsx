import React from 'react';
import './App.css';
import {start} from "repl";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profaile} from "./components/Profaile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profaile/>
        </div>);
}

export default App;

