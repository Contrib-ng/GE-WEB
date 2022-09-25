import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightFromBracket, faEnvelope, faBell} from '@fortawesome/free-solid-svg-icons'
import './styles/ExpertTopNavigation.css'


const ExpertTopNavigation = () => {
  return (
    <Navbar className= 'Navbar'>
        <Nav className='ThisNav'>
        {/* style is auto imported from primaryheader.css */}
            <Nav.Link className='Links'> Find Projects</Nav.Link>
            <Nav.Link className='Links'> Saved Jobs</Nav.Link>
            <Nav.Link className='Links'> Your Applications</Nav.Link>
            <Nav.Link className='Links'> Your Projects</Nav.Link>
        </Nav>
        <Nav className="ExpertTopNavigation_Icons">
            <FontAwesomeIcon icon={faBell} color='#fb5012' className='TheIcon' />
            <FontAwesomeIcon icon={faEnvelope} color='#fb5012' className='TheIcon' />
            <FontAwesomeIcon icon={faRightFromBracket} color='#fb5012' className='TheIcon' />
        </Nav>
    </Navbar>
  )
}

export default ExpertTopNavigation
