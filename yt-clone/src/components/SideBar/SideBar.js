import React from 'react';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SideRow from '../SideRow/SideRow';
import Camera from '@mui/icons-material/Camera';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <SideRow selected Icon={HomeIcon} title='Home' />
        <SideRow Icon={Camera} title='Shorts' />
        <SideRow Icon={SubscriptionsIcon} title='Subscription' />
        <hr />
        <SideRow Icon={VideoLibraryIcon} title='Library' />
        <SideRow Icon={HistoryIcon} title='History' />
        <SideRow Icon={OndemandVideoIcon} title='Your Videos' />
        <SideRow Icon={WatchLaterIcon} title='Watch Later' />
        <SideRow Icon={ThumbUpIcon} title='Liked Videos' />
        <hr />
        <h5>SUBSCRIPTIONS</h5>
        <hr />
        <h5>EXPLORE</h5>
        <SideRow Icon={WhatshotIcon} title='Trending' />
        <SideRow Icon={MusicNoteIcon} title='Music' />
        <SideRow Icon={SportsEsportsIcon} title='Gaming' />
        <SideRow Icon={NewspaperIcon} title='News' />
        <SideRow Icon={SportsSoccerIcon} title='Sports' />
        <hr />
    </div>
  )
}

export default SideBar