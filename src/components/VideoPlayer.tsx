
import { useCloudinaryPlayer } from '../hooks/useCloudinaryPlayer';

interface VideoPlayerProps {
  videoUrl: string;
  shouldShowVideo: boolean;
}

const VideoPlayer = ({ videoUrl, shouldShowVideo }: VideoPlayerProps) => {
  const { containerRef, renderVideo, hasError } = useCloudinaryPlayer({ videoUrl, shouldShowVideo });

  if (hasError) {
    console.error('VideoPlayer: Video has error, not rendering');
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {renderVideo()}
    </div>
  );
};

export default VideoPlayer;
