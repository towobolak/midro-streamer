import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="videoPlayer">
      <iframe
        width="100%"
        height="480"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Video Player"
      />
    </div>
  );
}

export default VideoPlayer;
