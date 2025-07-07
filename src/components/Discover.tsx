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
    const [pendingRequest, setPendingRequest] = useState(false)
    const handleOpenDialog = () => {
        setIsDialogOpen(true)
    };
    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    };
    const handleConfirmAction = async () => {
        console.log("modal testing");

    }

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
                    <Grid className='text-start'>
                        <h1>{t('discover.header')}</h1>
                        <div className='d-flex align-items-center mb-3'>
                            <i onClick={() => startVideo('Instagram.mp4')} className="fa-regular fa-circle-play watchButton"></i> <h5 className='mb-0 ms-2'>{t('discover.secondHeader')}</h5>
                        </div>
                        <div>


                            <CustomDialog
                                open={isDialogOpen}
                                onClose={handleCloseDialog}
                                isDisabled={pendingRequest}
                                isLoading={pendingRequest}
                                onConfirm={() => handleConfirmAction()}
                                title="Create a art peice request!"
                                confirmColor='primary'
                                confirmText="Confirm"
                                className="overflow-y-hidden !w-fit"
                                cancelText="cancel"
                            >
                                <video
                                    autoPlay
                                    // config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                    // Disable right click
                                    onContextMenu={e => e.preventDefault()}
                                    className='max-h-[70vh] z-3 vids rounded-3' controls src={`https://ssniper.sirv.com/TourguideProject/Videos/${SelectedVideo}`}></video>
                            </CustomDialog>
                        </div>
                        <Grid container alignItems={"center"} justifyContent="space-between">
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} order={{ xs: 1, sm: 0, md: 0 }}>{t('discover.subtext')}</Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                                <Grid container spacing={2} justifyContent={"center"}>
                                    <Grid size={{ xs: 12, sm: 7, md: 6 }}>
                                        <div onClick={() => startVideo('Vid1.mp4')} className='overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/Gallery/thumbnail1.jpg" style={{ aspectRatio: "4/3" }} className=' w-100 ' alt="" />
                                            <div className="overlay">
                                                <i className="fa-regular fa-circle-play watchButton"></i>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 7, md: 6 }}>
                                        <div onClick={() => startVideo('Vid2.mp4')} className='overlay-container rounded-4 ScaleOnHover VideoBorder'>
                                            <img src="https://ssniper.sirv.com/TourguideProject/Gallery/thumbnail2.jpg" style={{ aspectRatio: "4/3" }} className=' w-100 ' alt="" />
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
