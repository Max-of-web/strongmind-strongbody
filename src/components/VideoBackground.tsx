
import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoOverlay from './VideoOverlay';
import VideoStyles from './VideoStyles';

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImage: string;
  children: React.ReactNode;
}

const VideoBackground = ({ videoUrl, fallbackImage, children }: VideoBackgroundProps) => {
  const [shouldShowVideo, setShouldShowVideo] = useState(true);

  useEffect(() => {
    // Always show video, remove mobile and reduced motion checks
    setShouldShowVideo(true);
  }, []);

  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* Background Layer - Only Video */}
      <div className="absolute inset-0">
        {/* Cloudinary Video Background */}
        <VideoPlayer videoUrl={videoUrl} shouldShowVideo={shouldShowVideo} />
        
        {/* Gradient Overlay */}
        <VideoOverlay />
      </div>

      {/* Content */}
      <div className="relative z-10" style={{ zIndex: 10 }}>
        {children}
      </div>

      {/* Custom CSS for Cloudinary player */}
      <VideoStyles />
    </section>
  );
};

export default VideoBackground;
