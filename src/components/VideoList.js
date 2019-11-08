import React from 'react';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag} //data flowing down, is handled by mapStateToProps + "videos.MAP(video => ...etc"
          video={video} //data flowing down, is handled by mapStateToProps + "videos.MAP(video => ...etc"
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick} // data flowing up, must handle with mapDispatchToProps
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
