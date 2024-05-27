import React from 'react'
import MyCarousel from './MyCarousel';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../css/Tours.css'
import { Link } from 'react-router-dom';

export default function Tours() {
    return (
        <div className='myDarkBG py-2 '>
            <h3>POPULAR TOURS</h3>
            <span>Click the Tour for preview</span>
            <div className=''>
                <MyCarousel />
            </div>
            <Link to='/Tours' className='browseLink'>Browse all tours <KeyboardDoubleArrowRightIcon /></Link>
        </div>
    )
}
