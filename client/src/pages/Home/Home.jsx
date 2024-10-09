import React from 'react';
import '../../App.css';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';

const Home = () => {
  return (
    <body>
     <div className='home-container-1'>
      <LeftSidebar />
      
      <div className='home-container-2'>
          <div className='home-container-3'><HomeMainbar /></div>
          <RightSidebar />
      </div>
    </div>
    </body>
  )
}

export default Home