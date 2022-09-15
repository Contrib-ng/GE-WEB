import React from 'react'
import Experts from '../components/homepage/Experts'
import Footer from '../components/homepage/Footer'
import LessOfficeWork from '../components/homepage/LessOfficeWork'
import PrimaryHeader from '../components/homepage/PrimaryHeader'
import SecondaryHeader from '../components/homepage/SecondaryHeader'
import Testimonials from '../components/homepage/Testimonials'
import TopBody from '../components/homepage/TopBody'
import WhyGetEmployed from '../components/homepage/WhyGetEmployed'
import './styles/Homepage.css'

const Homepage = () => {
  return (
    <div className='Homepage_Body' style={{ width: '100%', overflow: 'hidden'}}>
      <PrimaryHeader />
      <SecondaryHeader />
      <TopBody />
      <Experts />
      <WhyGetEmployed />
      <Testimonials />  
      <LessOfficeWork />
      <Footer />
    </div>
  )
}

export default Homepage
