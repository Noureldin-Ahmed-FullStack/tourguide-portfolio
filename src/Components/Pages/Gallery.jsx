import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
export default function Gallery() {
    const itemData = [
       
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          author: '@tjdragotta',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          author: '@katie_wasserman',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          author: '@silverdalex',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          author: '@shelleypauls',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          author: '@peterlaster',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          author: '@southside_customs',
          cols: 2,
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
          <ImageList cols={cols} gap={8} variant='masonry'>
    
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
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
    