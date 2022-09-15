import React from 'react'
import { slide as Menu} from 'react-burger-menu'
import './styles/Sidebar.css'
import './styles/PrimaryHeader.css'

export const HamburgerMenu = () => {
    return(
        <Menu className='Menu' right width={250} noOverlay>
        <div className='PrimaryHeader_Logo'>
        <img src='images/3.png' alt='LOGO'/>
        </div>
            <a href="/" className="Menu_Item">
            Skill</a>
            <a href="/" className="Menu_Item">
            Expert</a>
            <a href="/" className="Menu_Item">
            Why Us?</a>
            <a href="/" className="Menu_Item">
            About us</a>
        </Menu>
    )
}