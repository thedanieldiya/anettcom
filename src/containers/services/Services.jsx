import React, { useState } from 'react'
import './services.css'
import { ServiceTag } from '../../components'


const Dev = () => {
  return (
    <> 
      <ServiceTag title='WEB DESIGN & DEVELOPMENT' subtitle='With expertise in cutting-edge technologies, we deliver robust web development solutions that cater to diverse business needs.' cta='Hire us' />
      <hr></hr>
      <ServiceTag title='UI/UX' subtitle='Our skilled designers create visually appealing and intuitive user interfaces, focusing on enhancing user experiences.' cta='Hire us' />
      <hr></hr>
      <ServiceTag title='MOBILE APPLICATION' subtitle='Tap into our comprehensive mobile application development services, crafting innovative and user-friendly mobile applications.' cta='Build App' />
      <hr></hr>
      <ServiceTag title='BRANDING' subtitle='We connect you to your customers with design experiences that drive growth and increases revenue.' cta='Hire us' />
      <hr></hr>
    </>
  )
};

const Software = () => {
  return (
    <>
      <ServiceTag title='SOFTWARE DEVELOPMENT' subtitle='We provide services on software customization, integration of modules and more to help stay ahead of competitors.' cta='Hire us' />
      <hr></hr>
      <ServiceTag title='SCHOOL MANAGEMENT' subtitle='Our leading school management solutions are tailored to easily manage class schedules, and handle grading all in one place.' cta='Book a Demo' />
      <hr></hr>
      <ServiceTag title='PAVICOOP' subtitle='A fully integrated cloud cooperative management system that delivers the conventional cloud based banking solutions.' cta='Book a Demo' />
      <hr></hr>
      <ServiceTag title='LETPLUS' subtitle='Our leading school management solutions are tailored to easily manage class schedules, and handle grading all in one place..' cta='Book a Demo' />
      <hr></hr>
    </>
  )
};

const Training = () => {
  return (
    <>
      <ServiceTag title='CORPORATE TRAINING' subtitle='Empowering your team with the technical skills to drive business success.' cta='Get Started' />
      <hr></hr>
      <ServiceTag title='WEB DESIGN & DEVELOPMENT' subtitle='Learning management systems, online learning marketplaces, corporate learning portals, virtual classrooms.' cta='Register now' />
      <hr></hr>
    </>
  )
};

const Services = () => {
  const [activeComponent, setActiveComponent] = useState('dev');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dev':
        return <Dev />;
      case 'software':
        return <Software />;
      case 'training':
        return <Training />;
      default:
        return <Dev />; 
    }
  };

  return (
    <div className='services'>
      <div className="services__header section__padding">
        <h2 >Our Services</h2>
        <div className="services__header-links">
          <button onClick={() => setActiveComponent('dev')} className={activeComponent === 'dev' ? 'gradient__bg grad' : 'grad2'}><p>Design & Development</p></button>
          <button onClick={() => setActiveComponent('software')} className={activeComponent === 'software' ? 'gradient__bg grad' : 'grad2'}><p>Software</p></button>
          <button onClick={() => setActiveComponent('training')} className={activeComponent === 'training' ? 'gradient__bg grad' : 'grad2'}><p>Training</p></button>
        </div>
      </div>
      <div className="services__container section__padding">
        {renderComponent()}
      </div>
    </div>
  )
}

export default Services