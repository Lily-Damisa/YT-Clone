import React from 'react';
import Filter from '../Filters/Filter';
import Siderow from '../Siderow/Siderow';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sbar'>
        <Filter />
        <div className='side_bar'>
            <Siderow
                img="./maxresdefault.jpg"
                title="Git Tutorial for Beginners"
                channel="Tech With Tim"
                duration="43:06"
                views="603K views"
                timestamp="2 years ago"
            />

            <Siderow
                img="./maxresdefault.jpg"
                title="Git vs. Github: What's the difference?"
                channel="IBM Technology"
                duration="10:06"
                views="236K views"
                timestamp="2 years ago"
            />

            <Siderow
                img="./maxresdefault.jpg"
                title="Git & Github Crash Course for beginners"
                channel="Traversy Media"
                duration="32:42"
                views="2.9M views"
                timestamp="5 years ago"
            />

            <Siderow
                img="./maxresdefault.jpg"
                title="Alchemy Of Souls"
                channel="Showmax"
                duration="43:06"
                views="603K views"
                timestamp="2 years ago"
            />

            <Siderow
                img="./maxresdefault.jpg"
                title="Git Tutorial for Beginners"
                channel="Tech With Tim"
                duration="43:06"
                views="603K views"
                timestamp="2 years ago"
            />
        </div>
    </div>
  )
}

export default Sidebar