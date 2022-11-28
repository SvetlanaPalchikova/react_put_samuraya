import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer
});

export type RootStoreType = ReturnType<typeof reducers>


let store = createStore(reducers);

// window.store= store

export default store;