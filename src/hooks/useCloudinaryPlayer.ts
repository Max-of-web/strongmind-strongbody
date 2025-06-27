
import { useState, useRef, useEffect } from 'react';

interface UseCloudinaryPlayerProps {
  videoUrl: string;
  shouldShowVideo: boolean;
}

export const useCloudinaryPlayer = ({ videoUrl, shouldShowVideo }: UseCloudinaryPlayerProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldShowVideo && !hasError && !isScriptLoaded) {
      console.log('Loading Cloudinary video player...');
      
      // Load Cloudinary video player script
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/cloudinary-video-player@2/cld-video-player.min.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Cloudinary script loaded successfully');
        setIsScriptLoaded(true);
      };

      script.onerror = () => {
        console.warn('Failed to load Cloudinary video player script');
        setHasError(true);
      };

      document.head.appendChild(script);

      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/cloudinary-video-player@2/cld-video-player.min.css';
      document.head.appendChild(link);

      return () => {
        script.remove();
        link.remove();
      };
    }
  }, [shouldShowVideo, hasError, isScriptLoaded]);

  useEffect(() => {
    if (isScriptLoaded && containerRef.current && shouldShowVideo && !hasError) {
      console.log('Initializing Cloudinary video player...');
      
      // Initialize Cloudinary video player
      try {
        const cld = (window as any).cloudinary;
        if (cld && containerRef.current) {
          // Extract public ID from Cloudinary URL
          const publicId = videoUrl.split('/').pop()?.split('.')[0] || '';
          console.log('Video public ID:', publicId);
          
          // Clear any existing content
          containerRef.current.innerHTML = '';
          
          playerRef.current = cld.videoPlayer(containerRef.current, {
            cloudName: 'dhnkuonev',
            publicId: publicId,
            autoplay: true,
            muted: true,
            loop: true,
            controls: false,
            fluid: false,
            width: '100%',
            height: '100%',
            hideContextMenu: true,
            seekThumbnails: false,
            playsinline: true,
            poster: '',
          });

          // Handle player events
          playerRef.current.on('loadstart', () => {
            console.log('Video loading started');
          });

          playerRef.current.on('canplay', () => {
            console.log('Video can start playing');
            setIsVideoLoaded(true);
          });

          playerRef.current.on('play', () => {
            console.log('Video started playing');
          });

          playerRef.current.on('error', (error: any) => {
            console.warn('Cloudinary video player error:', error);
            setHasError(true);
          });
        }
      } catch (error) {
        console.warn('Failed to initialize Cloudinary player:', error);
        setHasError(true);
      }
    }
  }, [isScriptLoaded, shouldShowVideo, hasError, videoUrl]);

  return {
    isVideoLoaded,
    hasError,
    containerRef,
    playerRef
  };
};
