import React from 'react'
import ClientAccountPage from '../components/accountpage/ClientAccountPage'
import { ExpertNavigation } from '../components/navigations/ExpertNavigation'

const ExpertAccount = () => {
  return (
    <div className="ExpertAccount_Body">
       <ExpertNavigation />
    </div>
  )
}

const ClientAccount = () => {
  return (
    <div className="ClientAccountPage_Body">
      <ClientAccountPage />
    </div>
  )
}

export { ExpertAccount, ClientAccount}
