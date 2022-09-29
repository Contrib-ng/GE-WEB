import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Logo } from '../homepage/PrimaryHeader'
import { HamburgerMenu } from '../homepage/Sidebar'
import { ModalContext } from '../homepage/States'

const HomepageNavigation = () => {
    const context = useContext(ModalContext)
    const { setModalOpen } = context
  
    function OpenModal() {
      setModalOpen(true)
    }
  return (
    <Navbar>
        <Container style={{ display: 'flex', justifyContent: 'space-between', width: '100vw'}}>
            <Navbar.Brand  className="Show_Mobile_Logo" style={{ display: 'flex', textDecoration: 'none', color: '#0057c2',}}>
            <Logo  classname="PrimaryHeader_Logo"/> {''} <h1>Get Employed</h1>
                <HamburgerMenu />
            </Navbar.Brand>
        <Form inline="true" className='PrimaryHeader_Search' >
        <FormControl placeholder='Search skills, experts'  className='PrimaryHeader_Search_Text' type='text'/>
        <Button type='submit' variant='primary' className='PrimaryHeader_Search_Logo'>
        <FontAwesomeIcon icon={faSearch} size='lg' color='white'/>
        </Button>
        </Form>
        <Nav style={{ maxHeight: '100px'}} className='PrimaryHeader_Links'>
            <Nav.Link href='/' className='Links'>Skill</Nav.Link>
            <Nav.Link href='/'  className='Links'>Expert</Nav.Link>
            <Nav.Link href='/'  className='Links'>Why us?</Nav.Link>
            <Nav.Link href='/'  className='Links'>About us</Nav.Link>
        </Nav>
        <div className="Buttons">
        <Button className='PrimaryHeader_Links_Log_In' href='/login'>
            LOG IN
         </Button>
        <Button className='PrimaryHeader_Links_Sign_Up' onClick={OpenModal}>
            SIGN UP
        </Button>
        </div>
        </Container>
    </Navbar>
  )
}

export default HomepageNavigation
