import React from 'react'
import '../styles/PrimaryHeader.css'
import {Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { HamburgerMenu } from '../Sidebar'

const PrimaryHeader = () => {
  return (
    <div className='PrimaryHeader_Body'>
    <div className="Menu_Show">
    <HamburgerMenu />
    </div>
      <div className='PrimaryHeader_Logo Show_Mobile_Logo'>
      <img src='images/3.png' alt='LOGO'/>
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
      <Button className='PrimaryHeader_Links_Sign_In'>
        SIGN IN
      </Button>
      </div>
    </div>
  )
}

export default PrimaryHeader
