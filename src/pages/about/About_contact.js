import React from 'react'
import { Link } from 'react-router-dom'

function About_contact() {
  return (
    <div className='homepage-connect-container'>
    <h1 className='homepage-connect-headline'>
      Connect
    </h1>
    <div className='homepage-connect-image-container'>
      <h3>
        If you are interested in working together on this journey, 
        don’t hesitate to get in touch.
      </h3>
      <Link to='/contact'>
        <button className='homepage-contact-button'>
          WORK WITH ME
        </button>
      </Link>
    </div>
  </div>
  )
}

export default About_contact