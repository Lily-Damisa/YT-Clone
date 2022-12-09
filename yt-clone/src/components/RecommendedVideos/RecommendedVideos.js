import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard';


function RecommendedVideos() {
  return (
      <div className='recommendedvideos'>
        {/* { isLoading ? <CircularProgress className='loading' color='secondary' /> : null } */}
        <div className="recommendedvideos__videos">
          {
            VideoCard.map(item => {
              return (
                  <VideoCard key={item.videoId}
                      title={item.title}
                      image={item.image}
                      views={item.views}
                      timestamp={item.timestamp}
                      channel={item.channel}
                      channelImage={item.channelImage}
                  />
              )
            })
          }
          </div>
      </div>

  )
}

export default RecommendedVideos