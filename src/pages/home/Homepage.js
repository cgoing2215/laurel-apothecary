import React from 'react'
import HomeHero from './Home_hero'
import HomeAboutSection from './Home_about_section'
import HomeServicesSection from './Home_offerings_section'
import HomeConnectSection from './Home_connect_section'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
        <HomeHero />
        <HomeAboutSection />
        <HomeServicesSection />
        <HomeConnectSection />
    </div>
  )
}

export default Homepage