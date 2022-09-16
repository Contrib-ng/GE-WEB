import React, { useEffect, useRef, useState } from 'react'
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
    const ref = useRef(null)
    const [bodyWidth, setBodyWidth] = useState()
    useEffect(() => {
        setBodyWidth(ref.current.offsetWidth)
        console.log('width', bodyWidth)
    }, [bodyWidth])
  return (
    <div className='SecondaryHeader_Body' ref={ref}>
        <div className='SecondaryHeader_Body_Jobs'>
        {
            (bodyWidth > 768)
            && Jobs.map(job => {
                return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                    {job.name}
                </h2>
            })
        }
        {
            (bodyWidth <= 768 && bodyWidth >= 427)
            && Jobs.slice(0,-1).map(job => {
                return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                    {job.name}
                </h2>
            })
        }
        {
            bodyWidth <= 425
            && Jobs.slice(0,-3).map(job => {
                return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                    {job.name}
                </h2>
            })
        }
        </div>
        <div className="SecondaryHeader_All_Categories">
            <Button type='button'>
                {
                    bodyWidth <= 683
                    ? 'MORE'
                    : 'ALL CATEGORIES'
                }
            </Button>
        </div>
    </div>
  )
}

export default SecondaryHeader