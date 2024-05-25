import { Skeleton, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'

export default function ImageLoaderSkeleton(props) {
  const { width, height, src, title } = props
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
    <>
      {!loaded && (
        <ThemeProvider theme={theme}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={'100%'}
            height={height}
            sx={{
              // position: 'absolute',
              // top: 0,
              // left: 0,
              zIndex: 5
            }}
          />
        </ThemeProvider>
      )}
      <img
        className={loaded ? 'w-100' : 'd-none'}
        src={src}
        onLoad={handleImageLoad}
        onError={handleImageLoad}
        alt={title}

      />
    </>
    // <Skeleton 
    // {...props}
    // />
  )
}
