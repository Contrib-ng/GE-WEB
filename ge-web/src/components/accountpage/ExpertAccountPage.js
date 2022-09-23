import React from 'react'
import ExpertNavigation from '../navigations/ExpertNavigation'
import ExpertTopNavigation from '../navigations/ExpertTopNavigation'
import ExpertGreetingBar from './ExpertGreetingBar'
import './styles/ExpertAccountPage.css'
import VacantJobs from './VacantJobs'

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'

const ExpertAccountPage = () => {
  return (
    <div className="ExpertAccountPage_Body" style={{ width: '100vw', overflow: 'hidden'}}>
      <div className="ExpertSideNavigation">
      <div className="ProfileInformation">
        <img src={PLACEHOLDER_IMG} alt="" srcset="" />
        <div className="Information">
            <h2>Afolabi Nuel</h2>
            <p> Product Designer</p>
            <em> Certified </em>
        </div>
    </div>
    <ExpertNavigation />
    </div>
    <div className="ExpertAccountPage_Top_Navigation">
    <ExpertTopNavigation />
    <ExpertGreetingBar />
    <VacantJobs />
    </div>
    </div>
  )
}

export default ExpertAccountPage
