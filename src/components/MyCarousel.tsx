import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import useEmblaCarousel from "embla-carousel-react";
import "../css2/myStyleSheet.css";
import "../css2/embla.css";
import Autoplay from "embla-carousel-autoplay";
import { ImageListItem, ImageListItemBar, Slide, TextField } from "@mui/material";
import CarouselImageSkelation from "./CarouselImageSkelation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useTranslation } from "react-i18next";
import { TransitionProps } from "@mui/material/transitions";
import CustomDialog from "./ui/ModalWithChildren";
import axios from "axios";
import { toast } from "react-toastify";
const BaseURL = import.meta.env.VITE_BASE_URL;
const ClientMail = import.meta.env.VITE_CLIENT_MAIL;
const MyMail = import.meta.env.VITE_MY_MAIL;
// import CarouselSkelation from './CarouselSkelation';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function carousel() {
  const [Dialogue, setDialogue] = useState(false);
  const [formData, setFormData] = useState({
    userEmail: "",
    userPhone: "",
    userMessage: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const [SelectedTour, setSelectedTour] = useState<any>(null);
  const [pending, setPending] = useState(false)
  const data = {
    userEmail: formData.userEmail,
    userPhone: formData.userPhone,
    userMessage: formData.userMessage,
    excursion: {
      title: SelectedTour?.Title,
      describtion: SelectedTour?.Subtitle,
      Images: [SelectedTour?.Img],
    },
    reciver: [ClientMail, MyMail]
  };
  const handleConfirmAction = async () => {
    setPending(true)
    try {
      const response = await axios.post(BaseURL + '/contactMe', data);
      console.log('Success:', response);
      setPending(false)
      toast.success("message sent!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      setPending(false)
      toast.error("an error has occured", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error('Error:', error);
    }
    handleCloseDialog();
  };

  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);
  const [_anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenDialog = () => {
    setAnchorEl(null)
    setIsCustomDialogOpen(true)
  };
  const handleCloseDialog = () => {
    setAnchorEl(null)
    setIsCustomDialogOpen(false)
  };
  const handleClose = () => {
    setDialogue(false);
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false, delay: 3500 }),
  ]);

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
  const [t] = useTranslation("global");
  const Excursions = t('Excursions', { returnObjects: true }) as any;
  console.log({ Excursions });


  const ViewTour = (Item: any) => {
    setSelectedTour(Item);
    Dialogue ? close() : open();
  };


  return (
    <div className="container">
      <Dialog
        open={Dialogue}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
            PaperProps={{
                className: 'mx-0'
            }}
      >
        <DialogTitle className="pb-0  px-3" id="alert-dialog-title">{SelectedTour?.Title}</DialogTitle>
        <span className="px-3">{SelectedTour?.Subtitle}</span>
        <DialogContent sx={{ paddingTop: '0.2rem' }}>
          <div className="!text-zinc-200 w-100 TourModal">
            <div className="p-0 ">
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
                itemClass="flex items-center"
              >
                {
                  (() => {
                    const images = [];
                    for (let i = 1; i <= SelectedTour?.ImagesCount; i++) {
                      images.push(
                        <img
                          key={i}
                          className="max-h-[50vh] mx-auto"
                          src={`${SelectedTour?.ImagesAddress}${i}.jpg`}
                          draggable={false}
                        />
                      );
                    }
                    return images;
                  })()
                }
              </Carousel>
              {SelectedTour?.Idea && (
                <>
                  <h4 className="mt-3">Idea</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{SelectedTour.Idea}</p>
                </>
              )}
              {SelectedTour?.Route && (
                <>
                  <h4 className="mt-3">Route</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{SelectedTour.Route}</p>
                </>
              )}
              {SelectedTour?.MeetingPoint && (
                <>
                  <h4 className="mt-3">Meeting Point</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{SelectedTour.MeetingPoint}</p>
                </>
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
          <Button onClick={handleOpenDialog}>Book This tour</Button>
        </DialogActions>
      </Dialog>
      <CustomDialog
        open={isCustomDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={() => handleConfirmAction()}
        title={"Book " + SelectedTour?.Title}
        confirmColor='primary'
        isLoading={pending}
        confirmText="Send Booking Message"
        cancelText="cancel"
      >
        <form className="mt-3">
          <div className="text-center md:text-left">
            <div className=''>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <TextField
                  value={formData.userEmail}
                  onChange={handleChange} required id="userEmail" label="Your email" type='email' variant="outlined" />
                <TextField
                  value={formData.userPhone}
                  onChange={handleChange} required id="userPhone" label="Your Whatsapp number" type='tel' variant="outlined" />
              </div>
              <TextField
                fullWidth
                id="userMessage"
                label="Message"
                multiline
                value={formData.userMessage}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </div>

        </form>
      </CustomDialog>
      {/* {isCarouselLoaded ? ( */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {/* <div className="embla__slide"><img className='embla__slide__img' src="./Images/Pyramids.jpg" /></div> */}
          {Excursions.map((item: any) => (
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
