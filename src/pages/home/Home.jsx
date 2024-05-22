import React from 'react'
import './home.css'
import { Hero, Clients, Services, Industries, Testimonial, CTA } from '../../containers'

const Home = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Services />
      <Industries />
      <Testimonial />
      <CTA />
    </div>
  )
}

export default Home