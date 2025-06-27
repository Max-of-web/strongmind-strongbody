
import { useCloudinaryPlayer } from '../hooks/useCloudinaryPlayer';

interface VideoPlayerProps {
  videoUrl: string;
  shouldShowVideo: boolean;
}

const VideoPlayer = ({ videoUrl, shouldShowVideo }: VideoPlayerProps) => {
  const { containerRef } = useCloudinaryPlayer({ videoUrl, shouldShowVideo });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        zIndex: 1,
      }}
    />
  );
};

export default VideoPlayer;
