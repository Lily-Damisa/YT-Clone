import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';


function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // For the SideBar
  const handleToggler = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    setIsCollapsed(false);
  }, []);
  const getWidth = () => {
    return window.innerWidth;
  };
  useEffect(() => {
    function handleWindowResize() {
      setWidth(getWidth());
      if (width <= 792) {
        setIsCollapsed(false);
      }
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    
    <div className="App">
      <BrowserRouter>
      {width <= 792 && !isCollapsed ? <div className='overlay'></div> : null}
        <Header width={width} handleToggler={handleToggler} />
        <Routes className='main'>
          <Route path='/' element={<SideBar width={width} handleToggler={handleToggler} isCollapsed={isCollapsed} />} />
          <Route path='/' element={<RecommendedVideos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
