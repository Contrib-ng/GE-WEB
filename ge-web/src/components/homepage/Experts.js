import React, { useContext } from 'react'
import './styles/Experts.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { ModalContext } from '../../States'
import { SKILLS } from '../../Data'


const Experts = () => {
    const context = useContext(ModalContext)
    const {more, setMore} = context
  return (
    <div className='Experts_Body'>
        <h1>Hire Experts</h1>
        <p> Search for experts by categories</p>
        <div className="Experts_Skill_Box">
            {
                SKILLS.slice(0, more).map(skill => {
                    return (
                        <div className="Box" key={skill.name} >
                            <div className="Name_Icon">
                            <img src={skill.icon} alt="" />
                            <h1>{skill.name}</h1>
                            </div>
                            <img src={skill.backgroundImage} alt="" srcSet="" className='Image' />
                        </div>
                    )
                })
            }
        </div>
        {
            more === 10 ? <div className="Button_Container">
            <Button type='button' onClick={() => setMore(more + 10)}>
                SHOW MORE
                <FontAwesomeIcon icon={faCaretDown} size='lg' color='white' 
                className='Button_Icon'/>
            </Button>
        </div> :
        <div className="Button_Container">
            <Button type='button' onClick={() => setMore(more - 10)}>
                SHOW LESS
                <FontAwesomeIcon icon={faCaretUp} size='lg' color='white' 
                className='Button_Icon'/>
            </Button>
        </div>
        }
    </div>
  )
}


export default Experts