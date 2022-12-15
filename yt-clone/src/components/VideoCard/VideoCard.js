import React from 'react';
import Avatar from '@mui/icons-material/AccountCircle';
import './VideoCard.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function VideoCard({thumb_img, title, channel_name, views, timestamp, duration}) {
    return (
        <div className='video_card'>
            <div className='thumbnail_img'>
                <img src={thumb_img} className='thumb_img' alt='profile'/>
                <span className='duration'>{duration}</span>

                <div className='body'>

                    <div className='title'>
                        <div className='inner_body'>
                            <div className='title_icon'>
                                <Avatar className='profile_img'/>
                            </div>

                            <div className='main_body'>
                                <h4>{title}</h4>
                                <p>{channel_name}</p>
                                <span className='views'>
                                {views}
                                </span> • <span></span>
                                <span className='timestamp'>
                                    {timestamp}
                                </span>
                            </div>
                        </div>
                        <MoreVertIcon className='icon'/>
                    </div>

                        

                </div>
            </div>
        </div>
    )
}

export default VideoCard;