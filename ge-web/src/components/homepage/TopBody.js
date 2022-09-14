import React from 'react'
import '../styles/TopBody.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import {Icon} from '@iconify/react'

const TopBody = () => {
  return (
    <div className='TopBody_Body'>
        <div className="TopBody_Message">
            <h1> Looking for a <br/> part-time or contract based project?</h1>
            <p>GEC takes out the old ways of sourcing for jobs. </p>
            <Button type='submit'>
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
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1662999552~exp=1663000152~hmac=085781e85b4f65f7555913f8c61e24d2ea380e4c3d8ab1ea65ec33385a0a2e33" 
            alt="Design_Image" srcSet="" />
        </div>
    </div>
  )
}

export default TopBody