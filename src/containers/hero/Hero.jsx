import React, { useState } from 'react'
import './hero.css'
import { PokeArrow, HeroImg, Anettcom } from '../../assets'
import { ArrowForwardRounded, ChevronLeftRounded, ChevronRightRounded, CloseRounded } from '@mui/icons-material';
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
    }
  };
  ///////////////////
  const [currentSection, setCurrentSection] = useState(1);

  const handleProceed = () => {
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
            <img src={Anettcom} alt="" />
            <div className="talk__header-close" onClick={onClose}>
              <p>Close</p>
              <CloseRounded />
            </div>
          </div>
          <div className="talk__body">
            {currentSection > 1 && (
              <div className="talk__header-close talk__header-back" onClick={handleBack}>
                <ChevronLeftRounded />
                <p>Back</p>
              </div>
            )}
            {currentSection === 1 && (
              <>
                <p>Hi,</p>
                <h2>Talk to us</h2>
                <form>
                  <div className="inputs">
                    <input type="text" placeholder="Tell us your name" />
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
                    <Chip
                      key={index}
                      label={option}
                      clickable
                      color={selectedOptions.includes(option) ? "primary" : "default"}
                      onClick={() => handleAddOption(option)}
                      onDelete={selectedOptions.includes(option) ? () => handleDelete(option) : undefined}
                      deleteIcon={selectedOptions.includes(option) ? <CloseRounded /> : <></>}
                      style={{ margin: '4px', color: 'white', border: '2px solid gray', fontFamily: 'var(--font-2)' }}
                      className={selectedOptions.includes(option) ? 'selected-chip' : ''}
                    />
                  ))}
                  </>
                  <div className='multiselect'>
                    <textarea 
                      name="" 
                      id="" 
                      // cols="10" 
                      rows="3"
                      value={selectedOptions.join(', ')}
                      onChange={handleChange}
                    ></textarea>
                    <p onClick={() => setSelectedOptions([])}>Clear field</p>
                    {/* <CloseRounded/> */}
                  </div>
                  
                  {/* <TextField
                    label="Describe your needs here."
                    variant="outlined"
                    // fullWidth
                    value={selectedOptions.join(', ')}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={() => setSelectedOptions([])}>
                          <CloseRounded />
                        </IconButton>
                      ),
                      style: {
                        '&:hover': {
                          border: 'none',
                          outline: 'none', 
                          margin: '1rem',
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: 'var(--font-2)', 
                        fontSize: '12px',
                        color: 'gray',
                        paddingLeft: '1rem',
                      },
                    }}
                  /> */}
                </div>
              </>
            )}
            {currentSection === 3 && (
              <>
                <h6>We have recieved your enquiry</h6>
                <h2>Thank you!</h2>
                <h6>We will reach you as soon as we can.</h6>
              </>
            )}
            {currentSection < 3 && (
              <h6>CLICK THE BUTTON BELOW OR PRESS ENTER</h6>
            )}
            
            <button className="gradient__bg form__btn" onClick={handleProceed}>
              {currentSection === 1 ? (
                <>
                  PROCEED
                  <ChevronRightRounded />
                </>
              ) : currentSection === 2 ? (
                <>
                  NEXT
                  <ChevronRightRounded />
                </>
              ) : (
                <>BACK TO HOMEPAGE <ArrowForwardRounded/></>
              )}
            </button>
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
