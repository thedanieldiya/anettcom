import React, { useState } from 'react'
import './cta.css'
import { Arrow, CTAImg } from '../../assets'
import { Link } from 'react-router-dom'
import Modal from '../../components/modal/Modal'

const Cta = ({action, route, onClick}) => {
  return (
    <div>
      <div className="cta__action">
        <div className="cta__action-text  cta__btn" onClick={onClick}>
          <Link to={route}>
            <h5 className='h5'>{action}</h5>
            <h6 className='h6'>{action}</h6>
            <img src={Arrow} alt="" /></Link>
        </div>
        <hr />
      </div>
    </div>
  )
}

const CTA = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="section__padding">
      <div className="cta__container">
        <div className="cta__container-img">
          <img src={CTAImg} alt="" />
        </div>
        <div className="cta__container-text">
          <h2>Join us.</h2>
          <div className="cta__container-text__cta">
            <div className="">
              <Cta action='Start your Project' onClick={handleButtonClick}/>
              {showModal && <Modal onClose={handleCloseModal} />}
            </div>
            <Cta action='Become an affiliate' target="_blank" route='https://forms.gle/k7Wdm33cD471VuJu6'/>
            <Cta action='Contact us' route='contactus'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA