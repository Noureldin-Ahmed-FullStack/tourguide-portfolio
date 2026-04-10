import {
  Dialog,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import ImageLoaderSkeleton from "../ImageLoaderSkeleton";
import { TransitionProps } from "@mui/material/transitions";
import { motion, AnimatePresence } from "framer-motion";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Gallery() {
  const itemData = [
    { img: "1.jpg", title: "Pyramids", cols: 2 },
    { img: "2.jpg", title: "Pyramids", cols: 2 },
    { img: "3.jpg", title: "Pyramids", rows: 2, cols: 2, featured: true },
    { img: "4.jpg", title: "Cairo Museum" },
    { img: "5.jpg", title: "Hurghada" },
    { img: "6.jpg", title: "Pyramids", rows: 2, cols: 2 },
    { img: "7.jpg", title: "Pyramids" },
    { img: "8.jpg", title: "Cairo Museum" },
    { img: "9.jpg", title: "Cairo Museum", cols: 2 },
    { img: "10.jpg", title: "Pyramids", cols: 2 },
    { img: "11.jpg", title: "Nile", cols: 2 },
    { img: "12.jpg", title: "Pyramids", cols: 3 },
  ];

  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [SelectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayImage = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  let cols = 4;
  if (isXs) cols = 1;
  else if (isSm) cols = 2;
  else if (isMd) cols = 3;

  return (
    <div className="container mx-auto px-4">
      {/* Image Modal */}
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "visible",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth="lg"
        open={modalOpen}
        onClose={handleClose}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClose}
          className="absolute -top-12 right-0 p-2 text-white/70 hover:text-primary transition-colors z-50"
        >
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </motion.button>
        <div className="flex justify-center items-center">
          {SelectedImage && (
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
              src={`https://ssniper.sirv.com/TourguideProject/Gallery/${SelectedImage}`}
              alt="Gallery view"
            />
          )}
        </div>
      </Dialog>

      {/* Masonry Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
      >
        {itemData.map((item, index) => (
          <motion.div
            key={item.img}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => displayImage(item.img)}
            className="relative group cursor-pointer break-inside-avoid mb-4"
          >
            <div className="relative overflow-hidden rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-500">
              {/* Image */}
              <div className="relative">
                <ImageLoaderSkeleton
                  modalOpen={modalOpen}
                  height={item.featured ? 400 : item.rows === 2 ? 350 : 250}
                  src={`https://ssniper.sirv.com/TourguideProject/Gallery/${item.img}`}
                  title={item.title}
                />

                {/* Overlay */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    />
                  )}
                </AnimatePresence>

                {/* Title */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4"
                >
                  <h4 className="text-white font-serif font-medium text-lg">
                    {item.title}
                  </h4>
                  <span className="text-primary text-sm">Click to view</span>
                </motion.div>

                {/* Golden accent on hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark via-primary to-primary-light origin-left"
                />

                {/* Glow effect */}
                <motion.div
                  animate={{
                    boxShadow: hoveredIndex === index
                      ? "0 20px 60px rgba(201, 169, 98, 0.2)"
                      : "0 0 0 rgba(201, 169, 98, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
