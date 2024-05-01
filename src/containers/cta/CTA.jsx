import React from 'react'
import './cta.css'
import { Arrow, CTAImg } from '../../assets'

const Cta = ({action}) => {
  return (
    <div>
      <div className="cta__action">
        <div className="cta__action-text">
          <h5 className='h5'>{action}</h5>
          <h6 className='h6'>{action}</h6>
          <img src={Arrow} alt="" />
        </div>
        <hr />
      </div>
    </div>
  )
}

const CTA = () => {
  return (
    <div className="section__padding">
      <div className="cta__container">
        <div className="cta__container-img">
          <img src={CTAImg} alt="" />
        </div>
        <div className="cta__container-text">
          <h2>Join us.</h2>
          <div className="cta__container-text__cta">
            <Cta action='Start your Project'/>
            <Cta action='Become an affiliate'/>
            <Cta action='Contact us'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA