import { useState } from "react";

type videoUrlProps = {
  videoUrl: string;
};

const VideoSection = ({ videoUrl }: videoUrlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="">
      <div className="video-section rounded-lg">
        <div className={`video-container ${isPlaying ? "playing" : ""}`}>
          {!isPlaying && (
            <button className="play-button" onClick={handlePlayButtonClick}>
              ▶️
            </button>
          )}
          {isPlaying && (
            <video className="custom-video" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
