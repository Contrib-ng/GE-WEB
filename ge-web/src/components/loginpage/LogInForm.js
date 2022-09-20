import React, { useState } from 'react'
import { Formik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import Divider from '@mui/material/Divider'
import './styles/LogInForm.css'
import { Icon } from '@iconify/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import * as Yup from 'yup'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const LogInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required(),
})

const LogInForm = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="LogInForm_Body">
      <Formik
      initialValues={{ email: '', password: '', toggle: false}}
      validationSchema={LogInSchema}
      validateOnMount={true}
      onSubmit={async (values) => {
        await sleep(500)
        console.log(values.email, values.password, values.toggle)
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values, isValid, errors}) => (
          <div className='Form'>
          <h1> Welcome Back</h1>
          <p> Log in to your account</p>
          <div className="error">{
            errors.email === 'email is a required field' 
            ? ''
            : 'Invalid Email'
            }</div>
            <Form.Group>
              <Form.Control 
                type='email'
                placeholder='Email'
                autoComplete='email'
                onChange={handleChange('email')}
                value={values.email}
                className="Email"
              />
              <FontAwesomeIcon icon={faEnvelope} 
                style={{ marginLeft: '-30px', color: '#FB5012'}} />
            </Form.Group>
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
                onBlur={handleBlur('password')}
              />
              {
                showPassword === false
                ? <FontAwesomeIcon icon={faLock} 
                style={{ marginLeft: '-30px', color: '#FB5012'}}
                    onClick={() => {setShowPassword(!showPassword)}}
                />
                : <FontAwesomeIcon icon={faLockOpen} 
                style={{ marginLeft: '-30px', color: '#FB5012'}}
                onClick={() => {setShowPassword(!showPassword)}}
                />
              }
            </Form.Group>
            <div className="RememberMe_ForgotPassword">
                <Form.Check type='checkbox' name='toggle' 
                label=" Remember me" 
                style={{ fontSize: '12px'}}
                onClick={() => {values.toggle = !values.toggle}}
                />
                <p> Forgot password?</p>
            </div>
            <Button variant='success' className='LoginButton'
              size='md'
              type='button'
              onClick={handleSubmit}
            > Log In</Button>
            <Divider color='rgba(159, 159, 159, 0.5)'> or </Divider>
            <div className="OtherLoginMethod">
            <Button className='OtherLoginMethod_Google'>
            <Icon icon="flat-color-icons:google" className='Icon'/>
            <p>Continue with Google</p>
            </Button>       
            <Button className='OtherLoginMethod_Apple'>
            <Icon icon="logos:apple" className="Icon"/>
            <p> Continue with Apple</p>
            </Button>
            </div>
            <h4> Don't have an account? <em> Sign Up</em></h4>
          </div>
        )}
      </Formik>
      </div>
  )
}

export default LogInForm
