import React from 'react'
import './styles/SecondaryHeader.css'
import { JOBS } from '../../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const SecondaryHeader = () => {
    function SecondaryHeaderJobs() {
        return JOBS.map(job => {
            return <h2 className='SecondaryHeader_Jobs' key={job.name}>
                {job.name}
            </h2>
        })
    }
  return (
    <div className='SecondaryHeader_Body'>
        <div className='SecondaryHeader_Body_Jobs' style={{ overflowX: 'scroll', width: '1000px', whiteSpace: 'nowrap'}}>
        {
         SecondaryHeaderJobs()
        }
        </div>
        <div className="SecondaryHeader_All_Categories">
        <FontAwesomeIcon icon={faCaretRight} color="#0057c2" size='lg' />
        </div>
    </div>
  )
}

export default SecondaryHeader