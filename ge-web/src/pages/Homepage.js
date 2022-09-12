import React from 'react'
import PrimaryHeader from '../components/homepage/PrimaryHeader'
import SecondaryHeader from '../components/homepage/SecondaryHeader'
import TopBody from '../components/homepage/TopBody'
import './styles/Homepage.css'

const Homepage = () => {
  return (
    <div className='Homepage_Body'>
      <PrimaryHeader />
      <SecondaryHeader />
      <TopBody />
    </div>
  )
}

export default Homepage
