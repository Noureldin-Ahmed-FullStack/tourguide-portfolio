import React, { useState } from 'react'
import '../css/mainBG.css'
import { TypeAnimation } from 'react-type-animation'
import { Grid, Skeleton, Tab, Tabs, ThemeProvider, createTheme } from '@mui/material'

export default function BigBG() {
  const [loaded, setLoaded] = useState(false);
  
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
                className={loaded? 'bgImage' : 'd-none'}
                src={'https://ssniper.sirv.com/TourguideProject/bg2.jpg'}
                onLoad={handleImageLoad}
                onError={() => console.error('Image failed to load')}
                
            />
      {/* <img src="https://ssniper.sirv.com/TourguideProject/bg2.jpg" className='bgImage' alt="" /> */}
      <Grid
        container
        className='w-100 h-100 z-2 container position-relative '
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Grid item></Grid>
        <Grid item className=''>
          <TypeAnimation
            className=' typer'
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Explore Egypt!",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Visit the Pyramids!",
              1000,
              "Great Selection of Tours",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            style={{ fontSize: '4rem', display: 'inline-block' }}
            repeat={Infinity}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <h4 className='text-start typerSubtext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aut provident eaque error soluta est laboriosam rem maiores a eveniet, excepturi </h4>
            </Grid>
          </Grid>
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
