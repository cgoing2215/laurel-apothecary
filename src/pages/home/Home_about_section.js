import React from 'react'
import homeaboutimage from './assets/homepage-about-img-mobile.png'

function Home_about_section() {
  return (
    <div className='homepage-about-container'>
      <h1 className='homepage-about-headline'>
        Become your most complete self.
      </h1>
      <img src={homeaboutimage} alt='lauren acone headshot' className='homepage-about-headshot'/>
      <div className='homepage-about-text'>
        <p>
          Health is a word that gets thrown around often.
          It's one of the most popular conversation topics at the moment, and
          is frequently discussed in too simple - or “unhealthy” - of a way, 
          leaving out key elements to what makes up a full person. 
         </p>
         <p> 
          To me, health should be balanced and all-encompassing, weaving in an 
          ongoing dialogue of creative thought and care. 
        </p>
        {/* <p>
          My body's journey with health has been one of twists and turns. Through
          my own experience, I've seen the complexities and at times 
          abstract nature of health and how to most effectively nurture it.
          I believe people are sent to earth for different reasons,
          and mine has been to help people navigate this crazy thing we 
          call life, and become their best, healthiest selves. 
        </p> */}
      </div>
    </div>
  )
}

export default Home_about_section