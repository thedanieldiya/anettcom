import React, { useState } from 'react'
import './hero.css'
import { PokeArrow, HeroImg } from '../../assets'
import { ArrowBackRounded, ArrowForwardRounded, ChevronRightRounded, CloseRounded } from '@mui/icons-material';
import { Chip } from '@mui/material';



const TalkToUs = ({ onClick }) => {
  return (
    <span>
      <div className="hero__text-container__top" onClick={onClick}>
        <img className="hero__text-container__top-img" src={PokeArrow} alt="" />
        <h5 className='h5'>TALK TO US</h5>
        <h6 className='h6'>TALK TO US</h6>
      </div>
    </span>
  );
};

const options = ["Web Design & Development", "Mobile App", "Consulting", "Branding", "Training", "Software Development", "UI/UX", "Manage IT Services", "Others"];

const Modal = ({ onClose }) => {
  //Multi-select input
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorServices, setErrorServices] = useState('');

  const handleDelete = (option) => {
    setSelectedOptions(selectedOptions.filter(item => item !== option));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddOption = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
      setInputValue('');
      setErrorServices('');
    }
  };
  ///////////////////
  const [currentSection, setCurrentSection] = useState(1);

  const handleProceed = () => {
    if (currentSection === 1 && !name.trim()) {
      setErrorName('Please enter your name');
      return;
    }
    setErrorName('');

    if (currentSection === 2 && selectedOptions.length === 0) {
      setErrorServices('Please select at least one option');
      return;
    }
    setErrorServices('');

    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
    } else {
      // Handle form submission
      // You can submit the form data here
      // For demonstration, let's just close the modal
      onClose();
    }
  };

  const handleBack = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal__content-container">
          <div className="talk__header">
            <h2 style={{display: 'flex', gap: '0.5rem'}}>
              {currentSection > 1 && (
                <div className="talk__header-back" onClick={handleBack}>
                  <ArrowBackRounded />
                </div>
              )}Talk to us
              </h2>
            <div className="talk__header-close" onClick={onClose}>
              <p>Close</p>
              <CloseRounded />
            </div>
          </div>
          <div className="talk__body">
            {currentSection === 1 && (
              <>
                <p>Hi,</p>
                {/* <h2>Talk to us</h2> */}
                <form>
                  <div className="inputs">
                    <input 
                      type="text" 
                      placeholder="Tell us your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errorName && <p  style={{color: 'red', fontSize: '12px', marginTop: '0'}} className="error">{errorName}</p>}
                    <input
                      type="text"
                      placeholder="Your company/brand name (Optional)"
                    />
                  </div>
                </form>
              </>
            )}
            {currentSection === 2 && (
              <>
                <p>How can we help?</p>
                <h2>Please select all the services you need.</h2>
                {/* Multi-select Input */}
                <div>
                  <>
                  {options.map((option, index) => (
                    <Chip className='Chip'
                      key={index}
                      label={option}
                      clickable
                      outline
                      selected
                      // color={selectedOptions.includes(option) ? "primary" : "default"}
                      onClick={() => handleAddOption(option)}
                      onDelete={selectedOptions.includes(option) ? () => handleDelete(option) : undefined}
                      deleteIcon={selectedOptions.includes(option) ? <CloseRounded style={{color: 'white'}} /> : <></>}
                      style={{ 
                        margin: '4px', 
                        color: selectedOptions.includes(option) ? 'white' : 'var(--black-400)', 
                        border: selectedOptions.includes(option) ? '1.5px solid white' :  '1.5px solid var(--black-400)', 
                        fontFamily: 'var(--font-2)', 
                        background: selectedOptions.includes(option) ? 'linear-gradient(90deg, rgba(92, 157, 255, 1) 0%, rgba(19, 113, 255, 1) 100%)' : 'white' 
                      }}
                    />
                  ))}
                  </>
                  {errorServices && <p style={{color: 'red', fontSize: '12px'}} className="error">{errorServices}</p>}
                  <div className='multiselect'>
                    <textarea 
                      name="" 
                      id=""  
                      rows="3"
                      value={selectedOptions.join(', ')}
                      onChange={handleChange}
                    ></textarea>
                    <span onClick={() => setSelectedOptions([])}>Clear field</span>
                  </div>
                </div>
              </>
            )}
            {currentSection === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '2rem 0'}}>
                <h6 style={{ color: 'var(--black-400)'}}>We have recieved your enquiry</h6>
                <h2>Thank you!</h2>
                {/* <h6>We will reach you as soon as we can.</h6> */}
              </div>
            )}
            {currentSection < 3 && (
              <h6 style={{color: 'var(--black-300)', fontWeight: '500'}}>CLICK THE BUTTON BELOW OR PRESS ENTER</h6>
            )}
            
            
            {currentSection === 1 ? (
              <button className="gradient__bg form__btn" onClick={handleProceed}>
                PROCEED
                <ChevronRightRounded />
              </button>
            ) : currentSection === 2 ? (
              <button className="gradient__bg form__btn" onClick={handleProceed}>
                NEXT
                <ChevronRightRounded />
              </button>
            ) : (
              <div onClick={handleProceed} className='gradient__text cta__btn' style={{alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem', cursor: 'pointer'}}>BACK TO HOMEPAGE <ArrowForwardRounded/></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='hero section__padding'>
      <div className="hero__text">
        <h1>We grow your businesses with Tech</h1>
        <div className="hero__text-container">
          <div className="app">
            <TalkToUs onClick={handleButtonClick} />
            {showModal && <Modal onClose={handleCloseModal} />}
          </div>
          <p  className='p'>From software development and digital transformation to consulting and support. Trust us to bring your vision to life. Be it a new or an existing project!</p>
        </div>
      </div>
      <img className="hero__img" src={HeroImg} alt="" />
    </div>
  )
}

export default Hero
