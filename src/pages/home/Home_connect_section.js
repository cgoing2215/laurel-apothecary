import React from 'react'
import { Link } from 'react-router-dom'

function Homepage_connect_section() {
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
            CONTACT ME
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage_connect_section