import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

var App = () => (

  //this.getYouTubeVideos('react tutorials');



  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.


<div>
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <SearchContainer
      // getYouTubeVideos={this.getYouTubeVideos}
      />
    </div>
  </nav>
  <div className="row">
    <div className="col-md-7">
      <VideoPlayerContainer
      // video={this.state.currentVideo}
      />
    </div>
    <div className="col-md-5">
      <VideoListContainer
        // handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
        // videos={this.state.videos}
      />
    </div>
  </div>
</div>


);

export default App;
