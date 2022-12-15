import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard';
import Filter from '../Filter/Filter';
import './RecommendedVideos.css';


function RecommendedVideos() {
  return (
      <div className='recommendedvideos'>
        <Filter />
        <div className="the_videos">
          <Link to="/singlevideopage">
            <VideoCard
              thumb_img="./maraji.jpg"
              title="How my husband served me breakfast"
              channel_name="Maraji"
              duration="15:00"
              views="500K views"
              timestamp="40 minutes ago"
            />     

          </Link>

          <VideoCard
            thumb_img="./maxresdefault.jpg"
            title="Alchemy of Souls Season 2"
            channel_name="Netflix"
            duration="1:30:45"
            views="500K views"
            timestamp="6 minutes ago"
          />          
    
          <VideoCard
            thumb_img="./freecodecamp.jfif"
            title="Web Development Full Course"
            channel_name="FreeCode Camp"
            duration="2:30:00"
            views="216K views"
            timestamp="1 year ago"
          />  

          <VideoCard
            thumb_img="./sunmisola.jpg"
            title="This is Holy"
            channel_name="Sunmisola Agbebi"
            duration="2:30:00"
            views="216K views"
            timestamp="3 months ago"
          />   

          <VideoCard
            thumb_img="./rubiks.jpg"
            title="How to solve Rubik's Cube"
            channel_name="RubiksNerd"
            duration="2:30:00"
            views="1K views"
            timestamp="10 years ago"
          />         

          <VideoCard
            thumb_img="./giveon.jpg"
            title="Lost Me ~ Official Music Video"
            channel_name="Giveon"
            duration="2:30:00"
            views="10M views"
            timestamp="1 year ago"
          />          
 
          <VideoCard
            thumb_img="./maxresdefault.jpg"
            title="Alchemy of Souls Season 2"
            channel_name="Netflix"
            duration="1:30:45"
            views="500K views"
            timestamp="6 minutes ago"
          />   
       
          <VideoCard
            thumb_img="./maxresdefault.jpg"
            title="Alchemy of Souls Season 2"
            channel_name="Netflix"
            duration="1:30:45"
            views="500K views"
            timestamp="6 minutes ago"
          />  

          <VideoCard
            thumb_img="./maxresdefault.jpg"
            title="Alchemy of Souls Season 2"
            channel_name="Netflix"
            duration="1:30:45"
            views="500K views"
            timestamp="6 minutes ago"
          />    
        

        </div>
      </div>

  )
}

export default RecommendedVideos