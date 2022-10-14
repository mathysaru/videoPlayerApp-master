import React, { useState, useRef } from "react";
import videoList from "./videosList.json";
import "./Videoplayer.css";

function Videoplayer() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [pauseTime, setPauseTime] = useState(null);
  const [duration, setDuration] = useState(null);

  const loadVideo = () => {
    setDuration(null);
    const data = videoRef;
    setDuration(data.current.duration);
    setPauseTime(null);
  };

  const videoPause = () => {
    const data = videoRef;
    setPauseTime(data.current.currentTime);
  };
  return (
    <div className="containerFlux">
      <div>
        <h1>videoplayer</h1>
        {videoList.videos.map((video) => {
          return (
            <div className="fluxContainer" key={video.id}>
              {video.title}
              <button
                className="btnstyle"
                onClick={() => setCurrentVideo(video.link)}
              >
                Play
              </button>
            </div>
          );
        })}
      </div>
      <div className="videoDiv">
        {/* <ReactPlayer url={currentVideo} /> */}
        {currentVideo && (
          <>
            <video
              src={currentVideo}
              width="500px"
              autoPlay
              ref={videoRef}
              controls
              onLoadedMetadata={loadVideo}
              onPause={videoPause}
            />
            {duration && <p>Total Duration : {duration}</p>}
            {pauseTime && <p>Pause Duration : {pauseTime}</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default Videoplayer;
