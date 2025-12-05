
import { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { getImageUrl } from '../config/cloudinary';

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolledPast100vh, setHasScrolledPast100vh] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const images = [
    { src: getImageUrl('/20241019_WestfieldDays-JoniIsraeli-053-SWR60051-retouche-OK.jpg'), position: 'top-center' },
    { src: getImageUrl('/Westfield_Days_2024_Tag-1_052_OK.jpg'), position: 'top-right' },
    { src: getImageUrl('/DSC05412Food_OK_1.jpg'), position: 'middle-right' },
    { src: getImageUrl('/c_Dragan_Dok_WF_DZ_0811-6445.jpg'), position: 'bottom-right' },
    { src: getImageUrl('/ASC_2024_3.jpg'), position: 'bottom-center' },
    { src: getImageUrl('/EU_US_-_Good_Festival.jpg'), position: 'middle-left' },
    { src: getImageUrl('/WESTFIELD_CENTURY_CITY_TAYLOR_SWIFT_2.jpg'), position: 'top-left' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      const inView = sectionTop <= 0 && sectionBottom > windowHeight;
      setIsInView(inView);

      const scrolledPastThreshold = sectionTop <= -windowHeight;
      setHasScrolledPast100vh(scrolledPastThreshold);

      let progress = 0;
      
      if (inView) {
        const scrolledPast = Math.abs(sectionTop);
        const animationDistance = windowHeight * 3;
        progress = Math.min(Math.max(scrolledPast / animationDistance, 0), 1);
        
        if (progress >= 1) {
          setAnimationCompleted(true);
        }
      } else {
        progress = 0;
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getImagePosition = (position, progress, index) => {
    const rawProgress = Math.max(0, Math.min(1, progress));
    const imageProgress = rawProgress;
    
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
    
    const distance = Math.max(viewportWidth, viewportHeight) * 0.6;
    
    let startX = 0;
    let startY = 0;
    if (position === 'top-center') {
      startY = -distance;
    } else if (position === 'top-right') {
      startX = distance * 0.7;
      startY = -distance * 0.7;
    } else if (position === 'middle-right') {
      startX = distance;
    } else if (position === 'bottom-right') {
      startX = distance * 0.7;
      startY = distance * 0.7;
    } else if (position === 'bottom-center') {
      startY = distance;
    } else if (position === 'middle-left') {
      startX = -distance;
    } else if (position === 'top-left') {
      startX = -distance * 0.7;
      startY = -distance * 0.7;
    }
    
    const finalX = 0;
    const finalY = 0;
    
    const currentX = startX + (finalX - startX) * imageProgress;
    const currentY = startY + (finalY - startY) * imageProgress;
    
    const scale = 1;
    
    return {
      top: '50%',
      left: '50%',
      transform: `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) scale(${scale})`,
      transition: 'none'
    };
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        width: '95vw',
        maxWidth: '100vw',
        height: '400vh',
        minHeight: '400vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: { xs: '40px 20px', md: '80px 40px', lg: '0px 40px' },
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${Math.max(0.3, 1 - scrollProgress * 0.7)})`,
          zIndex: 1,
          textAlign: 'center',
          pointerEvents: 'none',
          opacity: isInView ? 1 : 0,
          visibility: isInView ? 'visible' : 'hidden',
          width: '100%',
          maxWidth: '100vw'
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '__Anton_8d0e64, "Anton", sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem', lg: '5.5rem' },
            lineHeight: { xs: '1.2', md: '1.1' },
            textTransform: 'uppercase',
            // color: '#000000',
            color: '#D19F3B',
            letterSpacing: '0.02em',
            whiteSpace: 'pre-line'
          }}
        >
          {`4M VISITORS,
240 PLUS BRANDS CENTRES,
A WORLD OF CHOICES,
1 UNFORGETTABLE
EXPERIENCE`}
        </Typography>
      </Box>

      {(isInView || animationCompleted) && images.map((image, index) => {
        const position = getImagePosition(image.position, scrollProgress, index);
        return (
          <Box
            key={index}
            sx={{
              position: 'fixed',
              ...position,
              width: { xs: '150px', sm: '220px', md: '280px', lg: '200px' },
              height: { xs: '150px', sm: '220px', md: '280px', lg: '200px' },
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'transparent',
              boxShadow: scrollProgress > 0.5 ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
              zIndex: 20 + index,
              pointerEvents: 'none',
              filter: 'none',
              backdropFilter: 'none',
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: 1,
                filter: 'none',
                imageRendering: 'auto',
                WebkitBackfaceVisibility: 'visible',
                backfaceVisibility: 'visible',
                transform: 'translateZ(0)',
                willChange: 'transform'
              }
            }}
          >
            <img src={image.src} alt={`Experience ${index + 1}`} onError={(e) => {
              console.error(`Image ${index + 1} failed to load:`, image.src);
              e.target.style.display = 'none';
            }} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ExperienceSection;