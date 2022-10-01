import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Logo } from '../homepage/PrimaryHeader'
import { HamburgerMenu } from '../homepage/Sidebar'
import { ModalContext } from '../../States'
import { useNavigate } from 'react-router'
import { auth, db } from '../../Firebase'
import { PLACEHOLDER_IMG } from './SideNavigationParameters'
import { doc, getDoc, limit } from 'firebase/firestore'

const HomepageNavigation = () => {
    const context = useContext(ModalContext)
    const [image, setImage] = useState([])
    const { setModalOpen } = context
    const navigate = useNavigate()
    const getExpertUser = async() => {
      const user = auth.currentUser
      await getDoc(doc(db, 'ExpertUsers', user.email), limit(1)).then(
        doc => {
          if (doc.exists()){
            setImage({
              profilePicture: doc.data().profilePicture,
              tag: doc.data().tag
          })
          }
        }
      )
  }
  
  useEffect(() => {
    getExpertUser()
  })
  
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
            <Nav.Link className='Links' href='/'>Skill</Nav.Link>
            <Nav.Link className='Links'>Expert</Nav.Link>
            <Nav.Link className='Links'>Why us?</Nav.Link>
            <Nav.Link className='Links'>About us</Nav.Link>
        </Nav>
        {
          auth.currentUser
          ? <img src={
          image.profilePicture === ''
          ? PLACEHOLDER_IMG
          : image.profilePicture
          } alt="" srcSet='' 
          style={{ width: '50px', height: '50px', marginRight: '20px', borderRadius: '30px', marginTop: '5px'}}
          onClick={() => navigate(image.tag)} />
          : <div className="Buttons">
              <Button className='PrimaryHeader_Links_Log_In' onClick={() => navigate('/login')}>
                LOG IN
              </Button>
              <Button className='PrimaryHeader_Links_Sign_Up' onClick={OpenModal}>
                SIGN UP
              </Button>
            </div>
        }
        </Container>
    </Navbar>
  )
}

export default HomepageNavigation
