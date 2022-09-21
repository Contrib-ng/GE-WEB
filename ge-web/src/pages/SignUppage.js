import React from 'react'
import { Logo } from '../components/homepage/PrimaryHeader'
import ClientSignUpForm from '../components/signuppage/ClientSignUpForm'
import './styles/SignUppage.css'

export const ClientSignUppage = () => {
  return (
    <div className='ClientSignUppage_Body'>
    <Logo classname="PrimaryHeader_Logo"/>
      <div className="ClientSignUppage_Form">
      <ClientSignUpForm />
      </div>
    </div>
  )
}
