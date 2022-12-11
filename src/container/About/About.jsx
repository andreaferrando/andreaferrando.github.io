import React from 'react'
import { images } from '../../constants'
import './About.scss'


const About = () => {
  return (
    <section className="about" id="about">
      <div className="container-wrapper">
        <div className='picture-container'>
          <img src={images.profile} title="profile picture" alt="profile_picture"/>
        </div>
        <div className='text-container'>
          <h1>About IO</h1>
        <div className='empty-line'/>
          <h2>London based emerging singer songwriter IO describes his music as a classical power ballads. <br/>
          His influences range from italian and british pop music, musicals and soul. 
          IO's style derives from his italian roots and mid-late century melancholic artists. <br/>
His main objective is to make an impact on people's life touching sensitive topics in his songs. <br/>
As member of the LGBT+ community he always wanted to help people that are living difficult times because of discrimination. 
          </h2>
        </div>
      </div> 
    </section>
  )
}

export default About