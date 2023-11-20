import React from 'react'
import Hero from './Hero'
import HomeAboutSection from './Home_about_section'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
        <Hero />
        <HomeAboutSection />
    </div>
  )
}

export default Homepage