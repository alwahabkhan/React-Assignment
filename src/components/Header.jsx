import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { Public, AccountCircle } from '@mui/icons-material';

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
        maxWidth: '100%',
        margin: 0,
        padding: 0,
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
        padding: { xs: '0 16px', sm: '0 20px', md: '0 24px' },
        minHeight: { xs: '60px !important', md: '80px !important' }
      }}>
        <Box 
          component="img"
          src="/logo-westfield.svg"
          alt="Westfield"
          sx={{ 
            height: { xs: '28px', sm: '32px', md: '40px' },
            cursor: 'pointer',
            userSelect: 'none',
            flexShrink: 0
          }}
        />

        {isSmallScreen ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 }, flexShrink: 0 }}>
            <IconButton
              sx={{
                backgroundColor: '#d32f2f',
                color: '#ffffff',
                borderRadius: '50%',
                padding: { xs: '10px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { xs: '44px' },
                minHeight: { xs: '44px' },
                width: { xs: '44px' },
                height: { xs: '44px' },
                '&:hover': {
                  backgroundColor: '#b71c1c',
                },
              }}
            >
              <Public sx={{ 
                fontSize: { xs: '22px' },
                display: 'block'
              }} />
            </IconButton>

            <IconButton
              sx={{
                border: '1px solid #000000',
                borderRadius: { xs: '28px' },
                padding: { xs: '8px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { xs: '44px' },
                minHeight: { xs: '44px' },
                width: { xs: '44px' },
                height: { xs: '44px' },
                backgroundColor: 'transparent',
                visibility: 'visible',
                opacity: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <AccountCircle sx={{ 
                color: '#000000', 
                fontSize: { xs: '24px' },
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
                backgroundColor: '#d32f2f',
                color: '#ffffff',
                borderRadius: '28px',
                padding: { sm: '10px 16px', md: '10px 20px' },
                textTransform: 'none',
                fontSize: { sm: '14px', md: '16px' },
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#b71c1c',
                },
              }}
            >
              Find your Westfield centre
            </Button>

            <IconButton
              sx={{
                border: shouldBeTransparent ? '1px solid #ffffff' : '1px solid #000000',
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
                color: shouldBeTransparent ? '#ffffff' : '#000000', 
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

