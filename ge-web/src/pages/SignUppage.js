import React from 'react'
import { Logo } from '../components/homepage/PrimaryHeader'
import BothSignUpForm from '../components/signuppage/BothSignUpForm'
import ClientSignUpForm from '../components/signuppage/ClientSignUpForm'
import ExpertSignUpForm from '../components/signuppage/ExpertSignUpForm'
import './styles/SignUppage.css'

const ClientSignUppage = () => {
  return (
    <div className='ClientSignUppage_Body'>
    <Logo classname="PrimaryHeader_Logo"/>
      <div className="ClientSignUppage_Form">
      <ClientSignUpForm />
      </div>
    </div>
  )
}

const ExpertSignUppage = () => {
  return (
    <div className="ExpertSignUppage_Body">
    <Logo className="PrimaryHeader_Logo" />
    <div className="ExpertSignUppage_Form">
      <ExpertSignUpForm />
    </div>
  </div>
  )
}

const BothSignUppage = () => {
  return (
    <div className="BothSignUppage_Body">
    <Logo className="PrimaryHeader_Logo" />
    <div className="BothSignUppage_Form">
      <BothSignUpForm />
    </div>
  </div>
  )
}

export { ClientSignUppage, ExpertSignUppage, BothSignUppage }
