import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Accessibility, LocationOn } from '@mui/icons-material';

const Hero = () => {
  const slides = [
    {
      image: '/4-WChodov-OK.jpg',
      location: 'Westfield Chodov, CZ Republic'
    },
    {
      image: '/1-WL_inside-_2732_x_1436_rijsgy-OK.jpg',
      location: 'Westfield London, UK'
    },
    {
      image: '/2-ES---WLaMaquinista_OK.jpg',
      location: 'Westfield La Maquinista, Spain'
    },
    {
      image: '/3-Mall-of-Scandinavia-OK.jpg',
      location: 'Mall of Scandinavia, Sweden'
    },
    {
      image: '/ZWestfield-WTC-OK.jpg',
      location: 'Westfield World Trade Center, USA'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: { xs: '500px', sm: '550px', md: '600px' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 1
          }}
        />
      ))}

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)',
          zIndex: 2
        }}
      />

      <Typography
        variant="h1"
        sx={{
          position: 'relative',
          zIndex: 3,
          fontFamily: '"Anton", sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          color: 'rgb(255, 255, 255)',
          fontSize: { xs: '1.5rem', sm: '2.5rem', md: '4rem', lg: '5.5rem', xl: '88px' },
          lineHeight: { xs: '1.2', sm: '1.15', md: '1.1', lg: '97px' },
          textAlign: 'center',
          textTransform: 'uppercase',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          padding: { xs: '0 16px', sm: '0 20px', md: '0 40px' },
          width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' },
          maxWidth: '900px',
        }}
      >
        THERE'S A WESTFIELD WAITING FOR YOU!
      </Typography>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '12px 16px', md: '16px 24px' }
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '0 12px', sm: '0 16px', md: '0 24px' }
          }}
        >
          <Box
            sx={{
              backgroundColor: '#000000',
              borderRadius: { xs: '16px', md: '20px' },
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              padding: { xs: '6px', sm: '8px', md: '10px' },
              paddingRight: { xs: isTransitioning ? '6px' : '12px', sm: isTransitioning ? '8px' : '16px', md: isTransitioning ? '10px' : '20px' },
              maxWidth: { xs: '95%', sm: '90%', md: '500px' }
            }}
          >
            <LocationOn
              sx={{
                color: '#ffffff',
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                opacity: 1,
                transition: 'transform 0.6s ease-in-out',
                transform: isTransitioning ? 'scale(1.2)' : 'scale(1)',
                display: 'flex',
                flexShrink: 0,
                marginRight: { xs: '6px', sm: '8px' }
              }}
            />
            <Box
              sx={{
                overflow: 'hidden',
                maxWidth: isTransitioning ? 0 : { xs: '250px', sm: '350px', md: '500px' },
                opacity: isTransitioning ? 0 : 1,
                transition: 'max-width 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in-out',
                transitionDelay: isTransitioning ? '0s' : '0.5s',
                whiteSpace: 'nowrap'
              }}
            >
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
                  fontWeight: 400,
                  textAlign: 'left',
                  whiteSpace: 'nowrap'
                }}
              >
                {slides[currentIndex].location}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

