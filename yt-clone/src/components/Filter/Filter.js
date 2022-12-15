import React from 'react';
import "./Filter.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Filter() {
  return (
    <div className='filter'>
        <div className='single-filter'>
            <span className='filter-items active'>All</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Mixes</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Music</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Live</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>DEVCommunity</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Computer</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Programming</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>React JS</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Javascript</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Python</span>
        </div>

        <div className='single-filter'>
            <span className='filter-items'>Mental Health</span>
        </div>

        

        <div className='single-filter'>
            <ArrowForwardIosIcon className='arrow_right'/>
        </div>

    </div>
  )
}

export default Filter