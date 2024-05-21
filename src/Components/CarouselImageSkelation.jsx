import React, { useState } from 'react';
import { Skeleton, ThemeProvider, createTheme } from '@mui/material';

export default function CarouselImageSkeleton({ src }) {
    const [loaded, setLoaded] = useState(false);

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const handleImageLoad = () => {
        console.log('Image loaded');
        setLoaded(true);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {!loaded && (
                <ThemeProvider theme={theme}>
                    <Skeleton
                        animation="wave"
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        className='minHeight'
                        sx={{
                            borderRadius: '0.65rem',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    />
                </ThemeProvider>
            )}
            <img
                className='embla__slide__img carouselImage rounded-3 TourSelector'
                src={src}
                onLoad={handleImageLoad}
                onError={() => console.error('Image failed to load')}
                style={{
                    display: loaded ? 'block' : 'none',
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
}
