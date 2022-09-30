import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import {faUser, faArrowsDownToPeople, faMercury} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal' 
import ModalContextProvider, { ModalContext } from '../../States'
import { useNavigate } from 'react-router'

export const SignUpModal = () => { 
    const context = useContext(ModalContext)
    const { tag, setTag, modalOpen, setModalOpen } = context
    const navigate = useNavigate()
    function closeModal() {
        setModalOpen(false)
        setTag('')
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
      if (tag === 'Client'){
        return "Join as a client"
      } else if (tag === 'Expert'){
        return "Apply as an expert"
      } else if (tag === 'Both'){
        return "Be both"
      }
    }

    function ButtonLink(){
      if (tag === 'Client'){
        navigate('/client-signup')
      } else if (tag === 'Expert'){
        navigate('/expert-signup')
      } else if (tag === 'Both'){
        navigate('/both-signup')
      }
    }
  return (
    <ModalContextProvider>
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
        tag === 'Client'
        ? 'Selected'
        : 'Modal_Expert'
      } onClick={() => setTag('Client')}>
      <FontAwesomeIcon icon={faUser} className='Icon'/>     
        Be the client, Hire for projects
      </div>
      <div className={
        tag === 'Expert'
        ? 'Selected'
        : 'Modal_Expert'
      } onClick={() => setTag('Expert')}>
      <FontAwesomeIcon icon={faArrowsDownToPeople} className='Icon'/>     
        Be the expert, Find your job
      </div>
      <div className={
        tag === 'Both'
        ? 'Selected'
        : 'Modal_Expert'
      } onClick={() => setTag('Both')}>
      <FontAwesomeIcon icon={faMercury} className='Icon'/>     
        You can be both, Hire and work
      </div>
      {
        tag !== ''
        && <Button className="Continue" onClick={ButtonLink}
      >
        {
          ButtonText()
        }
      </Button>
      }
      </div>
    </Modal>
    </ModalContextProvider>
  )
}

export default SignUpModal
