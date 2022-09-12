import React from 'react'
import './styles/PrimaryHeader.css'
import {Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const PrimaryHeader = () => {
  return (
    <div className='PrimaryHeader_Body'>
      <div className='PrimaryHeader_Logo'>
      <img src='images/3.png' alt='LOGO'/>
      </div>
      <div className="PrimaryHeader_Search">
      <Form inline="true" >
        <FormControl placeholder='Search' className='PrimaryHeader_Search_Text' type='text'/>
        <Button type='submit' variant='primary' className='PrimaryHeader_Search_Logo'>
        <FontAwesomeIcon icon={faSearch} size='md' color='white'/>
        </Button>
      </Form>
      </div>
    </div>
  )
}

export default PrimaryHeader
