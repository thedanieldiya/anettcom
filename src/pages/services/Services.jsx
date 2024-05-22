import React from 'react'
import './services.css'
import { Arrow, Bank, CoinCog, Jet, ServiceHero } from '../../assets'
import { CTA } from '../../containers'
import { Link } from 'react-router-dom'

const Section = ({icon, title}) => {
  return (
    <div className="section">
      <img src={icon} alt="" />
      <h3>{title}</h3>
    </div>
  )
}

const ServiceCard = ({title, subtitle, route}) => {
  return (
    <div className="serviceCard">
      <h5>{title}</h5>
      <p>{subtitle}</p>
      <Link to={route}><img src={Arrow} alt="" /></Link>
    </div>
  )
  
}

const Services = () => {
  return (
    <div className='services'>
      <div className="services__hero  section__padding">
        <h2>Tech & Software solutions engineered to set businesses apart.</h2>
        <div className="services__hero-imgCon">
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '60%',
              backgroundColor: 'var(--bg-color)',
              borderRadius: '30px',
            }}
          />
          <div className="services__hero-img">
            <img src={Jet} alt="" style={{width: '120px', objectFit: 'contain'}}/>
            <img src={CoinCog} alt="" style={{width: '50px', objectFit: 'contain'}}/>
            <img src={ServiceHero} alt="" style={{width: '40%', objectFit: 'contain'}}/>
          </div>
          
        </div>
      </div>
      <div className="section1 section__padding">
        <Section icon={CoinCog} title='Business Transformation Services'/>
        <div className="sections">
          <ServiceCard title='Website Development' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.' route='/services/web_development'/>
          <ServiceCard title='Digital Marketing' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='Brand Development' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='Project Rescue' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='Consultation' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='Staff Training' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
        </div>
      </div>
      <div className="section2 section__padding">
        <Section icon={Jet} title='Product Engineering Services'/>
        <div className="sections">
          <ServiceCard title='Product Development' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='App Development' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='Custom Development' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
        </div>
      </div>
      <div className="section3 section__padding">
        <Section icon={Bank} title='For Startups'/>
        <div className="sections">
          <ServiceCard title='Discovery Stage' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='Full-Cycle Development' subtitle='Get modern websites that are super fast and responsive. A perfect fit for your online business growth plans.'/>
          <ServiceCard title='Smart Teams' subtitle='Extend your IT teams.'/>
        </div>
      </div>
      <CTA />
    </div>
  )
}

export default Services