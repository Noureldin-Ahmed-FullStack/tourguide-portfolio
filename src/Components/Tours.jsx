import React from 'react'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import MyCarousel from './MyCarousel';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../css/Tours.css'

export default function Tours() {
    return (
        <div className='myDarkBG py-2 '>
            <h3>POPULAR TOURS</h3>
            <span>Click the Tour for preview</span>
            <div className=''>
                <MyCarousel />
            </div>
            <a href='#' className='browseLink'>Browse all tours <KeyboardDoubleArrowRightIcon /></a>
        </div>
    )
}
