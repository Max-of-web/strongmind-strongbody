
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
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.warn('Video failed to load, falling back to image');
    setHasError(true);
  };

  return (
    <section className="hero-section relative">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {shouldShowVideo && !hasError ? (
          <>
            {/* Video Background */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ zIndex: -2 }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Fallback image shown while video loads or if video fails */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                backgroundImage: `url('${fallbackImage}')`,
                zIndex: -1
              }}
            />
          </>
        ) : (
          /* Static image for mobile, reduced motion preference, or video error */
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('${fallbackImage}')`,
              zIndex: -1
            }}
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900/90 dark:from-slate-950/92 dark:via-slate-950/97 dark:to-slate-950/92" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default VideoBackground;
