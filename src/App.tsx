import React from 'react';
import './App.css';
import {start} from "repl";

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuoOHR0vxJaKO_nh2boPzvJ4t9mO5XygVMQ&usqp=CAU'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>

                </div>
                <div>
                    <a>Masseges</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://stihi.ru/pics/2019/03/14/6421.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    my posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;

