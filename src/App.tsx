import React from 'react';
import './App.css';
import {start} from "repl";

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://nashiptichki.ru/wp-content/uploads/2018/07/%D0%B5%D0%B5%D0%B5%D0%B5%D0%B5.jpg'/>
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
                <div >
                    <img src='https://cs13.pikabu.ru/post_img/big/2019/10/03/6/157009310718123799.jpg'/>
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

