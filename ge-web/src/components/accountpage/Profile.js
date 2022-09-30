import React, { useContext } from 'react'
import {PLACEHOLDER_IMG, VERIFIED_BADGE } from '../navigations/SideNavigationParameters'
import ProfileForm from './ProfileForm'
import './styles/Profile.css'
import { ModalContext } from '../../States'

const Profile = () => {
  const context = useContext(ModalContext)
  const { currentLoggedInUser } = context

  return (
    <div className='Profile_Body'>
      <div className="ProfileInformation">
        <img src={
          currentLoggedInUser.profilePicture === ''
          ? PLACEHOLDER_IMG
          : currentLoggedInUser.profilePicture
          } alt="" srcSet='' />
        <div className="Information">
              <h2>{currentLoggedInUser.firstName}{' '}{currentLoggedInUser.lastName}</h2>
              <p>{currentLoggedInUser.email}</p>
             <div className="Badge" style={{ display: 'flex'}}>
                <em>{currentLoggedInUser.tag}</em>
                {
                  currentLoggedInUser.verification
                  && <img style={{width: '20px', height: '20px'}} src={VERIFIED_BADGE} alt='' srcSet=''/>
                }
             </div>
          </div>
      </div>
      <ProfileForm />
    </div>
  )
}

export default Profile
