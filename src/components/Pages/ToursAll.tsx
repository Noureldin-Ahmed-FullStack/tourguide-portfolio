import { Slide } from "@mui/material";
import React, {  useState } from "react";

import {
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageLoaderSkeleton from "../ImageLoaderSkeleton";
import { TransitionProps } from "@mui/material/transitions";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ToursAll() {
  const [modalOpen, setModalOpen] = useState(false);
  const [SelectedImage, setSelectedImage] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const displayImage = (image : any) => {
    setSelectedImage(image);
    modalOpen ? close() : open();
  };
  const handleClose = () => {
    setModalOpen(false)
  };
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
      cols: 2,
    },
  ];
  const theme = useTheme();
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
        maxWidth={"lg"}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions sx={{ padding: "0" }}>
          <Button sx={{ padding: "0" }} onClick={handleClose}>
            <CloseIcon
              sx={{
                fontSize: "3rem",
                color: "white", // Changes cursor to pointer to indicate it's clickable
                transition: "all 0.6s",
                borderRadius: "0.3rem",
                "&:hover": {
                  color: "black", // Change the color on hover
                  backgroundColor: "white",
                  transform: "scale(1.1)", // Scale up slightly on hover
                },
              }}
              onClick={handleClose}
            />
          </Button>
        </DialogActions>
        <DialogContent sx={{ padding: "0" }}>
          <div className="bg-transparent d-flex justify-content-center">
            <img
              className="rounded-2 DialogMedia"
              src={`${SelectedImage}`}
            />
          </div>
        </DialogContent>
      </Dialog>
      <ImageList cols={cols} gap={8} variant="masonry">
        {itemData.map((item) => (
          <div key={item.img} onClick={() => displayImage(item.img)}>
          <ImageListItem >
            {/* <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            /> */}
            <ImageLoaderSkeleton
              height="120px"
              title="item.title"
              src={`${item.img}?w=248&fit=crop&auto=format`}
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
