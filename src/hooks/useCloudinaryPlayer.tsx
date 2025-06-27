
import { useState, useRef, useEffect } from 'react';

interface UseCloudinaryPlayerProps {
  videoUrl: string;
  shouldShowVideo: boolean;
}

export const useCloudinaryPlayer = ({ videoUrl, shouldShowVideo }: UseCloudinaryPlayerProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset error state when props change
    setHasError(false);
    setIsVideoLoaded(false);
  }, [videoUrl, shouldShowVideo]);

  const renderVideo = () => {
    if (!shouldShowVideo) return null;

    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/lovable-uploads/b4413382-3998-4c2e-a754-75a067048c2d.png"
        className="w-full h-full object-cover"
        onCanPlay={() => {
          console.log('Video can play');
          setIsVideoLoaded(true);
        }}
        onError={(e) => {
          console.error('Video error:', e);
          setHasError(true);
        }}
        onLoadStart={() => console.log('Video loading started')}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return {
    isVideoLoaded,
    hasError,
    containerRef,
    videoRef,
    renderVideo
  };
};
