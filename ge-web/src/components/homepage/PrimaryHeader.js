import React, { useContext } from 'react'
import './styles/PrimaryHeader.css'
import {Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { HamburgerMenu } from './Sidebar'
import SignUpModal from './SignUpModal'
import { ModalSignUpContext } from './States'

export const Logo = () => {
  return (
    <div className='PrimaryHeader_Logo Show_Mobile_Logo'>
      <a href='/' >
      <img src='images/3.png' alt='LOGO'/>
      </a>
    </div>
  )
}

const PrimaryHeader = () => {
  const context = useContext(ModalSignUpContext)
  const { modalOpen, setModalOpen } = context

  function OpenModal() {
    setModalOpen(true)
    console.log(modalOpen)
  }
  return (
      <div className='PrimaryHeader_Body'>
      <SignUpModal />
      <Logo />
      <div className="Menu_Show">
      <HamburgerMenu />
      </div>
      <div className="PrimaryHeader_Search">
      <Form inline="true" >
        <FormControl placeholder='Search skills, experts'  className='PrimaryHeader_Search_Text' type='text'/>
        <Button type='submit' variant='primary' className='PrimaryHeader_Search_Logo'>
        <FontAwesomeIcon icon={faSearch} size='lg' color='white'/>
        </Button>
      </Form>
      </div>
      <div className="PrimaryHeader_Links">
      <ul>
        <li>
          <a href="/"> Skill</a>
        </li>
        <li>
          <a href="/"> Experts</a>
        </li>
        <li>
          <a href="/"> Why us?</a>
        </li>
        <li> 
          <a href="/"> About us</a>
        </li>
      </ul>
      </div>
      <div className="Buttons">
      <Button className='PrimaryHeader_Links_Log_In' href='/log-in'>
        LOG IN
      </Button>
      <Button className='PrimaryHeader_Links_Sign_Up' onClick={OpenModal}>
        SIGN UP
      </Button>
      </div>
    </div>
  )
}


export default PrimaryHeader
