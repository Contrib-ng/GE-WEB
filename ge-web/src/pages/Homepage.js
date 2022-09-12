import React from 'react'
import PrimaryHeader from '../components/homepage/PrimaryHeader'
import SecondaryHeader from '../components/homepage/SecondaryHeader'
import './styles/Homepage.css'

const Homepage = () => {
  return (
    <div className='Homepage_Body'>
      <PrimaryHeader />
      <SecondaryHeader />
    </div>
  )
}

export default Homepage
