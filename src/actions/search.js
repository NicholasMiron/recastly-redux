import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var canSearch = true;
var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  if(canSearch) {
    return dispatch => {searchYouTube({key:YOUTUBE_API_KEY, query:q}, (videos) => {dispatch({type:'CHANGE_VIDEO_LIST', videos: videos})  })};
    
  }

};

export default handleVideoSearch;
