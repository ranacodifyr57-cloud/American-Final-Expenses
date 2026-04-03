import React from 'react'
import HeroForm from '../components/hero/HeroForm'
import Features from '../components/feature/Features'
import Carriers from '../components/carriers/Carriers'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroForm />
      <Features />
      <Carriers />
      <Testimonials />
    </div>
  )
}

export default Home
