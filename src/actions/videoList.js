var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  return {
    type: 'VIDEO_FETCH_DATA_SUCCESS',
    newVideos: videos
  };
});

export default changeVideoList;
