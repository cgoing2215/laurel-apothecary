import React from 'react'
import { Link } from 'react-router-dom'
import reikitileimage from './assets/reiki-tile-img.jpeg'
import eventsimage from './assets/events-tile-img.jpg'
import spiritualofferingimage from './assets/spiritualofferings-tile-img.jpg'
import wellnesscoachingimage from './assets/wellnesscoaching-tile-img.jpg'

function Homepage_offerings_section() {
  return (
    <div className='homepage-offerings-container'>
      <h1 className='homepage-offerings-headline'>
        Offerings
      </h1>
      <div className='homepage-offerings-gallery'>
        <div className='offering-tile'>
          <img src={reikitileimage} alt=''/>
          <h5>Reiki</h5>
        </div>
        <div className='offering-tile'>
          <img src={eventsimage} alt=''/>
          <h5>Events</h5>
        </div>
        <div className='offering-tile'>
          <img src={spiritualofferingimage} alt=''/>
          <h5>Spiritual Offerings</h5>
        </div>
        <div className='offering-tile'>
          <img src={wellnesscoachingimage} alt=''/>
          <h5>Wellness Coaching</h5>
        </div>
      </div>
      <div className='homepage-offerings-button-container'>
        <Link to="/services">
          <button>LEARN MORE</button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage_offerings_section