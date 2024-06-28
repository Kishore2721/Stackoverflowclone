import React from 'react';
import './LeftSidebar.css';
import {NavLink} from 'react-router-dom';
import globe from "../../assets/globe.svg";

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
          <nav className='left-nav'>
              <NavLink to='/' className='left-nav-links' activeClass='active'>
                <p>Home</p>
              </NavLink>
              <div className='leftside-nav-div'>
                   <div><p>PUBLIC</p></div>
                   <NavLink to='/Questions' className='left-nav-links' activeClass='active' >
                    <img src={globe} alt='globe' width={15} />
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                   </NavLink>
                   <NavLink to='/Tags'  className='left-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
                       <p>Tags</p>
                   </NavLink>
                   <NavLink to='/Users'  className='left-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
                        <p>Users</p>
                    </NavLink>
              </div>
          </nav>
    </div>
  )
}

export default LeftSidebar