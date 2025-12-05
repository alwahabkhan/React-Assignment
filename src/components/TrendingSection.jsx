import { useCallback, useEffect, useState, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import useEmblaCarousel from 'embla-carousel-react';
import { useScroll, useTransform } from 'framer-motion';
import Card from './Card';
import { getImageUrl } from '../config/cloudinary';

const TrendingSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const showVideoCard = useTransform(scrollYProgress, (latest) => latest > 0.9);

  const trendingItems = [
    {
      image: getImageUrl('/Westfield_Days_2024_Tag-1_052_OK.jpg'),
      category: 'WESTFIELD',
      title: 'Giga Mall Days 2025: Where Future Meets Style',
      dates: '1st October 2025 - 31st October 2025'
    },
    {
      image: getImageUrl('/3-Mall-of-Scandinavia-OK.jpg'),
      category: 'WESTFIELD MALL OF SCANDINAVIA',
      title: 'Giga Mall of Scandinavia turns 10 and celebrates in style',
      dates: '7th November 2025 - 16th November 2025'
    },
    {
      image: getImageUrl('/WESTFIELD_CENTURY_CITY_TAYLOR_SWIFT_2.jpg'),
      category: 'WESTFIELD CENTURY CITY',
      title: 'Inside the Taylor Swift Experience at Giga Mall Century City',
      dates: '3rd October 2025 - 9th October 2025'
    },
    {
      image: getImageUrl('/Jok_Air_4TEMPS_CNIT_carrousel_homepage_2732x1436px.jpg'),
      category: 'WESTFIELD FORUM DES HALLES',
      title: 'Art comes to shopping centres The Louvre x Giga Mall',
      dates: '21st March 2025 - 1st November 2025'
    },
    {
      image: getImageUrl('/20241019_WestfieldDays-JoniIsraeli-053-SWR60051-retouche-OK.jpg'),
      category: 'WESTFIELD',
      title: 'Giga Mall Days 2024: Celebrating Style and Innovation',
      dates: '1st September 2024 - 30th September 2024'
    },
    {
      image: getImageUrl('/1-WL_inside-_2732_x_1436_rijsgy-OK.jpg'),
      category: 'WESTFIELD LONDON',
      title: 'Discover the Ultimate Shopping Experience at Giga Mall',
      dates: '1st January 2025 - 31st December 2025'
    },
    {
      image: getImageUrl('/2-ES---WLaMaquinista_OK.jpg'),
      category: 'WESTFIELD LA MAQUINISTA',
      title: 'Experience Spanish Style at Giga Mall La Maquinista',
      dates: '1st January 2025 - 31st December 2025'
    },
    {
      image: getImageUrl('/4-WChodov-OK.jpg'),
      category: 'WESTFIELD CHODOV',
      title: 'Explore Westfield Chodov: Your Shopping Destination',
      dates: '1st January 2025 - 31st December 2025'
    },
    {
      image: getImageUrl('/ZWestfield-WTC-OK.jpg'),
      category: 'WESTFIELD WORLD TRADE CENTER',
      title: 'Shop at the Heart of New York: Giga Mall WTC',
      dates: '1st January 2025 - 31st December 2025'
    },
    {
      image: getImageUrl('/Westfield_Shopping_City_Sud_-_Sunset_Sound_-_2025.jpg'),
      category: 'WESTFIELD SHOPPING CITY SUD',
      title: 'Sunset Sound: Music and Shopping at Giga Mall',
      dates: '15th August 2025 - 30th September 2025'
    },
    {
      image: getImageUrl('/Montage_-_Homepage_-_30sec_v11.jpg'),
      category: 'WESTFIELD',
      title: 'Giga Mall Moments: Capturing Life\'s Best Experiences',
      dates: '1st January 2025 - 31st December 2025'
    }
  ];

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

  const [shouldShowVideoCard, setShouldShowVideoCard] = useState(false);
  const [prevShouldShowVideoCard, setPrevShouldShowVideoCard] = useState(false);

  useEffect(() => {
    const unsubscribe = showVideoCard.on('change', (latest) => {
      setShouldShowVideoCard(latest);
    });
    const initialValue = showVideoCard.get();
    setShouldShowVideoCard(initialValue);
    return () => unsubscribe();
  }, [showVideoCard]);

  useEffect(() => {
    if (shouldShowVideoCard && !prevShouldShowVideoCard && emblaApi) {
      requestAnimationFrame(() => {
        emblaApi.scrollTo(0, false);
        setSelectedIndex(0);
      });
    }
    setPrevShouldShowVideoCard(shouldShowVideoCard);
  }, [shouldShowVideoCard, prevShouldShowVideoCard, emblaApi]);
  const displayItems = shouldShowVideoCard 
    ? [
        {
          video: getImageUrl('/gigamallvideo.mp4'),
          isVideo: true
        },
        ...trendingItems
      ]
    : trendingItems;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected % displayItems.length);
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, displayItems.length]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: '100%',
        height: { xs: 'auto', sm: '120vh' },
        minHeight: { xs: 'auto', sm: '120vh' },
        paddingBottom: { xs: '40px', sm: '0' },
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
          textTransform: 'uppercase',
          textAlign: { xs: 'center', md: 'left' },
          marginBottom: { xs: '32px', sm: '40px', md: '30px', lg: '100px' },
          marginTop: { xs: '20px', sm: '24px', md: '40px' },
          paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '130px' },
          paddingRight: { xs: '16px', sm: '20px', md: '40px' },
          // color: '#000000',
          color: '#D19F3B',
          // letterSpacing: '0.02em'
        }}
      >
        TRENDINGS AT GIGA MALL
      </Typography>

      <Box
        sx={{
          overflow: 'visible',
          width: '100%',
          padding: { xs: '0', md: '0', lg: '0' },
          marginBottom: '40px',
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
            marginRight: { xs: '15px', md: '20px', lg: '20px' },
            '&:last-child': {
              marginRight: { xs: '15px', md: '20px', lg: '20px' }
            }
          }
        }}
        ref={emblaRef}
      >
        <Box className="embla__container">
          {displayItems.map((item, index) => (
            <Box
              key={`${shouldShowVideoCard ? 'with-video' : 'no-video'}-${index}`}
              className="embla__slide"
            >
              <Card 
                variant="trending" 
                data={item} 
                isHeroVideo={item.isVideo && index === 0}
                showOverlay={true}
                showLogo={true}
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
          padding: { xs: '0 16px', sm: '0 20px', md: '0 40px', lg: '0 130px' },
          marginTop: { xs: '24px', sm: '32px', md: '40px' }
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
            <ArrowBackIos sx={{ fontSize: { xs: '18px', sm: '16px', md: '20px' }, color: '#000000' }} />
          </IconButton>

          <IconButton
            onClick={scrollNext}
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
            <ArrowForwardIos sx={{ fontSize: { xs: '18px', sm: '16px', md: '20px' }, color: '#000000' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {displayItems.map((_, index) => {
            const isActive = index === selectedIndex;
            return (
              <Box
                key={index}
                onClick={() => scrollTo(index)}
                sx={{
                  width: isActive ? { xs: '20px', sm: '24px' } : '8px',
                  height: { xs: '6px', sm: '8px' },
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

export default TrendingSection;
