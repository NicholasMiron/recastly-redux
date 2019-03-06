import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
export default function configureStore(initialState) {
    console.log('wereaere');
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}