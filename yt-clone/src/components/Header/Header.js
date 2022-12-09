import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/NotificationsActive';
import Avatar from '@mui/icons-material/AccountCircle';
import MicIcon from '@mui/icons-material/Mic';
import './Header.css';


function Header() {
  return (
    <div className='header'>
        <div className='left-header'>
            <MenuIcon />
            <Link to="/">
                <img 
                className='youtube-logo'
                src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                alt='Youtube'
                width= '50px'
                height= '100px'
                />
            </Link>
        </div>

        <div className="center-header">
            <input type='text' placeholder='Search' />
            <SearchIcon className='search-btn' />            
        </div>

            <MicIcon className='mic'/>

        <div className="right-header">
            <VideoCallIcon className='header-icon' /> 
            <NotificationsIcon className='header-icon' /> 
            <Avatar 
                alt='Lilian Damisa'
                src='https://www.flaticon.com/free-icons/user'
            />
        </div>
    </div>
  )
}

export default Header;