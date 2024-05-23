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
            <img src="https://ssniper.sirv.com/TourguideProject/boat.jpg" loading='lazy' className='bgImage' alt="" />

            <div className='h-100 bg-dark-subtle w-100 z-3'>
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
                            {/* <PlayCircleOutlinedIcon sx={{ fontSize: "3.5rem" ,transition: 'transform 0.5s'}} className='watchButton' /> <h5 className='mb-0 ms-1'>WATCH THE VIDEO</h5> */}
                            <i class="fa-regular fa-circle-play watchButton"></i> <h5 className='mb-0 ms-2'>WATCH THE VIDEO</h5>
                        </div>

                        <Grid container alignItems={"center"} justifyContent="space-between">
                            <Grid item order={{ xs: 1, sm: 0, md: 0 }} xs={12} sm={6} md={4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, ut ullam? Itaque cumque dolores voluptate quia, temporibus eaque nobis laudantium totam repellat aliquam facilis nemo!</Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Grid container spacing={2} justifyContent={"center"}>
                                    <Grid item xs={6} sm={7} md={6}>
                                        <div className='overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/interior.jpg" className=' w-100 ' alt="" />
                                            <div class="overlay">
                                            <i class="fa-regular fa-circle-play watchButton"></i>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={7} md={6}>
                                    <div className='overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/bg2.jpg" className=' w-100 ' alt="" />
                                            <div class="overlay">
                                                <i class="fa-regular fa-circle-play watchButton"></i>
                                            </div>
                                        </div>
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
