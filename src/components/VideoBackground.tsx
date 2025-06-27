
import { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImage: string;
  children: React.ReactNode;
}

const VideoBackground = ({ videoUrl, fallbackImage, children }: VideoBackgroundProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if device is mobile/tablet (typically slower connections)
    const isMobile = window.innerWidth <= 768;
    
    // Only show video if user doesn't prefer reduced motion and it's not a mobile device
    if (!prefersReducedMotion && !isMobile) {
      setShouldShowVideo(true);
    }
  }, []);

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

  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {shouldShowVideo && !hasError ? (
          <>
            {/* Cloudinary Video Background */}
            <div
              ref={containerRef}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                zIndex: 1,
              }}
            />
            
            {/* Fallback image shown while video loads or if video fails */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                backgroundImage: `url('${fallbackImage}')`,
                zIndex: 2
              }}
            />
          </>
        ) : (
          /* Static image for mobile, reduced motion preference, or video error */
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${fallbackImage}')`,
              zIndex: 1
            }}
          />
        )}
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900/90 dark:from-slate-950/92 dark:via-slate-950/97 dark:to-slate-950/92"
          style={{ zIndex: 3 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10" style={{ zIndex: 10 }}>
        {children}
      </div>

      {/* Custom CSS for Cloudinary player */}
      <style>{`
        .cld-video-player {
          width: 100% !important;
          height: 100% !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        
        .cld-video-player video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        
        .cld-video-player .cld-controls {
          display: none !important;
        }
        
        .cld-video-player .vjs-poster {
          display: none !important;
        }
        
        .cld-video-player .vjs-loading-spinner {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default VideoBackground;
