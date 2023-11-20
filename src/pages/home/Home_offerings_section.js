import React from 'react'

function Homepage_offerings_section() {
  return (
    <div className='homepage-offerings-container'>
      <h1 className='homepage-offerings-headline'>
        Offerings
      </h1>
      <div className='homepage-offerings-gallery'>
        <div className='offering-tile'>
          <img alt=''/>
          <h5>Reiki</h5>
        </div>
        <div className='offering-tile'>
          <img alt=''/>
          <h5>Events</h5>
        </div>
        <div className='offering-tile'>
          <img alt=''/>
          <h5>Spiritual Offerings</h5>
        </div>
        <div className='offering-tile'>
          <img alt=''/>
          <h5>Wellness Coaching</h5>
        </div>
      </div>
      <div className='homepage-offerings-button-container'>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}

export default Homepage_offerings_section