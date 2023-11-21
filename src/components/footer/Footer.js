import React from 'react'
import instagramIcon from './icons/Instagram-icon.png'
import pinterestIcon from './icons/Pinterest-icon.png'
import facebookIcon from './icons/Facebook-icon.png'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='social-icons'>
        <img src={instagramIcon} alt='instagram icon'/>
        <img src={pinterestIcon} alt='pinterest icon'/>
        <img src={facebookIcon} alt='facebook icon'/>
      </div>
      <h4>Laurel Apothecary</h4>
    </div>
  )
}

export default Footer