import React from 'react'
import './styles/PrimaryHeader.css'
import SignUpModal from './SignUpModal'
import HomepageNavigation from '../navigations/HomepageNavigation'
import { useNavigate } from 'react-router'

export const Logo = (props) => {
  const navigate = useNavigate()
  return (
    <div className={props.classname}>
      <img src='images/3.png' alt='LOGO' onClick={() => navigate('/')}/>
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
