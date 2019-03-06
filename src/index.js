import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import {Provider} from 'react-redux';
// import store from './store/store.js';
import configureStore from './store/store.js';
//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.
const initialState = {
  currentVideo: 'hello world',
  videoList: 'frank'
}

const store = configureStore(initialState);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube}/>
  </Provider>,
  document.getElementById('app')
)
// ReactDOM.render(
//     <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
//   document.getElementById('app')
// );
