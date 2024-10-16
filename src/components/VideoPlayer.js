const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return null;
  }

  return (
    <div className="videoPlayer">
      <iframe
        width="100%"
        height="500px"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;