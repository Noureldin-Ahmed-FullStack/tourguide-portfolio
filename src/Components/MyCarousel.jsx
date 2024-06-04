import React, { forwardRef, useEffect, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import useEmblaCarousel from "embla-carousel-react";
import "../css2/myStyleSheet.css";
import "../css2/embla.css";
import Autoplay from "embla-carousel-autoplay";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import { IconButton, ImageListItem, ImageListItemBar, Slide, Zoom } from "@mui/material";
import CarouselImageSkelation from "./CarouselImageSkelation";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal Stuff/Modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
// import CarouselSkelation from './CarouselSkelation';
const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});
export default function carousel() {
  const [Dialogue, setDialogue] = useState(false);

  const handleClickDialogue = () => {
    setDialogue(true);
  };

  const handleClose = () => {
    setDialogue(false);
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false, delay: 3500 }),
  ]);
  const [SelectedTour, setSelectedTour] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setDialogue(false);
  const open = () => setDialogue(true);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ImageArr = [
    {
      Describtion: "",
      Title: "luxor",
      Subtitle: "luxor Tour",
      Img: "https://ssniper.sirv.com/TourguideProject/luxor.jpg",
      ImgArr: [""],
    },
    {
      Describtion: "",
      Title: "Mosque",
      Subtitle: "Mosque Tour",
      Img: "https://ssniper.sirv.com/TourguideProject/mosqueBig.jpg",
      ImgArr: [""],
    },
    {
      Describtion: "",
      Title: "Pyramids",
      Subtitle: "Pyramids of Giza Tour",
      Img: "https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg",
      ImgArr: [""],
    },
    {
      Describtion: "",
      Title: "Mosque hall",
      Subtitle: "Mosque hall Tour",
      Img: "https://ssniper.sirv.com/TourguideProject/Hall.jpg",
      ImgArr: [""],
    },
  ];
  const [isCarouselLoaded, setIsCarouselLoaded] = useState(false);

  const ViewTour = (Item) => {
    setSelectedTour(Item);
    Dialogue ? close() : open();
  };
  useEffect(() => {
    if (emblaRef) {
      setIsCarouselLoaded(true);
    }
  }, [emblaRef]);

  return (
    <div className="container">
      <Dialog
        open={Dialogue}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{SelectedTour?.Title}</DialogTitle>
        <DialogContent>
          <div className="text-light w-100 text-dark TourModal">
            <div className="p-3">
              <Carousel
                className="myMultiCarousel grab"
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 2s"
                transitionDuration={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <img
                  className="w-100"
                  src="https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg"
                  draggable={false}
                  alt=""
                />
                <img
                  className="w-100"
                  src="https://ssniper.sirv.com/TourguideProject/luxor.jpg"
                  draggable={false}
                  alt=""
                />
                <img
                  className="w-100"
                  src="https://ssniper.sirv.com/TourguideProject/mosqueBig.jpg"
                  draggable={false}
                  alt=""
                />
                <img
                  className="w-100"
                  src="https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg"
                  draggable={false}
                  alt=""
                />
                <img
                  className="w-100"
                  src="https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg"
                  draggable={false}
                  alt=""
                />
                <img
                  className="w-100"
                  src="https://ssniper.sirv.com/TourguideProject/Hall.jpg"
                  draggable={false}
                  alt=""
                />
              </Carousel>
              <p className=" my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, iste nam! Magnam beatae illo minus ipsum enim
                doloremque laboriosam, tenetur iure repellat optio ipsa magni ad
                hic, est officiis obcaecati odio fugiat ab impedit, dolor odit
                id quibusdam voluptate? Iusto minus eaque quae quis inventore
                rem voluptatem repellendus, eveniet sunt!
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
          <Button onClick={handleClose}>Book This tour</Button>
        </DialogActions>
      </Dialog>

      {/* {isCarouselLoaded ? ( */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {/* <div className="embla__slide"><img className='embla__slide__img' src="./Images/Pyramids.jpg" /></div> */}
          {ImageArr.map((item) => (
            <div
              key={item.Title}
              onClick={() => ViewTour(item)}
              className="embla__slide "
            >
              <ImageListItem className="ScaleOnHover rounded-3 minHeight">
                {/* <img loading="lazy" className='embla__slide__img carouselImage rounded-3' src={item} /> */}
                <CarouselImageSkelation src={item.Img} />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    "& .MuiImageListItemBar-title": {
                      fontWeight: "bold",
                      fontSize: "1.5em", // adjust the font size as needed
                    },
                    borderBottomLeftRadius: "10px", // adjust the radius as needed
                    borderBottomRightRadius: "10px", // adjust the radius as needed
                  }}
                  position="bottom"
                  title={item.Title}
                  subtitle={item.Subtitle}
                  actionIcon={
                    <IconButton sx={{ color: "white" }}>
                      <ThumbUpRoundedIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            </div>
          ))}
        </div>
      </div>
      {/* ) : (
                <CarouselSkelation />
            )} */}
    </div>
  );
}
