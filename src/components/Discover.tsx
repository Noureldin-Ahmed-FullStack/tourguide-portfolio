import { useState } from 'react'
import '../css/Discover.css'
import { Skeleton, ThemeProvider, createTheme } from '@mui/material'
import { AnimatePresence } from "framer-motion";
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import Socials from './Socials';
import Modal from './Modal Stuff/Modal';
import CustomDialog from './ui/ModalWithChildren';
export default function Discover() {
    const [SelectedVideo, setSelectedVideo] = useState('Vid1.mp4');
    const [t] = useTranslation("global");

    const startVideo = (video: any) => {
        setSelectedVideo(video)
        isDialogOpen ? setIsDialogOpen(false) : setIsDialogOpen(true)
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

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    };

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
                    <Grid className='text-start max-w-sm sm:max-w-none mx-auto'>

                        <div>


                            <CustomDialog
                                open={isDialogOpen}
                                onClose={handleCloseDialog}
                                confirmText="Confirm"
                                className="overflow-y-hidden !w-fit"
                                cancelText="close"
                            >
                                <video
                                    autoPlay
                                    // config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                    // Disable right click
                                    onContextMenu={e => e.preventDefault()}
                                    className='max-h-[70vh] z-3 vids rounded-3' controls src={`https://ssniper.sirv.com/TourguideProject/Videos/${SelectedVideo}`}></video>
                            </CustomDialog>
                        </div>
                        <div className="flex flex-col justify-center sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 sm:gap-4">
                            <div className="mt-5 sm:mt-0 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 h-full flex flex-col justify-center" >
                                <div id="container" className='mb-2'>
                                    <button onClick={() => startVideo('Instagram.mp4')} className="learn-more learnBTN w-72">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow" />
                                        </span>
                                        <span className="learnBTN-text">{t('discover.secondHeader')}</span>
                                    </button>
                                </div>
                                {t('discover.subtext')}</div>
                            <div className='sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2'>
                                <div className='w-full'>
                                    <div className='w-full my-4'>
                                        <div onClick={() => startVideo('Vid1.mp4')} className='w-4/5 sm:w-full mx-auto overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/Gallery/thumbnail1.jpg" style={{ aspectRatio: "4/3" }} className=' w-100 ' alt="" />
                                            <div className="overlay">
                                                <i className="fa-regular fa-circle-play watchButton"></i>
                                                <h5>watch video</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full my-4'>
                                        <div onClick={() => startVideo('Vid2.mp4')} className='w-4/5 sm:w-full mx-auto overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/Gallery/thumbnail2.jpg" style={{ aspectRatio: "4/3" }} className=' w-100 ' alt="" />
                                            <div className="overlay">
                                                <i className="fa-regular fa-circle-play watchButton"></i>
                                                <h5>watch video</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                </Grid>
                {/* <ThemeProvider theme={theme}>
                        <Socials />


                    </ThemeProvider> */}
            </div>

        </div>
    )
}
