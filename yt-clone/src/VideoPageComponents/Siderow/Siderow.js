import React from 'react';
import './Siderow.css';

function Siderow({img, hover, title, channel, views, timestamp, duration}) {
  return (
    <div className={`row ${hover ? 'hover' : ''}`}>
        <div className='img_div'>
            <img src={img} className='img' alt='Thumb_img'/>
            <span className='durationn'>{duration}</span>        
        </div>

        <div className='body'>
            <p><b>{title}</b></p>
            <p>{channel}</p>

            <div>
                <p>{views} • {timestamp}</p>
            </div>

        </div>
    </div>
  )
}

export default Siderow