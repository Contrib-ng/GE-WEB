import React from 'react'
import { slide as Menu} from 'react-burger-menu'
import './styles/Sidebar.css'
import './styles/PrimaryHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export const HamburgerMenu = () => {
    return(
        <Menu  
        burgerButtonClassName='Menu'
        right 
        customBurgerIcon= {<FontAwesomeIcon icon={faBars} color='#FB5012'/> }
        crossClassName={'cross'}
        >
        <div className='PrimaryHeader_Logo'>
        <img src='images/3.png' alt='LOGO' />
        </div>
            <div className="Menu_Item">
            Skill</div>
            <div className="Menu_Item">
            Expert</div>
            <div className="Menu_Item">
            Why Us?</div>
            <div className="Menu_Item">
            About us</div>
        </Menu>
    )
}