import React, { useState } from 'react'
import '../css/Discover.css'
import { Grid, Skeleton, ThemeProvider, createTheme } from '@mui/material'
import { AnimatePresence, motion } from "framer-motion";
import Socials from './Socials';
import Modal from './Modal Stuff/Modal';
import { useTranslation } from 'react-i18next';
export default function Discover() {
    const [modalOpen, setModalOpen] = useState(false);
    const [SelectedVideo, setSelectedVideo] = useState('Vid1.mp4');
    const [t, i18n] = useTranslation("global");

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    const startVideo = (video) =>{
        setSelectedVideo(video)
        modalOpen ? close() : open()
    }
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        console.log('Image loaded');
        setLoaded(true);
    };
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });


    return (
        <div className='w-100  DiscoveryBG'>
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
                src={'https://ssniper.sirv.com/TourguideProject/boat.jpg'}
                onLoad={handleImageLoad}
                onError={() => console.error('Image failed to load')}

            />
            {/* <img src="https://ssniper.sirv.com/TourguideProject/boat.jpg" loading='lazy' className='bgImage' alt="" /> */}

            <div className='h-100 bg-dark-subtle w-100 z-3'>
                <Grid
                    container
                    className='w-100 h-100 z-3 container position-relative '
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid item className='text-start'>
                        <h1>{t('discover.header')}</h1>
                        <div className='d-flex align-items-center mb-3'>
                            {/* <PlayCircleOutlinedIcon sx={{ fontSize: "3.5rem" ,transition: 'transform 0.5s'}} className='watchButton' /> <h5 className='mb-0 ms-1'>WATCH THE VIDEO</h5> */}
                            <i onClick={() => startVideo('Vid2.mp4')} className="fa-regular fa-circle-play watchButton"></i> <h5 className='mb-0 ms-2'>{t('discover.secondHeader')}</h5>
                        </div>
                        <div>
                            {/* <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="save-button"
                                onClick={() => (modalOpen ? close() : open())}
                            >
                                Launch modal
                            </motion.button> */}
                            <AnimatePresence
                                initial={false}
                                mode='wait'
                                onExitComplete={() => null}
                            >
                                {modalOpen && <Modal isMedia={true} modalOpen={modalOpen} animation={"dropIn"} handleClose={close} >
                                    {/* <h1>Hi, very cool!</h1> */}
                                    <video
                                        autoPlay
                                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                        // Disable right click
                                        onContextMenu={e => e.preventDefault()}
                                        className='w-100 z-3 vids rounded-3' controls src={`https://ssniper.sirv.com/TourguideProject/Videos/${SelectedVideo}`}></video>
                                </Modal>}
                            </AnimatePresence>
                        </div>
                        <Grid container alignItems={"center"} justifyContent="space-between">
                            <Grid item order={{ xs: 1, sm: 0, md: 0 }} xs={12} sm={6} md={4}>{t('discover.subtext')}</Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Grid container spacing={2} justifyContent={"center"}>
                                    <Grid item xs={6} sm={7} md={6}>
                                        <div onClick={() => startVideo('Vid1.mp4')} className='overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/Gallery/thumbnail1.jpg" style={{aspectRatio:"4/3"}} className=' w-100 ' alt="" />
                                            <div className="overlay">
                                                <i className="fa-regular fa-circle-play watchButton"></i>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={7} md={6}>
                                        <div onClick={() => startVideo('Vid2.mp4')} className='overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/Gallery/thumbnail2.jpg" style={{aspectRatio:"4/3"}} className=' w-100 ' alt="" />
                                            <div className="overlay">
                                                <i className="fa-regular fa-circle-play watchButton"></i>
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
