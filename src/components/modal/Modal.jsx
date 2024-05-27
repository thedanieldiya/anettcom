import React, { useState, useEffect } from 'react';
import { ArrowBackRounded, ArrowForwardRounded, ChevronRightRounded, CloseRounded } from '@mui/icons-material';
import { Chip } from '@mui/material';
import './modal.css'
import firebase from 'firebase/compat/app';
import { db } from '../../firebase';

const options = ["Web Design & Development", "Mobile App", "Consulting", "Branding", "Training", "Software Development", "UI/UX", "Manage IT Services", "Others"];

const Modal = ({ onClose }) => {
  // Multi-select input
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorServices, setErrorServices] = useState('');
  const [talkToUs, setTalkToUs] = useState([]);

  useEffect(() => {
    db.collection('talkToUs').onSnapshot((snapshot) => 
      setTalkToUs(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    )
  }, []);

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

  const [currentSection, setCurrentSection] = useState(1);

  const handleProceed = (e) => {
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
      e.preventDefault();

      db.collection('talkToUs').add({
        name: name,
        company: companyName,
        services: selectedOptions.join(', '),

        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
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
            <h2 style={{ display: 'flex', gap: '0.5rem' }}>
              {currentSection > 1 && (
                <div className="talk__header-back" onClick={handleBack}>
                  <ArrowBackRounded />
                </div>
              )}
              Talk to us
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
                <form>
                  <div className="inputs">
                    <input 
                      type="text" 
                      placeholder="Tell us your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errorName && <p style={{color: 'red', fontSize: '12px', marginTop: '0'}} className="error">{errorName}</p>}
                    <input
                      type="text"
                      placeholder="Your company/brand name (Optional)"
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                    />
                  </div>
                </form>
              </>
            )}
            {currentSection === 2 && (
              <>
                <p>How can we help?</p>
                <h2>Please select all the services you need.</h2>
                <div>
                  {options.map((option, index) => (
                    <Chip className='Chip'
                      key={index}
                      label={option}
                      clickable
                      outline
                      selected
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
                <h6 style={{ color: 'var(--black-400)'}}>We have received your enquiry</h6>
                <h2>Thank you!</h2>
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
              <div onClick={handleProceed} className='gradient__text cta__btn final__home' >BACK TO HOMEPAGE <ArrowForwardRounded/></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal
