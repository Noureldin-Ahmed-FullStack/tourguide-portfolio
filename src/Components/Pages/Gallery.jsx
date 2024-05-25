import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import ImageLoaderSkeleton from '../ImageLoaderSkeleton';
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
          <ImageList cols={cols} gap={30} variant='masonry'>
    
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                {/* <img
                  srcSet={`https://ssniper.sirv.com/TourguideProject/Gallery/${item.img}`}
                  src={`https://ssniper.sirv.com/TourguideProject/Gallery/${item.img}`}
                  alt={item.title}
                  loading="lazy"
                /> */}
                <ImageLoaderSkeleton width={212} height={282} src={`https://ssniper.sirv.com/TourguideProject/Gallery/${item.img}`} title={item.title}/>
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
            ))}
          </ImageList>
        </div>
      );
    }
    