var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'VIDEO_TITLE_SELECTED',
    newSelection: video
  };
});

export default changeVideo;
