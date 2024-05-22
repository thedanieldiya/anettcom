import React, { useState } from 'react'
import './header.css'
import { AnettcomDark } from '../../assets'
import { Link, Outlet } from 'react-router-dom'
import { CloseRounded, MenuRounded, PhoneRounded } from '@mui/icons-material'
import Footer from '../footer/Footer'


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="header section__padding">
        <Link to='/'><img className='header__img' src={AnettcomDark} alt="Anettcom" /></Link>
        <div className="header__link-group">
          <div className="header__links">
            <Link to='services'><p>SERVICES</p></Link>
            <Link to='training'><p>TRAINING</p></Link>
            <Link to='software'><p>OUR SOFTWARE</p></Link>
          </div>
        </div>
        <div className="header__btn-group">
          <Link to='contactus' >
            <button className='header__btn gradient__bg'>
              <PhoneRounded />
              <>CONTACT US</>
            </button>
          </Link>
        </div>
        
        <div className="header__menu">
          {toggleMenu
            ? <CloseRounded style={{color: 'white'}} onClick={() => setToggleMenu(false)}/>
            :<MenuRounded style={{color: 'white'}} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="header__menu-container scale-up-center">
              <div className="header__menu-container__links">
                <Link to='services'><p>SERVICES</p></Link>
                <Link to='training'><p>TRAINING</p></Link>
                <Link to='software'><p>OUR SOFTWARE</p></Link>
                <Link to='contactus' >
                  <button className='header__btn gradient__bg'>
                    <PhoneRounded />
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Header