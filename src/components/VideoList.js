import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos || !Array.isArray(videos)) {
    return <div>No videos available</div>; 
  }

  return (
    <div className="videoList">
      {videos.length > 0 && <h2 className="videoList__heading">Search Results</h2>}
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
      ))}
    </div>
  );
};

export default VideoList;
