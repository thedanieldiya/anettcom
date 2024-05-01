import React from 'react';
import './industry.css';

const Industry = ({ icon, bgImg, title }) => {
  const industryStyle = {
    backgroundImage: `url(${bgImg})`,
    // transition: 'background-size 0.8s ease',
  };

  return (
    <div className="industry" style={industryStyle}>
      <div className="industry__content">
        <div className="industry__icon">
          <div className="icon__circle">
            <img src={icon} alt="" className=''/>
          </div>
        </div>
        <h6 className="industry__title">{title}</h6>
      </div>
    </div>
  );
};

export default Industry;
