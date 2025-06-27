
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

    // Extract the video ID from the Cloudinary URL
    const cloudinaryUrlPattern = /\/([^\/]+)\.mp4$/;
    const match = videoUrl.match(cloudinaryUrlPattern);
    const videoId = match ? match[1] : 'personal-trainer-background_iuvs5h';
    const cloudName = 'dhnkuonev'; // Your cloud name

    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source 
          src={`https://res.cloudinary.com/${cloudName}/video/upload/vc_h265/${videoId}.mp4`} 
          type="video/mp4; codecs=hvc1" 
        />
        <source 
          src={`https://res.cloudinary.com/${cloudName}/video/upload/vc_vp9/${videoId}.webm`} 
          type="video/webm; codecs=vp9" 
        />
        <source 
          src={`https://res.cloudinary.com/${cloudName}/video/upload/vc_h264/${videoId}.mp4`} 
          type="video/mp4" 
        />
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
