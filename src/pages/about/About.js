import React from 'react'
import AboutHero from './About_hero'
import AboutmeContent from './Aboutme_content'
import AboutContact from './About_contact'

function About() {
  return (
    <div className='about-page-container'>
      <AboutHero />
      <AboutmeContent />
      <AboutContact />
    </div>
  )
}

export default About