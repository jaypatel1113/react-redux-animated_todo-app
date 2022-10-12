import { createStore } from 'redux';

import rootreducer from "../reducers/rootreducer";


const persistedState = localStorage.getItem('redux-todoData') 
                       ? JSON.parse(localStorage.getItem('redux-todoData'))
                       : []

const store = createStore(rootreducer,
    persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
