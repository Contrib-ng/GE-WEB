import React from 'react'
import '../styles/Footer.css'
import Divider from '@mui/material/Divider'
import {Icon} from '@iconify/react'

const Footer = () => {
  return (
    <div className='Footer_Body'>
      <div className="Footer_Circles_Top">
        <div className="Circle_One"></div>
        <div className="Circle_Two">
        <div className="Circle_Two_Hole"></div>
        </div>
      </div>
      <div className="Footer_Links">
      <div className="Footer_Client_Links">
        <h1>For Clients</h1>
        <p>How to hire</p>
        <p>Expert Marketplace</p>
        <p>Enterprise</p>
        <p>Payroll Services</p>
      </div>
      <div className="Footer_Expert_Links">
        <h1>For Experts</h1>
        <p>How to Find work</p>
        <p>Direct Contracts</p>
        <p>Finding Freelance Jobs</p>
        <p>Locale Freelance Jobs</p>
      </div>
      <div className="Footer_Resource_Links">
        <h1>Resources</h1>
        <p>Help & Support</p>
        <p>Success Stories</p>
        <p>Blog & Community</p>
      </div>
      <div className="Footer_GEC_Links">
        <h1>Getting Employed</h1>
        <p>How to Find work</p>
        <p>Direct Contracts</p>
        <p>Finding Freelance Jobs</p>
        <p>Locale Freelance Jobs</p>
      </div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M51.9,-11.7C59.9,7.9,54.1,37.2,34.8,52.2C15.5,67.3,-17.3,68.2,-36.7,53.4C-56.1,38.6,-62.1,8.2,-53.8,-11.8C-45.4,-31.9,-22.7,-41.6,-0.4,-41.4C21.9,-41.3,43.8,-31.3,51.9,-11.7Z" transform="translate(100 100)" />
      </svg>
      </div>
      <Divider color='white'/>
      <div className="Footer_Circles_Bottom">
        <div className="Circle_One"></div>
        <div className="Circle_Two"></div>
      </div>
      <div className="Footer_Foot">
      <img src='images/3.png' alt='LOGO'/>
      <h3> © 2022 GEC</h3>
      <p> Terms of Service </p>
      <p> Privacy Policy </p>
      <p> Cookie Settings</p>
      <div className="Socials">
      <Icon icon='cib:facebook-f' className='Icon'/>
      <Icon icon='akar-icons:twitter-fill' className='Icon'/>
      <Icon icon='akar-icons:instagram-fill' className='Icon'/>
      </div>
      </div>
    </div>
  )
}

export default Footer
