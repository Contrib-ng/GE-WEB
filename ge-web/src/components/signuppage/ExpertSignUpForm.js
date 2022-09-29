import {useNavigate} from 'react-router-dom'
import { faEnvelope, faLock, faLockOpen, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import { Divider } from '@mui/material'
import { Formik } from 'formik'
import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles/ExpertSignUpForm.css'
import * as Yup from 'yup'
import { ModalContext } from '../homepage/States'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, userCollectionRef } from '../../Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { RefreshPage } from '../../Navigation'

const ExpertSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email('Invalid Email').required(),
  password: Yup.string().min(6, 'Error'),
  termsAndConditions: Yup.bool().oneOf([true], 'Accept this').required()
})


const ExpertSignUpForm = () => {
  const navigate = useNavigate()
  const context = useContext(ModalContext)
  const { showPassword, setShowPassword } = context

  const OnSignUp = async(email, password, firstName, lastName) => {
    try {
      const authUser = await createUserWithEmailAndPassword( auth, email, password)
      await setDoc(
        doc(userCollectionRef, authUser.user.email),{
          user_uid: authUser.user.uid,
          username: firstName+lastName,
          email: authUser.user.email
        }
      ).then(() => {
      navigate('/expert')
      RefreshPage()
      }
      )
    } catch (error) {
      console.log(error.message)
      error.message === "Firebase: Error (auth/email-already-in-use)." &&
      alert("Email is already in use")
    }
  }
  
  return (
    <div className='ExpertSignUpForm_Body'>
    <Formik
    validationSchema={ExpertSignUpSchema}
    validateOnMount
    initialValues={{ firstName: '', lastName: '', email: '', password: '', termsAndConditions: false}}
    onSubmit={(values) => OnSignUp(values.email, values.password, values.firstName, values.lastName)}
    >
      {({handleBlur, handleChange, values, isValid, handleSubmit, errors}) => (
        <div className="Form">
          <h1> Expert Registration</h1>
          <p> Get your dream job </p>
          {/* form style imported from loginform.css */}
          <Form.Group>
            <Form.Control 
              type='text'
              placeholder='First Name'
              onChange={handleChange('firstName')}
              value={values.firstName}
              className="FirstName"
            />
            <FontAwesomeIcon icon={faUserAlt} color='#FB5012' style={{
              marginLeft: '-30px'
            }}/>
          </Form.Group>
          <Form.Group>
            <Form.Control 
              type='text'
              placeholder='Last Name'
              onChange={handleChange('lastName')}
              value={values.lastName}
              className="LastName"
            />
            <FontAwesomeIcon icon={faUser} color='#FB5012' style={{
              marginLeft: '-30px'
            }}/>
          </Form.Group>
          <div className="error">{
            errors.email === 'Invalid Email' 
            ? 'Invalid Email'
            : ''
            }</div>
          <Form.Group>
            <Form.Control 
              type='email'
              placeholder='Email'
              onChange={handleChange('email')}
              value={values.email}
              className="Email"
            />
            <FontAwesomeIcon icon={faEnvelope} color='#FB5012' style={{
              marginLeft: '-30px'
            }}/>
          </Form.Group>
          <div className="error">{
            errors.password === 'Error' 
            ? 'Password should be greater than 6'
            : ''
            }</div>
          <Form.Group>
            <Form.Control 
              type={
                showPassword === false
                ? 'password'
                : 'text'
              }
              placeholder='Password'
              onChange={handleChange('password')}
              value={values.password}
              className="Password"
            />
            {
                showPassword === false
                ? <FontAwesomeIcon icon={faLock} 
                style={{ marginLeft: '-30px', color: '#FB5012'}}
                    onClick={() => {setShowPassword(!showPassword)}}
                />
                : <FontAwesomeIcon icon={faLockOpen} color= '#FB5012'
                style={{ marginLeft: '-32px',}}
                onClick={() => {setShowPassword(!showPassword)}}
                />
              }
          </Form.Group>
          <div className="error" style={{ paddingBottom: '7px', marginTop: '3px' }}>{
            errors.termsAndConditions === 'Accept this'
            ? 'You need to accept our conditions and policies'
            : ''
            }</div>
          <div style={{
             display: 'flex', gap: '5px',
             marginTop: '10px'
             }}>
            <Form.Check type='checkbox' 
              value={values.termsAndConditions}
              onChange={handleChange('termsAndConditions')}
            />
              <p style={{
                color: 'black',
                fontSize: '8px',
                marginTop: '3px',
                textAlign: 'left'
              }}>I understand and agree with the 
              <em style={{ color: '#fb5012'}}> Get Employed Terms of Service <br/> and  
              Privacy Policy</em></p>
          </div>
          <div style={{
             display: 'flex', gap: '5px',
             marginTop: '5px'
             }}>
            <Form.Check type='checkbox' />
              <p style={{
                color: 'black',
                fontSize: '8px',
                marginTop: '3px'
              }}>  Send me mails for job vacancies
             </p>
          </div>
          <Button variant='success' className='SignUpButton'
            size='md' type='button'
            onClick={handleSubmit}
          > Create account </Button>
          <div className="OtherSignUpMethod">
            <Icon icon='flat-color-icons:google'
            className='IconGoogle' />
            <Icon icon='logos:apple' className="IconApple"/>
          </div>
          <Divider color='rgba(159, 159, 159, 0.5)' style={{ marginTop: '20px'}}> </Divider>
          <h4> Already have an account? <em style={{ textDecoration: 'none', color: '#fb5012', cursor: 'pointer'}} 
          onClick={() => navigate('/login')}>Log in</em></h4>
        </div>
      )}
    </Formik>      
    </div>
  )
}

export default ExpertSignUpForm
