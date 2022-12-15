import React from 'react';
import './Home.css';
import SideBar from '../../components/SideBar/SideBar';
import RecommendedVideos from '../../components/RecommendedVideos/RecommendedVideos';

function Home() {
  return (
    <div className='main'>
        <SideBar className='sidebar' />
        <RecommendedVideos />
    </div>
)
}

export default Home