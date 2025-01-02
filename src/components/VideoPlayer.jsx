// VideoPlayer.js
import React from 'react';

function VideoPlayer({ videoSrc }) {
  return (
    <video controls width="100%">
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;