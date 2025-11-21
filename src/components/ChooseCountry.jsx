import { Box, Typography } from '@mui/material';

const ChooseCountry = () => {
  const countries = [
    { name: 'Austria', flag: '/austria.svg' },
    { name: 'Czech Republic', flag: '/czech-republic.svg' },
    { name: 'Denmark', flag: '/denmark.svg' },
    { name: 'France', flag: '/france.svg' },
    { name: 'Germany', flag: '/germany.svg' },
    { name: 'Netherlands', flag: '/netherlands.svg' },
    { name: 'Poland', flag: '/poland.svg' },
    { name: 'Spain', flag: '/spain.svg' },
    { name: 'Sweden', flag: '/sweden.svg' },
    { name: 'United Kingdom', flag: '/united-kingdom.svg' },
    { name: 'United States', flag: '/united-states.svg' }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        minHeight: '60vh',
        padding: { xs: '60px 20px', md: '80px 40px', lg: '0px 80px' },
        paddingBottom: { xs: '80px', md: '100px', lg: '200px' },
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '__Anton_8d0e64, "Anton", sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: { xs: '32px', sm: '40px', md: '60px' },
          color: '#000000',
          letterSpacing: '0.02em',
          padding: { xs: '0 16px', sm: '0 20px' }
        }}
      >
        Choose your country
      </Typography>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex' },
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: { xs: 'nowrap', sm: 'wrap' },
          justifyContent: { xs: 'flex-start', sm: 'center' },
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: { xs: '4px', sm: '12px', md: '16px' },
          maxWidth: { xs: '100%', sm: '600px', md: '800px', lg: '750px' },
          width: '100%',
          padding: { xs: '0 16px', sm: '0 20px' }
        }}
      >
        {countries.map((country, index) => (
          <Box
            key={index}
            className="country-item"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: '8px', sm: '10px' },
              cursor: 'pointer',
              borderRadius: { xs: '0', sm: '4px' },
              transition: 'background-color 0.2s ease-in-out',
              '&:hover': {
                '& .country-underline': {
                  width: '100%'
                }
              }
            }}
          >
            <Box
              component="img"
              src={country.flag}
              alt={`${country.name} flag`}
              sx={{
                width: { xs: '32px', sm: '32px', md: '40px' },
                height: { xs: '32px', sm: '32px', md: '40px' },
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
                border: '1px solid #e0e0e0'
              }}
            />
            
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                width: 'fit-content'
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' },
                  fontWeight: 400,
                  color: '#000000',
                  position: 'relative',
                  zIndex: 1,
                  whiteSpace: 'nowrap'
                }}
              >
                {country.name}
              </Typography>
              
              <Box
                className="country-underline"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#000000',
                  transition: 'width 0.3s ease-in-out',
                  display: 'block'
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChooseCountry;

