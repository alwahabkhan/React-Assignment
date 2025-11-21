import { useCallback, useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import useEmblaCarousel from 'embla-carousel-react';
import Card from './Card';

const IconicBrands = () => {
  const brands = [
    {
      name: 'Victoria\'s Secret',
      image: '/Victoria_s_Secret_Westfield_Stratford_City.jpg'
    },
    {
      name: 'H&M',
      image: '/H and M.jpg'
    },
    {
      name: 'Miniso',
      image: '/minisoo.jpg'
    },
    {
      name: 'Sephora',
      image: '/Sephora_2_1.jpg'
    },
    {
      name: 'Nike',
      image: '/NIKE_-_WMoN.jpg'
    },
    {
      name: 'Adidas',
      image: '/ADIDAS.jpg'
    },
    {
      name: 'Zara',
      image: '/zara-forum6257.jpg'
    },
    {
      name: 'Aesop',
      image: '/Aesop_Westfield_Stratford_City.jpg'
    },
    {
      name: 'Starbucks',
      image: '/Starbucks.jpg'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    }
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected % brands.length);
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, brands.length]);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', sm: 'auto', md: '100vh' },
        minHeight: { xs: 'auto', sm: 'auto', md: '100vh' },
        paddingTop: { xs: '24px', sm: '32px', md: '0' },
        paddingBottom: { xs: '40px', sm: '48px', md: '50px' },
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'space-between' }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '__Anton_8d0e64, "Anton", sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: { xs: '2.5rem', sm: '2.25rem', md: '2.5rem', lg: '3rem', xl: '52px' },
          textTransform: 'uppercase',
          paddingLeft: { xs: '16px', sm: '24px', md: '40px', lg: '90px' },
          paddingRight: { xs: '16px', sm: '24px', md: '40px' },
          textAlign: { xs: 'left', sm: 'left', md: 'left' },
          color: '#000000',
          letterSpacing: '0.02em',
          marginTop: { xs: '0', sm: '0', md: '0' },
          marginBottom: { xs: '16px', sm: '24px', md: '40px' }
        }}
      >
        ICONIC BRANDS AT WESTFIELD
      </Typography>

      <Box
        sx={{
          overflow: 'visible',
          width: '100%',
          padding: { xs: '0', md: '0', lg: '0' },
          marginBottom: { xs: '24px', sm: '32px', md: '40px' },
          '& .embla__viewport': {
            overflow: 'visible',
            width: '100%',
            paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '40px' },
            paddingRight: { xs: '16px', sm: '20px', md: '40px', lg: '40px' }
          },
          '& .embla__container': {
            display: 'flex',
            touchAction: 'pan-y pinch-zoom'
          },
          '& .embla__slide': {
            flex: '0 0 auto',
            minWidth: {
              xs: `calc((100vw - 32px) / 1.15)`,
              sm: `calc((100vw - 40px) / 1.5)`,
              md: `calc((100vw - 80px) / 2.2)`,
              lg: `calc((100vw - 80px) / 2.8)`,
              xl: `calc((100vw - 80px) / 3.5)`
            },
            maxWidth: {
              xs: `calc((100vw - 32px) / 1.15)`,
              sm: `calc((100vw - 40px) / 1.5)`,
              md: `calc((100vw - 80px) / 2.2)`,
              lg: `calc((100vw - 80px) / 2.8)`,
              xl: `calc((100vw - 80px) / 3.5)`
            },
            marginRight: { xs: '12px', sm: '15px', md: '20px', lg: '20px' }
          },
          '& .embla__container > *': {
            marginRight: { xs: '15px', sm: '15px', md: '20px', lg: '20px' },
            '&:last-child': {
              marginRight: { xs: '15px', sm: '15px', md: '20px', lg: '20px' }
            }
          }
        }}
        ref={emblaRef}
      >
        <Box className="embla__container">
          {brands.map((brand, index) => (
            <Box
              key={`${brand.name}-${index}`}
              className="embla__slide"
            >
              <Card 
                variant="brand" 
                data={brand} 
                showOverlay={false}
                showLogo={false}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '0 16px', sm: '0 24px', md: '0 40px', lg: '0 80px' },
          marginTop: { xs: '12px', sm: '24px', md: '30px' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <IconButton
            onClick={scrollPrev}
            sx={{
              width: { xs: '36px', sm: '32px' },
              height: { xs: '36px', sm: '32px' },
              borderRadius: '50%',
              backgroundColor: '#E5E5E5',
              border: '1px solid #e0e0e0',
              '&:hover': {
                backgroundColor: '#e0e0e0'
              }
            }}
          >
            <ArrowBackIos sx={{ fontSize: { xs: '18px', sm: '18px', md: '20px' }, color: '#000000' }} />
          </IconButton>

          <IconButton
            onClick={scrollNext}
            sx={{
              width: { xs: '36px', sm: '36px', md: '32px' },
              height: { xs: '36px', sm: '36px', md: '32px' },
              borderRadius: '50%',
              backgroundColor: '#E5E5E5',
              border: '1px solid #e0e0e0',
              '&:hover': {
                backgroundColor: '#e0e0e0'
              }
            }}
          >
            <ArrowForwardIos sx={{ fontSize: { xs: '18px', sm: '18px', md: '20px' }, color: '#000000' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {brands.map((_, index) => {
            const isActive = index === selectedIndex;
            return (
              <Box
                key={index}
                onClick={() => scrollTo(index)}
                sx={{
                  width: isActive ? { xs: '20px', sm: '22px', md: '24px' } : '8px',
                  height: { xs: '6px', sm: '7px', md: '8px' },
                  borderRadius: isActive ? '4px' : '50%',
                  backgroundColor: isActive ? '#000000' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: isActive ? '#000000' : '#b0b0b0'
                  }
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default IconicBrands;
