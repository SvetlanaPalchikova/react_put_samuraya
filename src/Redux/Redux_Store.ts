import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer
});

export type RootStoreType = ReturnType<typeof reducers>


let store = createStore(reducers);

// window.store= store

export default store;