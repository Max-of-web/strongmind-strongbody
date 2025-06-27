
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
    if (videoRef.current && shouldShowVideo && !hasError) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        console.log('Video can play');
        setIsVideoLoaded(true);
        // Auto-play the video
        video.play().catch((error) => {
          console.warn('Video autoplay failed:', error);
        });
      };

      const handleError = (error: any) => {
        console.warn('Video error:', error);
        setHasError(true);
      };

      const handleLoadStart = () => {
        console.log('Video loading started');
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      video.addEventListener('loadstart', handleLoadStart);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
        video.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, [shouldShowVideo, hasError]);

  const renderVideo = () => {
    if (!shouldShowVideo || hasError) return null;

    return (
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />
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
