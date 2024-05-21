import React, { useEffect, useState } from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import useEmblaCarousel from 'embla-carousel-react'
import '../css2/myStyleSheet.css'
import '../css2/embla.css'
import Autoplay from 'embla-carousel-autoplay';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import CarouselImageSkelation from './CarouselImageSkelation';
import CarouselSkelation from './CarouselSkelation';
export default function carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false, delay: 992500 })])
    const ImageArr = ['https://ssniper.sirv.com/TourguideProject/luxor.jpg', 'https://ssniper.sirv.com/TourguideProject/mosqueBig.jpg', 'https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg', 'https://ssniper.sirv.com/TourguideProject/Hall.jpg',]
    const [isCarouselLoaded, setIsCarouselLoaded] = useState(false);

    useEffect(() => {
        if (emblaRef) {
            setIsCarouselLoaded(true);
        }
    }, [emblaRef]);

    return (
        <div className='container'>
            {/* {isCarouselLoaded ? ( */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {/* <div className="embla__slide"><img className='embla__slide__img' src="./Images/Pyramids.jpg" /></div> */}
                        {ImageArr.map((item => (


                            <div key={item} className="embla__slide ">
                                <ImageListItem className='ScaleOnHover rounded-3 minHeight'>
                                    {/* <img loading="lazy" className='embla__slide__img carouselImage rounded-3' src={item} /> */}
                                    <CarouselImageSkelation src={item} />
                                    <ImageListItemBar
                                        sx={{
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                            '& .MuiImageListItemBar-title': {
                                                fontWeight: 'bold',
                                                fontSize: '1.5em', // adjust the font size as needed
                                            },
                                            borderBottomLeftRadius: '10px', // adjust the radius as needed
                                            borderBottomRightRadius: '10px', // adjust the radius as needed
                                        }}
                                        position="bottom"
                                        title="Pyramids"
                                        subtitle="Pyramids of Giza Tour"
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'white' }}
                                            >
                                                <ThumbUpRoundedIcon />
                                            </IconButton>
                                        }
                                        actionPosition="left"
                                    />
                                </ImageListItem>
                            </div>

                        )))}
                    </div>
                </div>
            {/* ) : (
                <CarouselSkelation />
            )} */}

        </div >
    )
}