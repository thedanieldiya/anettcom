import React from 'react';
import './serviceTag.css';
import { Arrow2, Arrow } from '../../assets';
import { Link } from 'react-router-dom';

const ServiceTag = ({ title, subtitle, cta, route }) => {
  return (
    <div className='serviceTag'>
      <h5 className='h5'>{title}</h5>
      <h6 className='h6'>{title}</h6>
      <div className="serviceTag__body">
        <p>{subtitle}</p>
        <Link to={route}>
          <div className="serviceTag__body-cta gradient__text cta__btn">
            <p>{cta}</p>
            <img src={Arrow} alt="" className='arrow'/>
            <img src={Arrow2} alt="" className='arrow2'/>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default ServiceTag;
