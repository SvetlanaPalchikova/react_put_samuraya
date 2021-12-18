import React from "react";
import classes from './Navbar.module.css';

// let classes = {
// //     'nav': 'Navbar_nav__3thaO',
// //     'item': 'Navbar_item__2_Y_x'
// //     'active': 'Navbar_item__2_Y_x.Navbar_active__3S02z'
// // }
//  let c1 = "item";
//  let c2 = "active";
// // // " item active"
//  let classes = c1 + " " + c2;
//  let classNew = `&{classes.item} &{classes.active}`;


export const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <a>Profile</a>
        </div>
        <div className={classes.active}>
            <a>Masseges</a>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </nav>
}