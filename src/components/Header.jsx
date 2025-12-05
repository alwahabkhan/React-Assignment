import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { Public, AccountCircle } from '@mui/icons-material';
import { getImageUrl } from '../config/cloudinary';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (isSmallScreen) {
        setIsTransparent(true);
      } else {
        setIsTransparent(scrollY === 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSmallScreen]);

  const shouldBeTransparent = isSmallScreen ? true : isTransparent;

  return (
    <AppBar 
      position="fixed"
      top={0}
      sx={{ 
        position: 'fixed !important',
        top: '0 !important',
        left: 0,
        right: 0,
        backgroundColor: shouldBeTransparent ? 'transparent' : '#ffffff',
        boxShadow: shouldBeTransparent ? 'none' : (isSmallScreen ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'),
        borderBottom: 'none',
        zIndex: '9999 !important',
        width: '100%',
        maxWidth: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        transition: isSmallScreen ? 'none' : 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        backdropFilter: shouldBeTransparent ? 'none' : 'blur(0px)',
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        willChange: 'transform'
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        padding: shouldBeTransparent 
          ? { xs: '40px 12px 0 12px', sm: '48px 16px 0 16px', md: '56px 24px 0 24px' }
          : { xs: '0 12px', sm: '0 16px', md: '0 24px' },
        minHeight: { xs: '60px !important', md: '80px !important' },
        transition: 'padding 0.3s ease-in-out',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}>
        {/* Show logo on small screens always, on larger screens only when white background */}
        {(isSmallScreen || !shouldBeTransparent) && (
          <Box 
            component="img"
            src={getImageUrl('/Giga Mall_.png')}
            alt="Giga Mall"
            sx={{ 
              height: { xs: '36px', sm: '44px', md: '56px', lg: '60px' },
              width: { xs: 'auto', sm: 'auto', md: 'auto' },
              maxWidth: { xs: '120px', sm: '140px', md: '180px' },
              cursor: 'pointer',
              userSelect: 'none',
              flexShrink: 1,
              transition: 'opacity 0.3s ease-in-out',
              opacity: 1,
              objectFit: 'contain'
            }}
          />
        )}

        {/* Empty box to maintain spacing when logo is hidden (only on large screens when transparent) */}
        {!isSmallScreen && shouldBeTransparent && (
          <Box sx={{ flexShrink: 0 }} />
        )}

        {isSmallScreen ? (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1, sm: 1.5 }, 
            flexShrink: 0,
            minWidth: 0
          }}>
            <IconButton
              sx={{
                backgroundColor: '#D19F3B',
                color: '#ffffff',
                borderRadius: '50%',
                padding: { xs: '8px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { xs: '40px' },
                minHeight: { xs: '40px' },
                width: { xs: '40px' },
                height: { xs: '40px' },
                '&:hover': {
                  backgroundColor: '#D19F3B',
                },
              }}
            >
              <Public sx={{ 
                fontSize: { xs: '20px' },
                display: 'block'
              }} />
            </IconButton>

            <IconButton
              sx={{
                border: '1px solid #D19F3B',
                borderRadius: { xs: '28px' },
                padding: { xs: '6px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { xs: '40px' },
                minHeight: { xs: '40px' },
                width: { xs: '40px' },
                height: { xs: '40px' },
                backgroundColor: 'transparent',
                visibility: 'visible',
                opacity: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <AccountCircle sx={{ 
                color: '#D19F3B', 
                fontSize: { xs: '22px' },
                display: 'block',
                visibility: 'visible',
                opacity: 1
              }} />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { sm: 1.5, md: 2 }, flexShrink: 0 }}>
            <Button
              variant="contained"
              endIcon={<Public />}
              sx={{
                backgroundColor: '#D19F3B',
                color: '#ffffff',
                borderRadius: '28px',
                padding: { sm: '10px 16px', md: '10px 20px' },
                textTransform: 'none',
                fontSize: { sm: '14px', md: '16px' },
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#b5832f',
                },
              }}
            >
              Find your Favourite Brand at Giga Mall
            </Button>

            <IconButton
              sx={{
                border: shouldBeTransparent ? '1px solid #D19F3B' : '1px solid #D19F3B',
                borderRadius: '28px',
                padding: { sm: '8px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { sm: '40px' },
                minHeight: { sm: '40px' },
                '&:hover': {
                  backgroundColor: shouldBeTransparent ? 'rgba(255,255,255,0.1)' : '#f5f5f5',
                },
              }}
            >
              <AccountCircle sx={{ 
                color: shouldBeTransparent ? '#D19F3B' : '#D19F3B', 
                fontSize: { sm: '26px', md: '28px' },
                display: 'block'
              }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;