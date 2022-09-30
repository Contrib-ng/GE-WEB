import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import './styles/PageNotFound.css'

const Loading_404 = 'images/loading.gif'
const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="Components">
    <div className="PageNot_Found">
    <img src={Loading_404} alt="" srcSet="" />
      <h1> Oops Loading Page</h1>
    <Button onClick={() => navigate('/')}> Back home</Button>
    </div>
    </div>
  )
}

export default PageNotFound