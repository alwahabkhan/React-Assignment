import { Box } from '@mui/material';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const LandingVideo = () => {
  const [videoError, setVideoError] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 15,
    restDelta: 0.001
  });
  const scale = useTransform(
    smoothProgress, 
    [0, 0.9, 0.905, 0.91, 0.92, 0.94, 0.96, 0.97, 0.98, 0.99, 1], 
    [1, 1, 0.9, 0.8, 0.65, 0.5, 0.35, 0.25, 0.2, 0.17, 0.15]
  );

  const opacity = useTransform(
    smoothProgress, 
    [0, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1], 
    [1, 1, 0.98, 0.95, 0.9, 0.85, 0.75, 0.65, 0.5, 0.3, 0.15, 0]
  );
  const y = useTransform(
    smoothProgress, 
    [0, 0.9, 0.905, 0.91, 0.92, 0.94, 0.96, 0.97, 0.98, 0.99, 1], 
    [0, 0, 50, 120, 200, 320, 480, 580, 680, 750, 800]
  );

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <Box
      ref={containerRef}
      id="landing-video-section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        overflow: 'visible',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {!videoError ? (
        <motion.video
          layoutId="heroVideo"
          layout
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
          transition={{
            layout: {
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1]
            },
            default: {
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100,
            scale,
            opacity,
            y,
            willChange: 'transform, opacity',
            pointerEvents: 'none'
          }}
        >
          <source src="/6090546-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      ) : (
        <Box
          sx={{
            color: '#000000',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <p>Video file not found. Please add a video file to the /public folder.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.7 }}>
            Supported formats: video.mp4, video.webm, or video.mov
          </p>
        </Box>
      )}
    </Box>
  );
};

export default LandingVideo;

