import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Benefits from '../components/Benefits'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <div className='h-20 bg-white'></div> {/* Spacer */}
      <Footer />
    </>
  )
}

export default index