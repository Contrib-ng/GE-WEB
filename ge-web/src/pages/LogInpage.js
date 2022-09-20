import React from 'react'
import LogInForm from '../components/loginpage/LogInForm'
import './styles/LogInpage.css'
import { Logo } from '../components/homepage/PrimaryHeader'
import ModalSignUpContextProvider from '../components/homepage/States'


const LogInpage = () => {
  return (
   <ModalSignUpContextProvider>
     <div className='LogInpage_Body' style={{ height: '100vh'}}>
    <Logo />
    <div className="LogInPage_Form">
    <LogInForm />
    </div>
    </div>
   </ModalSignUpContextProvider>
  )
}

export default LogInpage
