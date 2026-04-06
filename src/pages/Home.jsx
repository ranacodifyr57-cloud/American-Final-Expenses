import React from 'react'
import HeroForm from '../components/hero/HeroForm'
import Features from '../components/feature/Features'
import Carrier from '../components/carriers/Carrier'
import Testimonials from '../components/Testimonials/Testimonials'


const Home = () => {
  return (
    <div>
      <HeroForm />
      <Features />
      <Carrier />
      <Testimonials />
    </div>
  )
}

export default Home
