import { useState } from 'react'
import '../css/mainBG.css'
import { TypeAnimation } from 'react-type-animation'
import { Grid, Skeleton, ThemeProvider, createTheme } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function BigBG() {
  const [loaded, setLoaded] = useState(false);
  const [t, i18n] = useTranslation("global");
  const handleImageLoad = () => {
    console.log('Image loaded');
    setLoaded(true);
  };
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  return (
    <div className='w-100 mainBG'>
      {!loaded && (
        <ThemeProvider theme={theme}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 5
            }}
          />
        </ThemeProvider>
      )}
      <img
        className={loaded ? 'bgImage' : 'd-none'}
        src={'https://ssniper.sirv.com/TourguideProject/bg2.jpg'}
        onLoad={handleImageLoad}
        onError={() => console.error('Image failed to load')}

      />
      {/* <img src="https://ssniper.sirv.com/TourguideProject/bg2.jpg" className='bgImage' alt="" /> */}
      <Grid
        container
        className='w-100 h-100 z-2 container position-relative px-4'
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Grid item></Grid>
        <Grid item className=''>
          {i18n.language == 'en' ? (
            <TypeAnimation
              className=' typer'
              sequence={[
                "Explore Egypt!",
                2000,
                "Visit the Pyramids!",
                1000,
                "Great Selection of Tours",
                1000,
                "Local Insights",
                1000,
                "Personalized Tours",
                1000,
                "Unforgettable Memories",
                1000,
              ]}
              wrapper="h1"
              speed={50}
              style={{ fontSize: '4rem', display: 'inline-block' }}
              repeat={Infinity}
            />
          ) : (
            <TypeAnimation
              className=' typer'
              sequence={[
                "Исследуй Египет!",
                2000,
                "Посети пирамиды!",
                1000,
                "Большой выбор туров",
                1000,
                "Местные знания",
                1000,
                "Индивидуальные туры",
                1000,
                "Незабываемые впечатления",
                1000,
              ]}
              wrapper="h1"
              speed={50}
              style={{ fontSize: '4rem', display: 'inline-block' }}
              repeat={Infinity}
            />
          )}

          <div className='text-start w-full md:w-4/5'>
            <h4>{t("headerSubText")}</h4>
            <h5>{t("headerSmallSubText")}</h5>
          </div>
        </Grid>

        <ThemeProvider theme={theme}>
          <Grid item
            className='position-absolute bottom-0 mb-3 w-100 justify-content-center d-flex'>
            {/* <Tabs
              value={"1"}
              indicatorColor="secondary"
              sx={{
                borderBottom: 1, borderColor: 'divider',
                '& .MuiTabs-indicator': {
                  backgroundColor: '#e51f1f',
                },
                '& .MuiTab-root.Mui-selected': {
                  color: 'white',
                  fontWeight: 'bold',
                },
              }}
              textColor="inherit"
              aria-label="lab API tabs example">
              <Tab label="Tours" value="1" />
              <Tab label="Gallery" value="2" />
              <Tab label="Item Three" value="3" />
            </Tabs> */}

          </Grid>
        </ThemeProvider>
      </Grid>
    </div>
  )
}
