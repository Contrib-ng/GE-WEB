import React from 'react'
import { Nav } from 'react-bootstrap'

const NAVIGATION = [
    {
        index: 'link1',
        image: 'https://cdn-icons-png.flaticon.com/512/1828/1828765.png',
        navigationName: 'Dashboard',
        link: '/home'
    },
    {
        index: 'link2',
        image: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png',
        navigationName: 'Profile',
        link: ''
    },
    {
        index: 'link3',
        image: 'https://cdn-icons-png.flaticon.com/512/2739/2739782.png',
        navigationName: 'Projects',
        link: ''
    },
    {
        index: 'link4',
        image: 'https://cdn-icons-png.flaticon.com/512/1370/1370907.png',
        navigationName: 'Messages',
        link: ''
    },
    {
        index: 'link5',
        image: 'https://cdn-icons-png.flaticon.com/512/3239/3239948.png',
        navigationName: 'Calender',
        link: ''
    },
    {
        index: 'link6',
        image: 'https://cdn-icons-png.flaticon.com/512/471/471664.png',
        navigationName: 'Help',
        link: ''
    },
    {
        index: 'link7',
        image: 'https://cdn-icons-png.flaticon.com/128/2040/2040504.png',
        navigationName: 'Settings',
        link: ''
    },
]
//SIDE NAVIGATION OF THE EXPERT PAGE
const ExpertNavigation = () => {
    return(
        <Nav defaultActiveKey='/home' style={{ 
            display: 'flex', flexDirection:'column', paddingLeft: '10px',
            }} className='Navigation'>
                {
                    NAVIGATION.map( navigation => {
                        return (
                        <Nav.Link href={navigation.link} eventKey={navigation.index} className="Nav_Link">
                        <img src={navigation.image} alt="" srcset="" className="Icons"/>
                        <p>{navigation.navigationName}</p>
                        </Nav.Link>
                        )
                    })
                }
            </Nav>
    )
}

export default ExpertNavigation