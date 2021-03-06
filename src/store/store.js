import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// export default function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }


const initialState = {videoList: exampleVideoData, currentVideo: exampleVideoData[0]}
const configStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configStore;