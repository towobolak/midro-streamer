import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videos }) => {
  // Check if videos is undefined or not an array
  if (!videos || !Array.isArray(videos)) {
    return <div>No videos available</div>; // Handle case when no videos are available
  }

  return (
    <div className="videoList">
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
