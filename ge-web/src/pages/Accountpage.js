import React from 'react'
import { ClientNavigation, ExpertNavigation } from '../components/navigations/AccountNavigation'

const ExpertAccount = () => {
  return (
    <div className="ExpertAccount_Body">
       <ExpertNavigation />
    </div>
  )
}

const ClientAccount = () => {
  return (
    <div className="ClientAccount_Body">
      <ClientNavigation />
    </div>
  )
}

export { ExpertAccount, ClientAccount}
