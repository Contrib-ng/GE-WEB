import React from 'react'
import LogInForm from '../components/loginpage/LogInForm'
import './styles/LogInpage.css'
import { Logo } from '../components/homepage/PrimaryHeader'
import ModalContextProvider from '../components/homepage/States'


const LogInpage = () => {
  return (
   <ModalContextProvider>
     <div className='LogInpage_Body' style={{ height: '100vh'}}>
     <Logo />
    <div className="LogInPage_Form">
    <LogInForm />
    </div>
    </div>
   </ModalContextProvider>
  )
}

export default LogInpage
