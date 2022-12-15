import React from 'react';
import './SingleVideoPage.css';
import Sidebar from '../../VideoPageComponents/Sidebar/Sidebar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SingleVideoPage() {
  return (
    <div className='video_page'>
        <div className='left_page'>
            <img src='./code_gif.gif' width="900px" height="500px"/>

            <div>
                <a href='http://medview-blog.com/'>Korean Drama</a>
                <h3>Alchemy Of Souls Season 2</h3>

                <div className='options'>
                    <p>2,645,561 views • May 28, 2020</p>
                    <div className='optionss'>
                        <div><ThumbUpAltOutlinedIcon/>65K</div>
                        <div><ThumbDownAltOutlinedIcon/>DISLIKE</div>
                        <div><ShareOutlinedIcon/>SHARE</div>
                        <div><VolunteerActivismOutlinedIcon/>THANKS</div>
                        <div><ContentCutOutlinedIcon/>CLIP</div>
                        <div><BookmarkAddOutlinedIcon/>SAVE</div>
                        <div><MoreHorizOutlinedIcon/></div>
                    </div>

                </div>
            </div>

            <div className='second-section'>
                <div><AccountCircleIcon className='profile_img'/></div>
                <div>
                    <p><b>Netflix<span><CheckCircleIcon className='tick'/></span></b></p>
                    <p>6.38M subscribers</p>
                    <p>Alchemy of Souls season 2is back and better! Do you wish to knw what happens? Watch the video above. I can't say much. Just do as I say</p>
                    <h6>SHOW MORE</h6>
                </div>
                <div className='ctas'>
                    <button className='cta1'>JOIN</button>
                    <button className='cta2'>SUBSCRIBE</button>

                </div>
            </div>
        </div>

        <Sidebar />

    </div>
  )
}

export default SingleVideoPage