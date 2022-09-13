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
  return (
    <div className='SecondaryHeader_Body'>
        <div className='SecondaryHeader_Body_Jobs'>
        {
            Jobs.map(job => {
                return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                    {job.name}
                </h2>
            })
        }
        </div>
        <div className="SecondaryHeader_All_Categories">
            <Button type='button'>ALL CATEGORIES</Button>
        </div>
    </div>
  )
}

export default SecondaryHeader