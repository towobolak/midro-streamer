import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const handleClick = () => {
    onVideoSelect(`https://www.youtube.com/embed/${video.id.videoId}`); 
  };

  return (
    <div className="videoItem" onClick={handleClick}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="videoItem__thumbnail" />
      <div className="videoItem__info">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoItem;
