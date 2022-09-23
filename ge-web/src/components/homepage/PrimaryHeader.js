import React from 'react'
import './styles/PrimaryHeader.css'
import SignUpModal from './SignUpModal'
import HomepageNavigation from '../navigations/HomepageNavigation'

export const Logo = (props) => {
  return (
    <div className={props.classname}>
      <a href='/' >
      <img src='images/3.png' alt='LOGO'/>
      </a>
    </div>
  )
}

const PrimaryHeader = () => {
  return (
      <div className='PrimaryHeader_Body'>
      <SignUpModal />
      <HomepageNavigation />
    </div>
  )
}


export default PrimaryHeader
