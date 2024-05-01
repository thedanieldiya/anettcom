import React from 'react';
import './serviceTag.css';
import { Arrow2, Arrow } from '../../assets';

const ServiceTag = ({ title, subtitle, cta }) => {
  return (
    <div className='serviceTag'>
      <h5 className='h5'>{title}</h5>
      <h6 className='h6'>{title}</h6>
      <div className="serviceTag__body">
        <p>{subtitle}</p>
        <div className="serviceTag__body-cta gradient__text">
          <p>{cta}</p>
          <img src={Arrow} alt="" className='arrow'/>
          <img src={Arrow2} alt="" className='arrow2'/>
        </div>
      </div>
    </div>
  );
}

export default ServiceTag;
