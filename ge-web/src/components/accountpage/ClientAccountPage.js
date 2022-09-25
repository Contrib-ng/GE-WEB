import React from 'react'
import {ClientNavigation} from '../navigations/ExpertNavigation'
import './styles/ClientAccountPage.css'

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'

const ClientAccountPage = () => {
  return (
    <div className="ClientAccountPage_Body" style={{ width: '100vw', overflow: 'hidden'}}>
      <div className="ClientSideNavigation">
      <div className="ProfileInformation">
        <img src={PLACEHOLDER_IMG} alt="" srcset="" />
        <div className="Information">
            <h2>Afolabi Nuel</h2>
            <p> Hire your experts</p>
            <em> Client </em>
        </div>
    </div>
    <ClientNavigation />
    </div>
    </div>
  )
}

export default ClientAccountPage
