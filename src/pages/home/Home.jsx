import React from 'react'
import './home.css'
import { Hero, Clients, Services, Industries, Testimonial, CTA, Footer } from '../../containers'

const Home = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Services />
      <Industries />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home