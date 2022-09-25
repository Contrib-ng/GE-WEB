import React from 'react'
import ExpertTopNavigation from '../navigations/ExpertTopNavigation'
import ExpertGreetingBar from './ExpertGreetingBar'
import './styles/ExpertAccountPage.css'
import VacantJobs from './VacantJobs'

const ExpertDashboard = () => {
  return (
    <div className="ExpertDashboard_Body">
    <div className="ExpertDashboard_TopNavigation">
    <ExpertTopNavigation />
    <ExpertGreetingBar />
    <VacantJobs />
    </div>
    </div>
  )
}

export default ExpertDashboard
