import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (!state) {
    state = null;
  }
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video || null;
    default:
      return state;
  }
};

export default currentVideoReducer;
