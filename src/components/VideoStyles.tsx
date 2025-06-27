
const VideoStyles = () => {
  return (
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
  );
};

export default VideoStyles;
