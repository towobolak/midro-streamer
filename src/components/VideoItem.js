import React from 'react';
import './VideoItem.css';

function VideoItem({ video }) {
  return (
    <div className="videoItem" onClick={() => window.open(video.videoUrl, '_blank')}>
      <img className="videoItem__thumbnail" src={video.thumbnail} alt={video.title} />
      <h4 className="videoItem__title">{video.title}</h4>
    </div>
  );
}

export default VideoItem;
