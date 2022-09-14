import React from 'react'
import Experts from '../components/homepage/Experts'
import PrimaryHeader from '../components/homepage/PrimaryHeader'
import SecondaryHeader from '../components/homepage/SecondaryHeader'
import Testimonials from '../components/homepage/Testimonials'
import TopBody from '../components/homepage/TopBody'
import WhyGetEmployed from '../components/homepage/WhyGetEmployed'

const Homepage = () => {
  return (
    <div className='Homepage_Body'>
      <PrimaryHeader />
      <SecondaryHeader />
      <TopBody />
      <Experts />
      <WhyGetEmployed />
      <Testimonials />  
    </div>
  )
}

export default Homepage
