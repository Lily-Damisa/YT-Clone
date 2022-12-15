import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import SingleVideoPage from './pages/SingleVideoPage/SingleVideoPage';


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
      <BrowserRouter >
      {width <= 792 && !isCollapsed ? <div className='overlay'></div> : null}
        <Header width={width} handleToggler={handleToggler} />


        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="singlevideopage" element={<SingleVideoPage />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
