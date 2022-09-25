import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import ExpertDashboard from '../accountpage/ExpertAccountPage'
import VacantJobs from '../accountpage/VacantJobs'
import './styles/ExpertNavigation.css'

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'


const EXPERTNAVIGATION = [
    {
        index: 'dashboard',
        inactiveImage: 'https://img.icons8.com/material-rounded/452/dashboard-layout.png',
        activeImage: 'https://img.icons8.com/material-rounded/452/fb5012/dashboard-layout.png',
        navigationName: 'Dashboard',
        link: <ExpertDashboard />
    },
    {
        index: 'profile',
        inactiveImage: 'https://img.icons8.com/external-becris-lineal-becris/344/external-user-mintab-for-ios-becris-lineal-becris.png',
        activeImage: 'https://img.icons8.com/external-becris-lineal-becris/344/fb5012/external-user-mintab-for-ios-becris-lineal-becris.png',
        navigationName: 'Profile',
        link: ''
    },
    {
        index: 'projects',
        inactiveImage: 'https://img.icons8.com/external-inkubators-basic-outline-inkubators/344/external-empty-folder-file-and-folder-inkubators-basic-outline-inkubators.png',
        activeImage: 'https://img.icons8.com/external-inkubators-basic-outline-inkubators/344/fb5012/external-empty-folder-file-and-folder-inkubators-basic-outline-inkubators.png',
        navigationName: 'Projects',
        link: ''
    },
    {
        index: 'messages',
        inactiveImage: 'https://img.icons8.com/external-outline-stroke-bomsymbols-/2x/external-chat-communication-outline-outline-stroke-bomsymbols--6.png',
        activeImage: 'https://img.icons8.com/external-outline-stroke-bomsymbols-/2x/fb5012/external-chat-communication-outline-outline-stroke-bomsymbols--6.png',
        navigationName: 'Messages',
        link: ''
    },
    {
        index: 'calendar',
        inactiveImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/external-essentials-essentials-ui-line-adri-ansyah-39.png',
        activeImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/fb5012/external-essentials-essentials-ui-line-adri-ansyah-39.png',
        navigationName: 'Calender',
        link: ''
    },
    {
        index: 'help',
        inactiveImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/external-social-social-media-interface-line-adri-ansyah-4.png',
        activeImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/fb5012/external-social-social-media-interface-line-adri-ansyah-4.png',
        navigationName: 'Help',
        link: ''
    },
    {
        index: 'settings',
        inactiveImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/external-social-social-media-interface-line-adri-ansyah-31.png',
        activeImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/fb5012/external-social-social-media-interface-line-adri-ansyah-31.png',
        navigationName: 'Settings',
        link: ''
    },
]

