
interface VideoPlayerProps {
  videoUrl: string;
  shouldShowVideo: boolean;
}

const VideoPlayer = ({ videoUrl, shouldShowVideo }: VideoPlayerProps) => {
  console.log('VideoPlayer render:', { videoUrl, shouldShowVideo });
  
  if (!shouldShowVideo) {
    console.log('VideoPlayer: shouldShowVideo is false, not rendering video');
    return null;
  }

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/lovable-uploads/b4413382-3998-4c2e-a754-75a067048c2d.png"
        className="w-full h-full object-cover"
        onLoadStart={() => console.log('Video loading started for URL:', videoUrl)}
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onLoadedData={() => console.log('Video data loaded')}
        onCanPlay={() => console.log('Video can play')}
        onCanPlayThrough={() => console.log('Video can play through')}
        onPlay={() => console.log('Video started playing')}
        onError={(e) => {
          console.error('Video failed to load:', e);
          console.error('Video error target:', e.target);
          console.error('Video error details:', {
            error: e.target?.error,
            networkState: e.target?.networkState,
            readyState: e.target?.readyState,
            currentSrc: e.target?.currentSrc
          });
        }}
        onStalled={() => console.log('Video stalled')}
        onSuspend={() => console.log('Video suspended')}
        onAbort={() => console.log('Video aborted')}
        onEmptied={() => console.log('Video emptied')}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
