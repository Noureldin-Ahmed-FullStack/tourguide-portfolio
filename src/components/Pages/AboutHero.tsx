import { useState } from 'react'
import { Skeleton, ThemeProvider, createTheme } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function AboutHero() {
  const [loaded, setLoaded] = useState(false);
  const [t] = useTranslation("global");
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
    <div className='w-100 aboutBG relative !h-[450px]'>
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
        className={loaded ? 'bgImage !h-[450px]' : 'd-none'}
        src={'https://res.cloudinary.com/dqijwldax/image/upload/v1752186974/TourGuideVideos/pyramids_aul0nq.jpg'}
        onLoad={handleImageLoad}
        onError={() => console.error('Image failed to load')}

      />
      <div
        className='w-100 h-100 z-2 flex flex-col items-center justify-center position-relative text-start w-full px-3'
      >
        <div>
          <h1 className='text-6xl'>Ahmed Abdul Alim</h1>
          {/* <h5>{t("headerSmallSubText")}</h5> */}
          <h6 className='font-bold'>{t('about.subtitle')}</h6>
          <p>{t('about.subsubtitle')}</p>
        </div>

      </div>
    </div>
  )
}
