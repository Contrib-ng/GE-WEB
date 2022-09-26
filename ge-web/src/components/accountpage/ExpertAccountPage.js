import React from 'react'
import ExpertTopNavigation from '../navigations/ExpertTopNavigation'
import ExpertGreetingBar from './ExpertGreetingBar'
import Profile from './Profile'
import './styles/ExpertAccountPage.css'
import VacantJobs from './VacantJobs'

export const ExpertDashboard = () => {
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
