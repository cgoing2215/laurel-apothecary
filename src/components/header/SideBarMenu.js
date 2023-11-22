import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

function SideBarMenu() {
  
    return (
        <div className='sidebar-menu-text'>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
    );
}

export default SideBarMenu