const CLIENTNAVIGATION = [
    {
        index: 'link1',
        inactiveImage: 'https://img.icons8.com/material-rounded/452/dashboard-layout.png',
        activeImage: 'https://img.icons8.com/material-rounded/452/fb5012/dashboard-layout.png',
        navigationName: 'Dashboard',
        link: <VacantJobs />
    },
    {
        index: 'link2',
        inactiveImage: 'https://img.icons8.com/external-becris-lineal-becris/344/external-user-mintab-for-ios-becris-lineal-becris.png',
        activeImage: 'https://img.icons8.com/external-becris-lineal-becris/344/fb5012/external-user-mintab-for-ios-becris-lineal-becris.png',
        navigationName: 'Profile',
        link: <ExpertDashboard />
    },
    {
        index: 'link3',
        inactiveImage: 'https://img.icons8.com/ios/2x/yandex-money.png',
        activeImage: 'https://img.icons8.com/ios/2x/fb5012/yandex-money.png',
        navigationName: 'Hired Gigs',
        link: ''
    },
    {
        index: 'link4',
        inactiveImage: 'https://img.icons8.com/external-outline-stroke-bomsymbols-/2x/external-chat-communication-outline-outline-stroke-bomsymbols--6.png',
        activeImage: 'https://img.icons8.com/external-outline-stroke-bomsymbols-/2x/fb5012/external-chat-communication-outline-outline-stroke-bomsymbols--6.png',
        navigationName: 'Messages',
        link: ''
    },
    {
        index: 'link5',
        inactiveImage: 'https://img.icons8.com/external-outline-satawat-anukul/2x/external-economy-economy-outline-outline-satawat-anukul.png',
        activeImage: 'https://img.icons8.com/external-outline-satawat-anukul/2x/fb5012/external-economy-economy-outline-outline-satawat-anukul.png',
        navigationName: 'Transactions',
        link: ''
    },
    {
        index: 'link6',
        inactiveImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/external-social-social-media-interface-line-adri-ansyah-4.png',
        activeImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/fb5012/external-social-social-media-interface-line-adri-ansyah-4.png',
        navigationName: 'Help',
        link: ''
    },
    {
        index: 'link7',
        inactiveImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/external-social-social-media-interface-line-adri-ansyah-31.png',
        activeImage: 'https://img.icons8.com/external-line-adri-ansyah/2x/fb5012/external-social-social-media-interface-line-adri-ansyah-31.png',
        navigationName: 'Settings',
        link: ''
    },
]
//SIDE NAVIGATION OF THE EXPERT PAGE
const ExpertNavigation = () => {
    const [active, setActive] = useState('dashboard')
    return(
        <div className="ExpertNavigation_Body" >
        <div className="ExpertSideNavigation">
        <div className="ProfileInformation">
          <img src={PLACEHOLDER_IMG} alt="" srcSet="" />
          <div className="Information">
              <h2>Afolabi Nuel</h2>
              <p> Product Designer</p>
              <em> Expert </em>
          </div>
      </div>
        <Nav variant='tabs'
        onSelect={(selectedKey) => setActive(selectedKey)}
        style={{ 
            display: 'flex', flexDirection:'column', paddingLeft: '10px',
            }} className='Navigation'>
                {
                    EXPERTNAVIGATION.map( navigation => {
                        return (
                        <Nav.Link eventKey={navigation.index} key={navigation.index}
                        className={
                            active === navigation.index
                            ? "Nav_Link_Active"
                            : "Nav_Link_Inactive"
                        }
                        >
                        {
                            active === navigation.index
                            ? <img src={navigation.activeImage} alt="" srcSet="" className="Icons"/>
                            : <img src={navigation.inactiveImage} alt="" srcSet="" className="Icons"/>
                        }
                        <p>{navigation.navigationName}</p>
                        {
                            active === navigation.index
                            && navigation.link
                        }
                        </Nav.Link>
                        )
                    })
                }
            </Nav>
            </div>
        </div>
    )
}

//SIDE NAVIGATION OF THE CLIENT PAGE
const ClientNavigation = () => {
    const [active, setActive] = useState('link1')
    return(
        <Nav defaultActiveKey='/home'
        onSelect={(selectedKey) => setActive(selectedKey)}
         style={{ 
            display: 'flex', flexDirection:'column', paddingLeft: '10px',
            }} className='Navigation'
            >
                {
                    CLIENTNAVIGATION.map( navigation => {
                        return (
                        <Nav.Link  eventKey={navigation.index} 
                             className={
                            active === navigation.index
                            ? "Nav_Link_Active"
                            : "Nav_Link_Inactive"
                        }
                        >
                        {
                            active === navigation.index
                            ? <img src={navigation.activeImage} alt="" srcSet="" className="Icons"/>
                            : <img src={navigation.inactiveImage} alt="" srcSet="" className="Icons"/>
                        }
                        <p>{navigation.navigationName}</p>
                        {/* {
                            active === navigation.index
                            && navigation.link
                        } */}
                        </Nav.Link>
                        )
                    })
                }
            </Nav>
    )
}

export { ExpertNavigation, ClientNavigation}