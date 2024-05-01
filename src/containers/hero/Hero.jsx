import React from 'react'
import './hero.css'
import { PokeArrow, HeroImg } from '../../assets'

const Hero = () => {
  return (
    <div className='hero section__padding'>
      <div className="hero__text">
        <h1>We grow your businesses with Tech</h1>
        <div className="hero__text-container">
          <div className="hero__text-container__top">
            <img className="hero__text-container__top-img" src={PokeArrow} alt="" />
            <h5 className='h5'>TALK TO US</h5>
            <h6 className='h6'>TALK TO US</h6>
          </div>
          <p  className='p'>From software development and digital transformation to consulting and support. Trust us to bring your vision to life. Be it a new or an existing project!</p>
        </div>
      </div>
      <img className="hero__img" src={HeroImg} alt="" />
    </div>
  )
}

export default Hero