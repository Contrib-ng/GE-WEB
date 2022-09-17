import React from 'react'
import '../styles/SecondaryHeader.css'
import {Button} from 'react-bootstrap'

const Jobs = [
    {
        name: 'Domestic chore'
    },
    {
        name: 'Web Development'
    },
    {
        name: 'Copy-Writing'
    },
    {
        name: 'Voice over'
    },
    {
        name: 'Design'
    },
    {
        name: 'Mobile Development'
    },
    {
        name: 'Contract'
    },
    {
        name: 'Finance Manager'
    }
]

const SecondaryHeader = () => {
    function SecondaryHeaderJobs() {
        if (window.innerWidth > 768)
        return Jobs.map(job => {
            return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                {job.name}
            </h2>
        }); else if (window.innerWidth <= 768 && window.innerWidth >= 427)
        return Jobs.slice(0,-1).map(job => {
            return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                {job.name}
            </h2>
        }); else if (window.innerWidth <= 425)
        return Jobs.slice(0,-3).map(job => {
            return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                {job.name}
            </h2>
        })
    }
  return (
    <div className='SecondaryHeader_Body'>
        <div className='SecondaryHeader_Body_Jobs'>
        {
         SecondaryHeaderJobs()
        }
        </div>
        <div className="SecondaryHeader_All_Categories">
            <Button type='button'>
                {
                    window.innerWidth <= 683
                    ? 'MORE'
                    : 'ALL CATEGORIES'
                }
            </Button>
        </div>
    </div>
  )
}

export default SecondaryHeader