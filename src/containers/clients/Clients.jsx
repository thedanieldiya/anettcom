import React from 'react'
import './clients.css'
import { AUEde, EmmicBeth, FirstFoundation, Lautech, PreCorUni } from '../../assets'

const Clients = () => {
  return (
    <div className='clients section__padding'>
      <div className="clients__container">
        <img src={EmmicBeth} alt="EmmicBeth" />
        <img src={FirstFoundation} alt="First Foundation Schools" />
        <img src={Lautech} alt="Ladoke Akintola University of Technology, Ogbomoso" />
        <img src={AUEde} alt="Adeleke University, Ede" />
        <img src={PreCorUni} alt="Precious Cornerstone University" />
      </div>
    </div>
  )
}

export default Clients