import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { getImageUrl } from '../config/cloudinary';

const featuredItems = [
  {
    image: getImageUrl('/Sephora_2_1.jpg'),
    name: 'Sephora',
    description: 'The ultimate beauty playground featuring makeup, skincare, and fragrance icons.'
  },
  {
    image: getImageUrl('/NIKE_-_WMoN.jpg'),
    name: 'Nike',
    description: 'Performance meets style with the latest sneakers, sportswear, and innovations.'
  },
  {
    image: getImageUrl('/ADIDAS.jpg'),
    name: 'Adidas',
    description: 'Sport-inspired streetwear and footwear designed for game changers.'
  },
  {
    image: getImageUrl('/zara-forum6257.jpg'),
    name: 'Zara',
    description: 'Runway-inspired collections, refreshed weekly, for modern everyday style.'
  },
  {
    image: getImageUrl('/Aesop_Westfield_Stratford_City.jpg'),
    name: 'Aesop',
    description: 'Thoughtfully crafted skin, hair, and body care with a signature sensorial touch.'
  },
  {
    image: getImageUrl('/Starbucks.jpg'),
    name: 'Starbucks',
    description: 'Your favourite handcrafted beverages, from classic coffees to seasonal specials.'
  },
  {
    name: 'Brand 1',
    image: getImageUrl('/picture1.jpg'),
    description: 'Discover exceptional quality and style at Brand 1.'
  },
  {
    name: 'Brand 23',
    image: getImageUrl('/23.jpg'),
    description: 'Experience premium products and innovative designs.'
  },

  {
    name: 'Brand 346',
    image: getImageUrl('/346.jpg'),
    description: 'Elevate your lifestyle with our curated collection.'
  },
  {
    name: 'Brand 365',
    image: getImageUrl('/365.jpg'),
    description: 'Style that works for you, every day of the year.'
  },
  {
    name: 'Brand 584',
    image: getImageUrl('/584.jpg'),
    description: 'Contemporary designs for the modern shopper.'
  },
  {
    name: 'Brand 745',
    image: getImageUrl('/745.jpg'),
    description: 'Quality craftsmanship meets timeless appeal.'
  },
  {
    name: 'Brand 4631',
    image: getImageUrl('/4631.jpg'),
    description: 'Innovative products that redefine your experience.'
  },
  {
    name: 'Brand 6485',
    image: getImageUrl('/6485.jpg'),
    description: 'Discover trends that set you apart from the rest.'
  }
];

const textFadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const logoFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-8px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const INTERVAL_MS = 5000;

const Featured2Section = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  const total = featuredItems.length;
  const centerIndex = currentIndex;
  const prevIndex = (centerIndex - 1 + total) % total;
  const nextIndex = (centerIndex + 1) % total;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        py: { xs: 4, sm: 5, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: { xs: 3, sm: 4 }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem', lg: '2.6rem' },
          textTransform: 'uppercase',
          textAlign: { xs: 'center', md: 'left' },
          paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '130px' },
          paddingRight: { xs: '16px', sm: '20px', md: '40px' },
          color: '#D19F3B',
          paddingBottom: { xs: 2, sm: 3, md: 4, lg: 5 }
        }}
      >
        FEATURED SECTION
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1, sm: 2, md: 3 },
          px: { xs: 1, sm: 4, md: 6, lg: 10 }
        }}
      >
        {/* Left peek - Now visible on all screens */}
        <Box
          sx={{
            display: 'block',
            flex: '0 0 auto',
            maxWidth: { xs: '12%', sm: '18%', md: '20%' },
            borderRadius: { xs: '8px', sm: '12px' },
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            opacity: 0.5
          }}
        >
          <Box
            component="img"
            src={featuredItems[prevIndex].image}
            alt="Previous featured brand"
            sx={{
              width: '100%',
              height: { xs: 400, sm: 150, md: 190, lg: 580 },
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </Box>

        {/* Center main image */}
        <Box
          sx={{
            flex: '0 1 auto',
            minWidth: { xs: '70%', sm: '80%', md: '80%', lg: '95%' },
            maxWidth: { xs: '70%', sm: '80%' },
            borderRadius: { xs: '12px', sm: '18px' },
            overflow: 'hidden',
            boxShadow: { xs: '0 6px 20px rgba(0,0,0,0.2)', sm: '0 10px 30px rgba(0,0,0,0.25)' },
            backgroundColor: '#f9f9f9',
            position: 'relative',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            '&:hover': {
              transform: { xs: 'none', sm: 'translateY(-6px)' },
              boxShadow: { xs: '0 6px 20px rgba(0,0,0,0.2)', sm: '0 16px 36px rgba(0,0,0,0.3)' }
            }
          }}
        >
          <Box
            component="img"
            src={featuredItems[centerIndex].image}
            alt={featuredItems[centerIndex].name}
            sx={{
              width: '100%',
              height: { xs: 480, sm: 480, md: 480, lg: 640 },
              objectFit: 'cover',
              display: 'block'
            }}
          />

          {/* Name and description overlay */}
          <Box
            key={`text-${currentIndex}`}
            sx={{
              pointerEvents: 'none',
              p: { xs: 2, sm: 2.5, md: 3.5 },
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 80%)',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              color: '#ffffff',
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              animation: `${textFadeUp} 0.6s ease`
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: '__Anton_8d0e64, "Anton", sans-serif',
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: { xs: 0.3, sm: 0.5 }
              }}
            >
              {featuredItems[centerIndex].name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                maxWidth: { xs: '95%', sm: '80%' },
                lineHeight: { xs: 1.4, sm: 1.5 }
              }}
            >
              {featuredItems[centerIndex].description}
            </Typography>
          </Box>

          {/* Giga Mall logo inside main picture */}
          <Box
            key={`logo-${currentIndex}`}
            sx={{
              position: 'absolute',
              top: { xs: 10, sm: 12, md: 14 },
              right: { xs: 10, sm: 16, md: 24 },
              zIndex: 5,
              p: { xs: 0.5, sm: 0.75 },
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              opacity: 1,
              transform: 'translateY(0) scale(1)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              animation: `${logoFadeIn} 0.6s ease`
            }}
          >
            <Box
              component="img"
              src={getImageUrl("/Giga Mall_.png")}
              alt="Giga Mall"
              sx={{
                width: { xs: 36, sm: 48, md: 56, lg: 84 },
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>

        {/* Right peek - Now visible on all screens */}
        <Box
          sx={{
            display: 'block',
            flex: '0 0 auto',
            maxWidth: { xs: '12%', sm: '18%', md: '20%' },
            borderRadius: { xs: '8px', sm: '12px' },
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            opacity: 0.5
          }}
        >
          <Box
            component="img"
            src={featuredItems[nextIndex].image}
            alt="Next featured brand"
            sx={{
              width: '100%',
              height: { xs: 400, sm: 150, md: 190, lg: 580 },
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Featured2Section;