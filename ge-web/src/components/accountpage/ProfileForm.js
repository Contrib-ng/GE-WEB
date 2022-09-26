import { Formik } from 'formik'
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './styles/ProfileForm.css'

const ProfileForm = () => {
  return (
    <div className='ProfileForm_Body'>
    <Formik
    validateOnMount
    initialValues={{}}
    onSubmit={() => {}}
    >
         {({handleBlur, handleChange, values, isValid, handleSubmit, errors}) => (
            <div className="Form">
            <div className="ProfileForm_Name">
            <Form.Group style={{ display: 'flex', flexDirection: 'column'}}>
                <Form.Label className='Name'> First Name</Form.Label>
                <Form.Control type='name' placeholder='First name'></Form.Control>
            </Form.Group>
            <Form.Group style={{ display: 'flex', flexDirection: 'column'}}>
                <Form.Label className='Name'> Last Name</Form.Label>
                <Form.Control type='name' placeholder='Last name'></Form.Control>
            </Form.Group>
            </div>
            <div className="ProfileForm_Number_Email">
            <Form.Group style={{ display: 'flex', flexDirection: 'column'}}>
                <Form.Label className='Number_Email'> Phone Number</Form.Label>
                <Form.Control type='number' placeholder='Phone Number'></Form.Control>
            </Form.Group>
            <Form.Group style={{ display: 'flex', flexDirection: 'column'}}>
                <Form.Label className='Number_Email'> Email Address</Form.Label>
                <Form.Control type='email' placeholder='Email Address'></Form.Control>
            </Form.Group>
            </div>
            <Form.Group style={{ display: 'flex', flexDirection: 'column'}}>
                <Form.Label className='Description'> About Me</Form.Label>
                <Form.Control as="textarea" className='Textarea' placeholder='Tell us about yourself' rows={4} ></Form.Control>
            </Form.Group>
            <Form.Group style={{ display: 'flex', flexDirection: 'column'}}>
                <Form.Label className='CVupload'> Upload CV / Resume</Form.Label>
                <Form.Control type="file"></Form.Control>
            </Form.Group>
            <div className='Form_Submit'>
            <Button type='submit'> Update</Button>
            </div>
            </div>
         )}
    </Formik>
    </div>
  )
}

export default ProfileForm
