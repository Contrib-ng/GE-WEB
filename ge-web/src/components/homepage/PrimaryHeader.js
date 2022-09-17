import React, { useState } from 'react'
import '../styles/PrimaryHeader.css'
import {Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faUser, faArrowsDownToPeople, faMercury} from '@fortawesome/free-solid-svg-icons'
import { HamburgerMenu } from '../Sidebar'
import Modal from 'react-modal'

const PrimaryHeader = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedSignUp, setSelectedSignUp] = useState('')
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50px',
      transform: 'translate(-50%, -50%)',
      color: '#0057C2',
      padding: '40px',
    },
  }
  
  function openModal() {
    setModalOpen(true)
  }
  function closeModal() {
    setModalOpen(false)
    setSelectedSignUp('')
  }
  return (
    <div className='PrimaryHeader_Body'>
    <Modal
    isOpen={modalOpen}
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick
    preventScroll
    style={modalStyles}
    ariaHideApp={false}
    >
      <h1> Join Get Employed</h1>
      <p style={{ fontSize: '8px'}}> Start your journey of utilization of skills and opportunities </p>
      <div className="Modal_Content">
      <div className={
        selectedSignUp === 'Client'
        ? 'Selected'
        : 'Modal_Expert'
      } onClick={() => setSelectedSignUp('Client')}>
      <FontAwesomeIcon icon={faUser} className='Icon'/>     
        Be the client, Hire for projects
      </div>
      <div className={
        selectedSignUp === 'Expert'
        ? 'Selected'
        : 'Modal_Expert'
      } onClick={() => setSelectedSignUp('Expert')}>
      <FontAwesomeIcon icon={faArrowsDownToPeople} className='Icon'/>     
        Be the expert, Find jobs
      </div>
      <div className={
        selectedSignUp === 'Both'
        ? 'Selected'
        : 'Modal_Expert'
      } onClick={() => setSelectedSignUp('Both')}>
      <FontAwesomeIcon icon={faMercury} className='Icon'/>     
        You can be both, Hire and work
      </div>
      <Button className={
        selectedSignUp !== ''
        ? 'Continue'
        : 'Disabled'
      }>
        Continue
      </Button>
      </div>
    </Modal>
      <div className='PrimaryHeader_Logo Show_Mobile_Logo'>
      <img src='images/3.png' alt='LOGO'/>
      </div>
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
      <Button className='PrimaryHeader_Links_Log_In'>
        LOG IN
      </Button>
      <Button className='PrimaryHeader_Links_Sign_Up' onClick={openModal}>
        SIGN UP
      </Button>
      </div>
    </div>
  )
}

export default PrimaryHeader
