import React from 'react'
import './footer.css'
import { Anettcom } from '../../assets'
import { FacebookRounded, Instagram, LinkedIn, X } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer__img">
      <Link to='/'><img src={Anettcom} alt="Anettcom" /></Link>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-us">
          <h6>Send us an email</h6>
          <a href="mailto:info@anettcom.com">info@anettcom.com</a>
        </div>
        <div className="footer__contact-us__newsletter">
          <h6>Subscribe to our newsletter</h6>
          <form action="">
            <input type="email" placeholder='Enter your email address' />
            <button type="submit" className='gradient__bg'>Subcribe Now</button>
          </form>
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
    </div>
  )
}

export default Footer