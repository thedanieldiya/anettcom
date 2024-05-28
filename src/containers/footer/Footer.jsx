import React, { useEffect, useState } from 'react';
import './footer.css';
import { Anettcom } from '../../assets';
import { FacebookRounded, Instagram, LinkedIn, X, CloseRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';

const Footer = () => {
  const [input, setInput] = useState('');
  const [newsletter, setNewsletter] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    db.collection('newsletter').onSnapshot((snapshot) => 
      setNewsletter(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendNewsletter = (e) => {
    e.preventDefault();

    if (validateEmail(input)) {
      db.collection('newsletter').add({ 
        email: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }).then(() => {
        setInput('');
        setErrorMessage('');
        setIsPopupVisible(true);
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    } else {
      setErrorMessage('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const email = e.target.value;
    setInput(email);
    if (validateEmail(email)) {
      setIsButtonDisabled(false);
      setErrorMessage('');
    } else {
      setIsButtonDisabled(true);
      setErrorMessage('Please enter a valid email address.');
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className='footer section__padding'>
      <div className="footer__img">
        <Link to='/'><img src={Anettcom} alt="Anettcom" /></Link>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-us">
          <h6>Send us an email</h6><h6 className='h6__responsive'>:</h6>
          <a href="mailto:info@anettcom.com">info@anettcom.com</a>
        </div>
        <div className="footer__contact-us__newsletter">
          <h6>Subscribe to our newsletter</h6>
          <form action="" className='form' onSubmit={sendNewsletter}>
            <input 
              value={input} 
              onChange={handleInputChange} 
              className='form__input' 
              type="email" 
              placeholder='Enter your email address' 
            />
            <button 
              type="submit" 
              className='gradient__bg' 
              disabled={isButtonDisabled}
            >
              Subscribe Now
            </button>
          </form>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
      </div>
      <div className="footer__socials">
        <div className="icons"><FacebookRounded style={{backgroundColor: 'var(--bg-color)', color: 'white', borderRadius: '50%'}}/></div>
        <div className="icons"><X /></div>
        <div className="icons"><Instagram /></div>
        <div className="icons"><LinkedIn /></div>
      </div>
      <div className="footer__finisher">
        <div className="footer__finisher-pages">
          <Link to='services'><p>SERVICES</p></Link>
          <Link to='training'><p>TRAINING</p></Link>
          <Link to='software'><p>OUR SOFTWARE</p></Link>
        </div>
        <div className="footer__finisher-responsive">
          <p>© 2024 ANETTCOM TECHNOLOGIES</p>
          <p className='privacy__responsive'>PRIVACY POLICY</p>
        </div>
        <div className="footer__finisher-copyright">
          <p>© 2024 ANETTCOM TECHNOLOGIES</p>
        </div>
        <div className="footer__finisher-privacy">
          <p>PRIVACY POLICY</p>
        </div>
      </div>
      {isPopupVisible && (
        <div className='modal' style={{padding: '1rem'}}>
          <div className='pop-up modal-content'>
            <h4>Thank you for joining our newsletter</h4>
            {/* <button onClick={closePopup} className='talk__header-close'>Close</button> */}
            <div className="talk__header-close" onClick={closePopup}>
              <p>Close</p>
              <CloseRounded />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
