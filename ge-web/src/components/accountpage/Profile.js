import React from 'react'
import {PLACEHOLDER_IMG } from '../navigations/SideNavigationParameters'
import ProfileForm from './ProfileForm'
import './styles/Profile.css'

const Profile = () => {
  return (
    <div className='Profile_Body'>
      <div className="ProfileInformation">
        <img src={PLACEHOLDER_IMG} alt="" srcSet='' />
        <div className="Information">
              <h2>Afolabi Nuel</h2>
              <p> nuelafolabi9898@gmail.com</p>
             <div className="Badge" style={{ display: 'flex'}}>
                <em> Expert </em>
                <em> Verified </em>
             </div>
          </div>
      </div>
      <ProfileForm />
    </div>
  )
}

export default Profile
