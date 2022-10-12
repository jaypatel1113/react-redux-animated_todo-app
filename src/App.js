// import React, {useState, useEffect} from 'react';
import React from "react";

import { Provider } from "react-redux";
import store from "./store/store";
import Todo from "./component/Todo";

import "./App.css";

store.subscribe(()=>{
    localStorage.setItem('redux-todoData', JSON.stringify(store.getState()))
})

const App = () => {
    return (
        <Provider store={store}>
            <Todo />
        </Provider>
    );
};

export default App;
