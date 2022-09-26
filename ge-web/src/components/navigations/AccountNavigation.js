import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { CLIENTNAVIGATION, EXPERTNAVIGATION, PLACEHOLDER_IMG } from './SideNavigationParameters'
import './styles/ExpertNavigation.css'


const ExpertNavigation = () => {
    const [active, setActive] = useState('dashboard')
    return(
        <div className="ExpertNavigation_Body">
        <div className="ExpertSideNavigation">
        <div className="ProfileInformation" style={{
             position: 'fixed',
             }}>
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
            gap: '20px', marginTop: '100px',
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
                        <div className="Navigation_Container"
                         style={{ 
                            position: 'fixed', display: 'flex',
                            }}
                        >
                        {
                            active === navigation.index
                            ? <img src={navigation.activeImage} alt="" srcSet="" className="Icons" />
                            : <img src={navigation.inactiveImage} alt="" srcSet="" className="Icons" />
                        }
                        <p>{navigation.navigationName}</p>
                        </div>
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

const ClientNavigation = () => {
    const [active, setActive] = useState('dashboard')
    return(
        <div className="ClientNavigation_Body">
        <div className="ClientSideNavigation">
        <div className="ProfileInformation" style={{
             position: 'fixed',
             }}>
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
            gap: '20px', marginTop: '100px',
            }} className='Navigation'>
                {
                    CLIENTNAVIGATION.map( navigation => {
                        return (
                        <Nav.Link eventKey={navigation.index} key={navigation.index}
                        className={
                            active === navigation.index
                            ? "Nav_Link_Active"
                            : "Nav_Link_Inactive"
                        }
                        >
                        <div className="Navigation_Container"
                         style={{ 
                            position: 'fixed', display: 'flex',
                            }}
                        >
                        {
                            active === navigation.index
                            ? <img src={navigation.activeImage} alt="" srcSet="" className="Icons" />
                            : <img src={navigation.inactiveImage} alt="" srcSet="" className="Icons" />
                        }
                        <p>{navigation.navigationName}</p>
                        </div>
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

export { ExpertNavigation, ClientNavigation}