
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
    console.log('VideoBackground mounted, showing video');
    setShouldShowVideo(true);
  }, []);

  return (
    <section className="hero-section relative min-h-screen overflow-hidden bg-slate-900">
      {/* Background Layer - Video */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <VideoPlayer videoUrl={videoUrl} shouldShowVideo={shouldShowVideo} />
        <VideoOverlay />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>

      <VideoStyles />
    </section>
  );
};

export default VideoBackground;
