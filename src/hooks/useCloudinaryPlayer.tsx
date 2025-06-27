
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
        console.error('Video error:', error);
        setHasError(true);
      };

      const handleLoadStart = () => {
        console.log('Video loading started');
      };

      const handleLoadedData = () => {
        console.log('Video data loaded');
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [shouldShowVideo, hasError]);

  const renderVideo = () => {
    if (!shouldShowVideo || hasError) return null;

    // Use the direct Cloudinary URL without additional transformations
    const cloudinaryUrl = "https://res.cloudinary.com/dhnkuonev/video/upload/v1735152266/personal-trainer-background_iuvs5h.mp4";

    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        onError={(e) => {
          console.error('Video element error:', e);
          setHasError(true);
        }}
        onLoadStart={() => console.log('Video load started')}
        onCanPlay={() => console.log('Video can play event')}
      >
        <source src={cloudinaryUrl} type="video/mp4" />
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
