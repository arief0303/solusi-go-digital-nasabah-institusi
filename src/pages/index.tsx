import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Product from '../components/Product'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Product />
      <Footer />
    </>
  )
}

export default index