import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightFromBracket, faEnvelope, faBell} from '@fortawesome/free-solid-svg-icons'
import './styles/ExpertTopNavigation.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
import { RefreshPage } from '../../Navigation'
import { useNavigate } from 'react-router'


const ExpertTopNavigation = () => {
  const navigate = useNavigate()

  const SignOut = () => {
    signOut(auth).then(() => {
    navigate('/')
    RefreshPage()
    }
    ).catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div className= 'Navbar'>
        <div className='ThisNav'>
        {/* style is auto imported from primaryheader.css */}
            <div className='Links'> Find Projects</div>
            <div className='Links'> Saved Jobs</div>
            <div className='Links'> Your Applications</div>
            <div className='Links'> Your Projects</div>
        </div>
        <div className="ExpertTopNavigation_Icons">
            <FontAwesomeIcon icon={faBell} color='#fb5012' className='TheIcon' />
            <FontAwesomeIcon icon={faEnvelope} color='#fb5012' className='TheIcon' />
            <FontAwesomeIcon icon={faRightFromBracket} color='#fb5012' className='TheIcon' onClick={SignOut}
            />
        </div>
    </div>
  )
}

export default ExpertTopNavigation
