import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'
import lalogo from "./assets/laurel-apothecary-logo.png"
import './Header.css'
import SideBarMenu from './SideBarMenu';


function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
  function toggleSidebar(){
      setIsSidebarOpen(prevState => !prevState)
      console.log(`sidebar open set to ${isSidebarOpen}`)
  }

  return (
    <div className='header-container'>
      <Link to="/">
        <img src={lalogo} alt='laurel apothecary logo' className='logo-img'/>
      </Link>
      <div className='hamburger' onClick={toggleSidebar}>
        <Hamburger />
      </div>
      {isSidebarOpen && 
        <div className='sidebar-menu-container'>
          <SideBarMenu/>
        </div>}
    </div>
  )
}

export default Header