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
    <div className="mx-auto w-[80%]">
      <div className="video-section aspect-video max-h-[38.56rem] max-w-[68.25rem] rounded-xl">
        <div
          className={`video-container max-h-[31.625rem] max-w-[56rem] ${isPlaying ? "playing" : ""}`}
        >
          {!isPlaying && (
            <button
              className="play-button inset absolute"
              onClick={handlePlayButtonClick}
            >
              {/* ▶️ */}
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
