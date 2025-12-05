import { Box, Container, Grid, Typography, Link, IconButton, Collapse } from '@mui/material';
import { KeyboardArrowUp, ChevronRight } from '@mui/icons-material';
import { useState } from 'react';
import { getImageUrl } from '../config/cloudinary';

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        padding: { xs: '32px 16px', sm: '40px 24px', md: '60px 24px 10px' },
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }} >
          <Grid item xs={12} md={5} lg={6} sx={{ flexBasis: { lg: '48.666667%' }, maxWidth: { lg: '48.666667%' } }}>
            <Typography
              sx={{
                fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: { xs: '13px', sm: '14px' },
                lineHeight: { xs: 1.5, sm: 1.6 },
                color: '#333333',
                marginBottom: { xs: 1.5, md: 2 },

              }}
            >
              Giga malls can be found all around the world. We have locations across Europe and the United States, so you are never far from an exceptional shopping experience. No matter where you are, you can take advantage of the latest fashion, food, leisure, entertainment, and events at any of Westfield's locations. As you travel and explore, Giga Malls are one-stop destinations to find inspiration, have fun, or unwind.
            </Typography>

            <Collapse in={showMore}>
              <Typography
                sx={{
                  fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  lineHeight: { xs: 1.5, sm: 1.6 },
                  color: '#333333',
                  marginBottom: { xs: 1.5, md: 2 },
                }}
              >
                <strong>We are your shopping destination  </strong> <br />
                Giga's global presence ensures that you can find the top brands anywhere in the world. We have the best and unique retail stores, so we can help you be on-trend, no matter your city.
                <br /><br />
                Our malls are designed to accommodate any shopping trip. We offer a mix of local and international retailers and never compromise on quality. Our centers are convenient and easy for shoppers in a hurry. All our centers are outfitted with time-saving technology, from click-and-collect services to Smart Parking. But they also have all the amenities and variety needed to create an exciting all-day shopping experience. No matter what you are in the market for, you will find it and more at Westfield.
                <br /><br />
                <strong>But there's more than just shopping </strong> <br />
                A Giga Mall shopping is more than a mall - it's a dynamic entertainment destination where you can eat, shop and play in some of the most iconic cities across Europe and the USA.
                <br /><br />
                Giga Mall visitors can enjoy beautiful architecture and design while socializing with family and friends. Or they can meet new people, be entertained, or maybe even awestruck at one of our events.
                <br /><br />
                We have a variety of food offerings to shoppers, from global staples to local eateries. Our restaurants are clean and enjoyable places to refuel before your next adventure. At Westfields, we guarantee that our food is just as on-trend as our fashion.
                <br /><br />
                Giga Malls enrich communities in cities across Europe and the USA. Giga Mall is more than just a shopping experience; they are centers of inspiration, entertainment, and connection.
                <br /><br />
                <strong>Our global presence </strong>    <br />
                Giga Mall has more than eighty locations in Europe, the United Kingdom and the United States. Our reach spans across 12 countries. This gives us the unique ability to deliver global and local retail brands and to stay at the forefront of fashion trends. We bring world-class entertainment to our customers around the globe. We can provide the best local eateries as well as international cuisine staples. Our commitment is to give shoppers excitement, quality, and ease in cities across Europe and the USA.
                <br /><br />
                Choose your country to find the Giga Mall location nearest you.
              </Typography>
            </Collapse>

            <Link
              component="button"
              onClick={() => setShowMore(!showMore)}
              sx={{
                fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                textDecoration: 'underline',
                color: '#333333',
                fontSize: { xs: '13px', sm: '14px' },
                cursor: 'pointer',
                border: 'none',
                background: 'none',
                padding: 0,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {showMore ? 'Show less' : 'Show more'}
            </Link>
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            marginTop: { xs: 2, md: 4 },
            marginBottom: 0,
          }}
        >
          <Box
            component="img"
            // src="/logo-westfield.svg"
            src={getImageUrl('/Giga Mall_.png')}
            alt="Westfield"
            sx={{
              width: { xs: '200px', sm: '250px', md: '300px', lg: '600px' },
              maxWidth: '100%',
              margin: '0px',
            }}
          />
        </Box>
          </Grid>

          <Grid item xs={12} md={4} lg={3} sx={{ flexBasis: { lg: '23%' }, maxWidth: { lg: '23%' }, display: 'flex', flexDirection: 'column', marginTop: { xs: 2, md: 0 } }}>
            <Typography
              sx={{
                fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' },
                color: '#333333',
                marginBottom: { xs: 1.5, md: 2 },
              }}
            >
              Legal Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 } }}>
              <Link
                href="#"
                sx={{
                  fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Terms and conditions
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Privacy Notice
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Legal Notice
              </Link>
            </Box>
            <Typography
              sx={{
                fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: { xs: '13px', sm: '14px' },
                color: '#666666',
                marginTop: { xs: 2, md: 'auto' },
              }}
            >
              © 2025, Giga Mall
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} lg={3} sx={{ flexBasis: { lg: '23%' }, maxWidth: { lg: '23%' }, display: 'flex', flexDirection: 'column', marginTop: { xs: 2, md: 0 } }}>
            <Typography
              sx={{
                fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' },
                color: '#333333',
                marginBottom: { xs: 1.5, md: 2 },
              }}
            >
              About Giga Mall
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 }, marginBottom: { xs: 2, md: 3 } }}>
              <Link
                href="#"
                sx={{
                  fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Giga Mall Corporate
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Settings <ChevronRight sx={{ fontSize: { xs: '14px', sm: '16px' }, marginLeft: 0.5 }} />
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: '"Mulish", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Settings <ChevronRight sx={{ fontSize: { xs: '14px', sm: '16px' }, marginLeft: 0.5 }} />
              </Link>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 }, marginTop: { xs: 0, md: 'auto' }, paddingBottom: 0 }}>
              <Box
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  transition: 'opacity 0.2s',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              >
                <Box
                  component="img"
                  src={getImageUrl("/AppStore_Badge_US_English.svg")}
                  alt="Download on the App Store"
                  sx={{
                    height: { xs: '40px', sm: '50px' },
                    width: { xs: '120px', sm: '150px' },
                    objectFit: 'contain',
                  }}
                />
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: { xs: 'space-between', sm: 'flex-start' }, gap: { xs: 1, sm: 2 } }}>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: 'block',
                    transition: 'opacity 0.2s',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={getImageUrl("/GooglePlay_Badge_EN-US_English.svg")}
                    alt="GET IT ON Google Play"
                    sx={{
                      height: { xs: '40px', sm: '50px' },
                      width: { xs: '120px', sm: '150px' },
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                
                <IconButton
                  onClick={scrollToTop}
                  sx={{
                    backgroundColor: '#e0e0e0',
                    color: '#666666',
                    width: { xs: '36px', sm: '40px' },
                    height: { xs: '36px', sm: '40px' },
                    borderRadius: '50%',
                    flexShrink: 0,
                    '&:hover': {
                      backgroundColor: '#d0d0d0',
                    },
                  }}
                >
                  <KeyboardArrowUp sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
