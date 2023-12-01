import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'
import lalogo from "./assets/laurel-apothecary-logo.png"
import './Header.css'
import SideBarMenu from './SideBarMenu';
import NavigationLine from './NavigationLine';


function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
  function toggleSidebar(){
      setIsSidebarOpen(prevState => !prevState)
  }

  return (
    <div className='header-container'>
      <Link to="/">
        <img src={lalogo} alt='laurel apothecary logo' className='logo-img'/>
      </Link>
      <NavigationLine />
      <div className='hamburger' onClick={toggleSidebar}>
        <Hamburger />
      </div>
      {isSidebarOpen && 
        <div className='sidebar-menu-container open close'>
          <SideBarMenu sideBarOpen={isSidebarOpen}/>
        </div>}
    </div>
  )
}

export default Header