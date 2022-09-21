import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import {faUser, faArrowsDownToPeople, faMercury} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal' 
import ModalSignUpContextProvider, { ModalSignUpContext } from './States'

export const SignUpModal = () => { 
    const context = useContext(ModalSignUpContext)
    const { selectedSignUp, setSelectedSignUp, modalOpen, setModalOpen} = context
    function closeModal() {
        setModalOpen(false)
        setSelectedSignUp('')
    }
    const modalStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba( 255, 255, 255, 0 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 20px )',
        WebkitBackdropFilter: 'blur( 20px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50px',
        transform: 'translate(-50%, -50%)',
        color: '#0057C2',
        padding: '20px 15px',
        backgroundColor: 'rgba( 255, 255, 255, 0 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 20px )',
        WebkitBackdropFilter: 'blur( 20px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      },
  }
    
    function ButtonText(){
      if (selectedSignUp === 'Client'){
        return "Join as a client"
      } else if (selectedSignUp === 'Expert'){
        return "Apply as an expert"
      } else if (selectedSignUp === 'Both'){
        return "Be both"
      }
    }

    function ButtonLink(){
      if (selectedSignUp === 'Client'){
        return '/client-signup'
      } else if (selectedSignUp === 'Expert'){
        return '/'
      } else if (selectedSignUp === 'Both'){
        return '/'
      }
    }
  return (
    <ModalSignUpContextProvider>
    <Modal
    isOpen={modalOpen}
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick
    overlayClassName={'overlay'}
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
        Be the expert, Find your job
      </div>
      <div className={
        selectedSignUp === 'Both'
        ? 'Selected'
        : 'Modal_Expert'
      } onClick={() => setSelectedSignUp('Both')}>
      <FontAwesomeIcon icon={faMercury} className='Icon'/>     
        You can be both, Hire and work
      </div>
      {
        selectedSignUp !== ''
        && <Button className="Continue" href={ButtonLink()}
      >
        {
          ButtonText()
        }
      </Button>
      }
      </div>
    </Modal>
    </ModalSignUpContextProvider>
  )
}

export default SignUpModal
