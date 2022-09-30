import React from 'react'
import { WHYGETEMPLOYEDIMAGES, WHYGETEMPLOYEDMISSIONS } from '../../Data'
import './styles/WhyGetEmployed.css'

const WhyGetEmployed = () => {
  return (
    <div className='WhyGetEmployed_Body'>
        <h1>Why Get Employed</h1>
        <p>We give experiences for perfection </p>
       <div className="Circle_Image_Container">
            {
                WHYGETEMPLOYEDIMAGES.map(circleImage => {
                    return (
                        <div className="Circle_Image" key={circleImage.index}>
                        <div className="Circle" ></div>
                        <img src={circleImage.image} alt="" srcSet="" />
                        </div>
                    )
                })
            }    
       </div>
        <div className="Mission_Container">
        {
            WHYGETEMPLOYEDMISSIONS.map(mission => {
                return (
                    <div className="Mission" key={mission.index}>
                    <div className="Image_Name">
                    <img src={mission.image} alt="" srcSet="" />
                    <h4>{mission.name}</h4>
                    </div>
                    <p>{mission.message}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default WhyGetEmployed