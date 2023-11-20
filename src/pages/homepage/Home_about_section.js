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
          Health is a word that gets thrown round quite often 
          in many different circles. Whether it’s at work, with 
          friends, at a doctors office or at home with family; 
          it is one of the most brought up conversation topics, 
          usually, in the most “unhealthy” way. To me, health is 
          multitiered and my journey with what healthy for my body 
          has been a roller-coaster to say the least.
        </p>
        <p>
          I truly believe people are sent to earth for different reasons
          and mine is to help individuals navigate this crazy thing we 
          call life and become our best selves. So, how can I help you?
        </p>
      </div>
    </div>
  )
}

export default Home_about_section