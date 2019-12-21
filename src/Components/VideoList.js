import React from "react";
import VideoItem from "./VideoItem";


// destruct props
const VideoList = ({ videos, onVideoSelect }) => {
  // map lista za kreiranje instance VideoList
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  // prikaz video liste
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;