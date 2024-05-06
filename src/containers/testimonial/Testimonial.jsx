import React from 'react'
import './testimonial.css'
import { Arrow, AyoMartin } from '../../assets'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className="testimonial__text">
        <p className="testimonial__text-quotes gradient__text">""</p>
        <h4>Our vision is to be your technology solutions provider of choice.</h4>
        <div className="testimonial__text-cta cta__btn">
          <p className=' gradient__text'>GET STARTED HERE </p>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="testimonial__card">
        <div className="testimonial__card-testimony">
          <p>"We signed up with Anettcom as our technology partner in 2022 and the experience has been fantastic. They captured the excellent meals at an amazing pocket friendly price that we offer."</p>
        </div>
        <div className="testimonial__card-testifier">
          <div className="testimonial__card-testifier__details">
            <h6>Ayodele Martins</h6>
            <p>CEO, Kafeteria</p>
          </div>
          <img src={AyoMartin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial