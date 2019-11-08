import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state, action) => {        /////var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (!state) {
    state = [];
  }
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos;
    default:
      return state;
  }
};

export default videoListReducer;
