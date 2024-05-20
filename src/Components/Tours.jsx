import React from 'react'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import MyCarousel from './MyCarousel';
import '../css/Tours.css'

export default function Footer() {
    return (
        <div className='myDarkBG py-5 '>
            <h3>POPULAR TOURS</h3>
            <span>Click the Tour for preview</span>
            <div className=''>
                <MyCarousel />
            </div>
        </div>
    )
}
