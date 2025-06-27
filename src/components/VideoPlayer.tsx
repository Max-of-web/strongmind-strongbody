
interface VideoPlayerProps {
  videoUrl: string;
  shouldShowVideo: boolean;
}

const VideoPlayer = ({ videoUrl, shouldShowVideo }: VideoPlayerProps) => {
  if (!shouldShowVideo) {
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
        onError={(e) => {
          console.error('Video failed to load:', e);
        }}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
