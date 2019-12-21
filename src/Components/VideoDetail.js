import React from "react";


const VideoDetail = ({ video }) => {
  // u slucaju nepostojeceg videa izbaci prazan div ili moze se staviti string ex. loading...
  if (!video) {
    return <div></div>;
  }

  // glavni url odakle pozivamo video listu
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          data-source="youtube"
          src={videoSrc}
          title={video.snippet.title}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;