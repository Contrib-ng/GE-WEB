import React, { useContext } from 'react'
import { ModalContext } from '../../States'
import './styles/ExpertGreetingBar.css'

const ExpertGreetingBar = () => {
  const context = useContext(ModalContext)
  const { currentLoggedInUser } = context
  return (
    <div className='ExpertGreetingBar_Body'>
    <div className="Greetings">
    <h1>Welcome, {currentLoggedInUser.lastName}</h1>
    <h6> +778 vacancies</h6>
    </div>
      <h6> Let's get you employed</h6>
    </div>
  )
}

export default ExpertGreetingBar
