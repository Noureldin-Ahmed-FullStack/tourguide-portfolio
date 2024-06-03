import React, { useEffect, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import useEmblaCarousel from "embla-carousel-react";
import "../css2/myStyleSheet.css";
import "../css2/embla.css";
import Autoplay from "embla-carousel-autoplay";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import CarouselImageSkelation from "./CarouselImageSkelation";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal Stuff/Modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CarouselSkelation from './CarouselSkelation';
export default function carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false, delay: 3500 }),
  ]);
  const [SelectedTour, setSelectedTour] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
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
    },
    {
      Describtion: "",
      Title: "Mosque",
      Subtitle: "Mosque Tour",
      Img: "https://ssniper.sirv.com/TourguideProject/mosqueBig.jpg",
    },
    {
      Describtion: "",
      Title: "Pyramids",
      Subtitle: "Pyramids of Giza Tour",
      Img: "https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg",
    },
    {
      Describtion: "",
      Title: "Mosque hall",
      Subtitle: "Mosque hall Tour",
      Img: "https://ssniper.sirv.com/TourguideProject/Hall.jpg",
    },
  ];
  const [isCarouselLoaded, setIsCarouselLoaded] = useState(false);

  const ViewTour = (Item) => {
    setSelectedTour(Item);
    modalOpen ? close() : open();
  };
  useEffect(() => {
    if (emblaRef) {
      setIsCarouselLoaded(true);
    }
  }, [emblaRef]);

  return (
    <div className="container">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} animation={"dropIn"} handleClose={close}>
            <div className="text-light w-100 bg-danger TourModal">
              <div className="p-3">
                <Carousel
                  className="myMultiCarousel"
                  swipeable={true}
                  draggable={true}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  arrows={false}
                  autoPlaySpeed={3600}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                >
                  <img
                    className="w-100"
                    src="https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="https://ssniper.sirv.com/TourguideProject/luxor.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="https://ssniper.sirv.com/TourguideProject/mosqueBig.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="https://ssniper.sirv.com/TourguideProject/Pyramids1.jpg"
                    alt=""
                  />
                  <img
                    className="w-100"
                    src="https://ssniper.sirv.com/TourguideProject/Hall.jpg"
                    alt=""
                  />
                </Carousel>
                <p className="Modal-text my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iste nam! Magnam beatae illo minus ipsum enim doloremque laboriosam, tenetur iure repellat optio ipsa magni ad hic, est officiis obcaecati odio fugiat ab impedit, dolor odit id quibusdam voluptate? Iusto minus eaque quae quis inventore rem voluptatem repellendus, eveniet sunt!
                </p>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
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
