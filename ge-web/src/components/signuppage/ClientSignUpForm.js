import { faEnvelope, faLock, faLockOpen, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import { Divider } from '@mui/material'
import { Formik } from 'formik'
import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles/ClientSignUpForm.css'
import * as Yup from 'yup'
import { ModalContext } from '../../States'
import { useNavigate } from 'react-router'

const ClientSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email('Invalid Email').required(),
  password: Yup.string().min(6, 'Error')
})

const ClientSignUpForm = () => {
  const navigate = useNavigate()
  const context = useContext(ModalContext)
  const { showPassword, setShowPassword } = context
  return (
    <div className='ClientSignUpForm_Body'>
    <Formik
    validationSchema={ClientSignUpSchema}
    validateOnMount
    initialValues={{ firstName: '', lastName: '', email: '', password: ''}}
    onSubmit={(values) => console.log(values.email)}
    >
      {({handleBlur, handleChange, values, isValid, handleSubmit, errors}) => (
        <div className="Form">
          <h1> Client Registration</h1>
          <p> Hire experts </p>
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
          <div className="Terms_Condition" style={{
             display: 'flex', gap: '5px',
             marginTop: '20px'
             }}>
            <Form.Check type='checkbox' />
              <p style={{
                color: 'black',
                fontSize: '8px',
                marginTop: '3px'
              }}>I understand and agree with the 
              <em style={{ color: '#fb5012'}}> Get Employed Terms of Service <br/> and  
              Privacy Policy</em></p>
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

export default ClientSignUpForm
