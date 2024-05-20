import { Skeleton, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

export default function CarouselSkelation() {
    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    });
    return (
        <div className='w-100'>
            <ThemeProvider theme={theme}>
                <Skeleton variant="rectangular" animation="wave" height={320} />
            </ThemeProvider>
        </div>
    )
}
