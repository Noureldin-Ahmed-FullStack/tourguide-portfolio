import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { forwardRef, useState } from "react";
import ImageLoaderSkeleton from "../ImageLoaderSkeleton";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Gallery() {

 

  const itemData = [
    {
      img: "1.jpg",
      title: "Coffee",
      author: "@nolanissac",
      cols: 2,
    },
    {
      img: "2.jpg",
      title: "Hats",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "3.jpg",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "4.jpg",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "5.jpg",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "6.jpg",
      title: "Mushrooms",
      author: "@silverdalex",
      rows: 2,
      cols: 2,
    },
    {
      img: "7.jpg",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "8.jpg",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "9.jpg",
      title: "Bike",
      author: "@southside_customs",
      cols: 2,
    },
    {
      img: "10.jpg",
      title: "Bike",
      author: "@southside_customs",
      cols: 2,
    },
    {
      img: "11.jpg",
      title: "Bike",
      author: "@southside_customs",
      cols: 2,
    },
    {
      img: "12.jpg",
      title: "Bike",
      author: "@southside_customs",
      cols: 3,
    },
  ];
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [SelectedImage, setSelectedImage] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const displayImage = (image) => {
    setSelectedImage(image);
    modalOpen ? close() : open();
  };
  const handleClose = () => {
    setModalOpen(false)
  };
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  let cols = 4; // default

  if (isXs) {
    cols = 1;
  } else if (isSm) {
    cols = 2;
  } else if (isMd) {
    cols = 3;
  } else if (isLg) {
    cols = 4;
  }
  return (
    <div className="container galleryMT">
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent", // Change to your desired color
          },
        }}
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={'lg'}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions sx={{padding:'0'}}>
          <Button sx={{padding:'0'}} onClick={handleClose} >
            <CloseIcon
              sx={{
                fontSize:'3rem',
                color: "white", // Changes cursor to pointer to indicate it's clickable
                transition:'all 0.6s',
                borderRadius:'0.3rem',
                "&:hover": {
                  color: "black", // Change the color on hover
                  backgroundColor:'white',
                  transform: "scale(1.1)", // Scale up slightly on hover
                },
              }}
              onClick={handleClose}
            />
          </Button>
        </DialogActions>
        <DialogContent sx={{padding:'0'}}>
          <div className="bg-transparent d-flex justify-content-center">
            <img
              className="rounded-2 DialogMedia"
              src={`https://ssniper.sirv.com/TourguideProject/Gallery/${SelectedImage}`}
            />
          </div>
        </DialogContent>
      </Dialog>

      <ImageList
        cols={cols}
        gap={30}
        variant="masonry"
        sx={{ overflow: "hidden" }}
      >
        {itemData.map((item) => (
          <div key={item.img} onClick={() => displayImage(item.img)}>
            <ImageListItem className="scaleOnHover">
              <ImageLoaderSkeleton
                modalOpen={modalOpen}
                height={282}
                src={`https://ssniper.sirv.com/TourguideProject/Gallery/${item.img}`}
                title={item.title}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    {/* <InfoIcon /> */}
                  </IconButton>
                }
              />
            </ImageListItem>
          </div>
        ))}
      </ImageList>
    </div>
  );
}
