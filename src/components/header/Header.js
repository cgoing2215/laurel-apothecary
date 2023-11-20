import React from 'react';
import lalogo from "./assets/laurel-apothecary-logo.png"
import './Header.css'


function Header() {
  return (
    <div className='header-container'>
      <img src={lalogo} alt='laurel apothecary logo' className='logo-img'/>
      
    </div>
  )
}

export default Header