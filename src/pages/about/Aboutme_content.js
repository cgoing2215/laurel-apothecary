import React from 'react'
import './About.css'
import aboutHeadshot from './assets/About-page-headshot.png'

function Aboutme_content() {
  return (
    <div className='aboutme-section'>
      <div className='aboutme-headshot'>
        <h1>
          About Me
        </h1>
        <img src={aboutHeadshot} alt='lauren acone headshot'/>
      </div>
      <div className='aboutme-text'>
        <h3>Hi, I'm Lauren Elizabeth</h3>
        <p>
          I’m a reiki healer, spiritual and wellness coach 
          and an intuitive event planner currently residing in NYC. 
         </p>
      </div>
      <div>
         <p> 
         Laurel (Laurus nobilis, Family Lauraceae) is a beautiful 
         shrub that has been used over the centuries. It is a plant 
         medicine with antioxidant properties that aids in digestion. 
         My name, Lauren, derives from Laurel. It is truly fitting 
         that this beautiful plant supports digestion, the place 
         where my intuitive journey began. 

        </p>
      </div>
      <div>
        <p> 
          I have explored among the spiritual realm since I was little, 
          but took the leap to learn about different methods and discover 
          how spirituality and healing modalities can support your mind 
          and body in everyday life, specifically in your health.
        </p>
      </div>
        <button className='aboutme-worktogether-button'>
          SEE HOW WE CAN WORK TOGETHER
        </button>
      <div>
        <p> 
          My health journey started three years ago when I decided to go 
          vegan. Not only was it for the benefit of the environment but 
          also for me to be and feel “healthier”. Many friends had tried 
          this vegan diet with great success; it was a diet I had researched 
          to discover so many benefits; and, most importantly, a diet my 
          body could NOT handle. In fact, I discovered my body has an 
          intolerance to legumes, raw vegetables, and gluten (most of 
          the vegan food groups). 
        </p>
        <p>
          These discoveries quickly lead to depression and increased body 
          dysmorphia. Doctors didn’t know how to help, saying it was only 
          IBS, so I turned to spiritual healing modalities. What I discovered 
          was that every body is different and needs different things to not 
          only be “healthy,” but thrive.
        </p>
      </div>
    </div>
  )
}

export default Aboutme_content