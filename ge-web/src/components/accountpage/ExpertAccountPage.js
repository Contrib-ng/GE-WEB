import React, { useEffect, useContext } from 'react'
import ExpertTopNavigation from '../navigations/ExpertTopNavigation'
import ExpertGreetingBar from './ExpertGreetingBar'
import Profile from './Profile'
import './styles/ExpertAccountPage.css'
import VacantJobs from './VacantJobs'
import { doc, getDoc, limit } from "firebase/firestore"
import { auth, db } from '../../Firebase'
import { ModalContext } from '../../States'

export const ExpertDashboard = () => {
  const context = useContext(ModalContext)
  const { setCurrentLogInUser } = context
  const getExpertUser = async() => {
    const user = auth.currentUser
    await getDoc(doc(db, 'ExpertUsers', user.email), limit(1)).then(
      doc => {
        if (doc.exists()){
          setCurrentLogInUser({
            email: doc.data().email,
            profilePicture: doc.data().profilePicture,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            tag: doc.data().tag,
            verification: doc.data().verification,
            majorSkill: doc.data().majorskill,
            userName: doc.data().userName
        })
        }
      }
    )
}

useEffect(() => {
  getExpertUser()
})
  
return (
    <div className="Body">
      <div className="Body_Components">
        <ExpertTopNavigation />
        <ExpertGreetingBar />
        <VacantJobs />
      </div>
    </div>
  )
}

export const ExpertProfile = () => {
  return (
    <div className="Body">
      <div className="Body_Components">
        <ExpertTopNavigation />
        <Profile />
      </div>
    </div>
  )
}
