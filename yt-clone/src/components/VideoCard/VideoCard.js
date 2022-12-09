import React, { Link } from 'react';
import Avatar from '@mui/icons-material/AccountCircle';
import './VideoCard.css';
import {videos} from '/Users/HP/Desktop/Coding/YT-Clone/yt-clone/src/videos/videos';

function VideoCard() {
    const vvideo = {videos}.map(video => {
        if (video.title.length > Number.MAX_VALUE) {
        video.title = video.title.substring(0, Number.MAX_VALUE);
        video.title =
            video.title.substring(
            0,
            Math.min(video.title.length, video.title.lastIndexOf(' '))
            ) + '...';
                return vvideo;
        }});
        console.log(vvideo);


    return (
        <Link
            to={`/watch/${video.id}`}
            key={video.id}>
                <div className='videocard'>
                    
                    <img className='videocard-img' src={video.image} alt='' />
                    <div className='videocard-info'>
                        <Avatar
                            className='videocard-avatar'
                            alt={video.channel}
                            src={video.channelImage} />
                    </div>
                    <div className='videocard-text'>
                        <h4>{video.title}</h4>
                        <p>{video.channel}</p>
                        <p>{video.views} views • {video.timestamp} </p>
                    </div>
                </div>
        </Link>
    )
}

export default VideoCard;