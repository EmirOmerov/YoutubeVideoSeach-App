import "./VideoItem.css";
import React from "react";


// destrukturirani props
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // clickom na video  poziva se onVideoSelect callback funckija i salje video nazad u App
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;