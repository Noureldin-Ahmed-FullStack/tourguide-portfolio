import React, { useState } from 'react'
import '../css/Discover.css'
import { TypeAnimation } from 'react-type-animation'
import { Grid, Skeleton, Tab, Tabs, ThemeProvider, createTheme } from '@mui/material'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import Socials from './Socials';
export default function Discover() {

    const [loaded, setLoaded] = useState(false);

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });


    return (
        <div className='w-100 DiscoveryBG'>
                <img src="./Images/boat.jpg" loading='lazy' className='bgImage' alt="" />
                
            <div className='h-100 bg-danger-subtle w-100 z-3'>
                <Grid
                    container
                    className='w-100 h-100 z-3 container position-relative '
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid item className='text-start'>
                        <h1>Watch this!</h1>
                        <div className='d-flex align-items-center'>
                            <PlayCircleOutlinedIcon sx={{ fontSize: "3.5rem" }} /> <h5 className='mb-0 ms-1'>WATCH THE VIDEO</h5>

                        </div>

                        <Grid container alignItems={"center"} justifyContent="space-between">
                            <Grid item order={{ xs: 1, sm: 0, md: 0 }} xs={12} sm={6} md={4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, ut ullam? Itaque cumque dolores voluptate quia, temporibus eaque nobis laudantium totam repellat aliquam facilis nemo!</Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Grid container spacing={2} justifyContent={"center"}>
                                    <Grid item xs={6} sm={7} md={6}>
                                        <img src="./bg1.jpg" className='rounded-4 VideoBorder w-100' alt="" />
                                    </Grid>
                                    <Grid item xs={6} sm={7} md={6}>
                                        <img src="./bg2.jpg" className='rounded-4 VideoBorder w-100' alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <ThemeProvider theme={theme}>
                        <Socials />


                    </ThemeProvider>
                </Grid>

            </div>
        </div>
    )
}
