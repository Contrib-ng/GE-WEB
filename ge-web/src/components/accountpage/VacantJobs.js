import React from 'react'
import { Button } from 'react-bootstrap'
import { VACANTJOBS } from '../../Data'
import './styles/VacantJobs.css'

const VacantJobs = () => {
  return (
    <div className='VacantJobs_Body'>
    {
      VACANTJOBS.map((jobs) => {
        return (
          <div className="VacantJob_Card" key={jobs.index}>
            <h1>{jobs.jobName}</h1>
            <div className="Location">
              <p>{jobs.location}</p><p>{jobs.jobType}</p>
            </div>
            <h2>{jobs.jobDescription}</h2>
            <div className="Price_Button">
            <h3>₦ {jobs.price}</h3>
            <Button variant='success' type='button'> Apply</Button>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default VacantJobs
