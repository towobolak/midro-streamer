import React, { useState } from 'react';
import VideoList from '../components/VideoList';
import VideoPlayer from '../components/VideoPlayer';

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/embed/tgbNymZ7vqY'); 

  const handleVideoSelect = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <VideoPlayer videoUrl={currentVideo} />
      <VideoList onVideoSelect={handleVideoSelect} />
    </div>
  );
}

export default HomePage;
