import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import ImageLoaderSkeleton from '../ImageLoaderSkeleton';
import Modal from '../Modal Stuff/Modal';
import { AnimatePresence } from 'framer-motion';
export default function Gallery() {
  const itemData = [
    {
      img: '1.jpg',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: '2.jpg',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: '3.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: '4.jpg',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: '5.jpg',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: '6.jpg',
      title: 'Mushrooms',
      author: '@silverdalex',
      rows: 2,
      cols: 2,
    },
    {
      img: '7.jpg',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: '8.jpg',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: '9.jpg',
      title: 'Bike',
      author: '@southside_customs',
      cols: 2,
    },
    {
      img: '10.jpg',
      title: 'Bike',
      author: '@southside_customs',
      cols: 2,
    },
    {
      img: '11.jpg',
      title: 'Bike',
      author: '@southside_customs',
      cols: 2,
    },
    {
      img: '12.jpg',
      title: 'Bike',
      author: '@southside_customs',
      cols: 3,
    },
  ];
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [SelectedImage, setSelectedImage] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const displayImage = (image)=>{
    setSelectedImage(image)
    modalOpen? close(): open()
  }
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
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
    <div className='container galleryMT'>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} animation={"dropIn"} handleClose={close} >
          <img className='w-100 rounded-2 vids' src={`https://ssniper.sirv.com/TourguideProject/Gallery/${SelectedImage}`} />
        </Modal>}
      </AnimatePresence>
      <ImageList cols={cols} gap={30} variant='masonry' sx={{ overflow: 'hidden' }}>

        {itemData.map((item) => (
          <div key={item.img} onClick={()=>displayImage(item.img)}>
            <ImageListItem className='scaleOnHover'>
              <ImageLoaderSkeleton modalOpen={modalOpen} width={212} height={282} src={`https://ssniper.sirv.com/TourguideProject/Gallery/${item.img}`} title={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
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
