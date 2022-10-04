import React, { useContext } from 'react'
import './styles/TopBody.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import {Icon} from '@iconify/react'
import { ModalContext } from '../../States'

const TopBody = () => {
  const context = useContext(ModalContext)
  const { setModalOpen } =  context
  function OpenModal() {
    setModalOpen(true)
  }
  return (
    <div className='TopBody_Body'>
        <div className="TopBody_Message">
            <h1> Looking for a <br/> part-time or contract based project?</h1>
            <div className="Show_Mobile_Button">
            <p>GEC takes out the old ways of sourcing for jobs. </p>
            <Button type='submit' className='Mobile'>
                GET STARTED
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' color='white' className='TopBody_Icon'/>
            </Button>
            </div>
            <Button type='button' className='Desktop' onClick={OpenModal}>
                GET STARTED
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' color='white' className='TopBody_Icon'/>
            </Button>
            <div className="TopBody_Trusted_By">
              <h1> Trusted By:</h1>
              <Icon icon="logos:microsoft" className="Icon"/> 
              <Icon icon="logos:brandfolder" className="Icon"/>
              <Icon icon="simple-icons:godaddy" className="Icon"/>
              <Icon icon="logos:airbnb" className="Icon"/>
            </div>
        </div>
        <div className="TopBody_Image">
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1663329876~exp=1663330476~hmac=6dd592efa07dd6da02c7296955c261dcf15e1918fd1eb8fda2a9d356d5675d66" 
            alt="Design_Image" srcSet="" />
        </div>
    </div>
  )
}

export default TopBody