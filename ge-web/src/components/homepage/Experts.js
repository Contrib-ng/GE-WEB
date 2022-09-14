import React, { useState } from 'react'
import '../styles/Experts.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'


const Skills = [
    {
        name: 'Writing & Translation',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/hand-with-pen.png',
        backgroundImage: 'https://img.freepik.com/free-photo/joyful-black-author-works-writing-new-book-readers_273609-28047.jpg?w=996&t=st=1663069232~exp=1663069832~hmac=65c8395fdfc2e9ef05503a807021480ca225c453d1f644b098193b4c22bf80c6'
    },
    {
        name: 'Sales & Marketing',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/total-sales-1.png',
        backgroundImage: 'https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1060&t=st=1663069344~exp=1663069944~hmac=1b28dd2775f717ca5698a66c0da1b063f93213ab2b17ec24d7893bf64bbf8172'
    },
    {
        name: 'Web Development',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/code--v2.png',
        backgroundImage: 'https://img.freepik.com/free-photo/computer-screens-running-programming-code-empty-software-developing-agency-office-computers-parsing-data-algorithms-background-neural-network-servers-cloud-computing-data-room_482257-33353.jpg?w=1060&t=st=1663069360~exp=1663069960~hmac=3963e81ed8b3448adbd6f76f2b55262ebbdfd85d9a336c1827195ea6f9f100f1'
    },
    {
        name: 'Design',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/windows10-personalization.png',
        backgroundImage: 'https://img.freepik.com/free-photo/black-videographer-smiling-camera-editing-video-project-post-production-software-working-creative-studio-office_482257-5421.jpg?w=996&t=st=1663069569~exp=1663070169~hmac=f42cffdf73ffea183f32c44a05f2518e0f798f9b1773c104693d35a14b73f2f3'
    },
    {
        name: 'Data Entry',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/cloud-folder.png',
        backgroundImage: 'https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?w=996&t=st=1663069478~exp=1663070078~hmac=afe6344505874fc5731bf876650e8386318af4c7e4d467fab2b60cdfd151e02d'
    },
    {
        name: 'Education',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/diploma.png',
        backgroundImage: 'https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?w=996&t=st=1663069449~exp=1663070049~hmac=62eb946cdac8675b5f907e7e233c5637e6379fac36dce95ea50efdb7283832be'
    },
    {
        name: 'Domestic Chore',
        icon: 'https://img.icons8.com/dotty/452/FFFFFF/carpet-cleaning.png',
        backgroundImage: 'https://img.freepik.com/free-photo/smiling-positive-housewife-with-dreadlocks-holds-mop_273609-50241.jpg?w=996&t=st=1663069632~exp=1663070232~hmac=f63abde35150e6b711b9f5462917b2c7aaf25b9203076a34edfb8674681694d6'
    },
    {
        name: 'Voice Over',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/micro.png',
        backgroundImage: 'https://img.freepik.com/free-photo/happy-asian-girl-recording-podcast-with-headphones-microphone_7861-2937.jpg?w=1060&t=st=1663069658~exp=1663070258~hmac=1c718e5ce241d8b35f1ee667ca39c2885943918f0c1d3869b8da0eb3dd244bcc'
    },
    {
        name: 'Finance & Business',
        icon: 'https://img.icons8.com/dotty/452/FFFFFF/mobile-payment.png',
        backgroundImage: 'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=1060&t=st=1663069697~exp=1663070297~hmac=4cdfa0acd5067cea38a4fbcf3d8778b89d991f022b56665b2d18d7d845a18d34'
    },
    {
        name: 'Accounting',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/estimates.png',
        backgroundImage: 'https://photo-cdn2.icons8.com/cwV09dePn3DlX-L-NToxwFssoeCGurcmS5Qr7fs0Meg/rs:fit:1607:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi82M2RmYjU4MTk0/ODE0ZTQ5YmVmNGRm/lgIxMTRiYzgzYy5q/cGc.jpg'
    },




    {
        name: 'Writing & Translation',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/hand-with-pen.png',
        backgroundImage: 'https://img.freepik.com/free-photo/joyful-black-author-works-writing-new-book-readers_273609-28047.jpg?w=996&t=st=1663069232~exp=1663069832~hmac=65c8395fdfc2e9ef05503a807021480ca225c453d1f644b098193b4c22bf80c6'
    },
    {
        name: 'Sales & Marketing',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/total-sales-1.png',
        backgroundImage: 'https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1060&t=st=1663069344~exp=1663069944~hmac=1b28dd2775f717ca5698a66c0da1b063f93213ab2b17ec24d7893bf64bbf8172'
    },
    {
        name: 'Web Development',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/code--v2.png',
        backgroundImage: 'https://img.freepik.com/free-photo/computer-screens-running-programming-code-empty-software-developing-agency-office-computers-parsing-data-algorithms-background-neural-network-servers-cloud-computing-data-room_482257-33353.jpg?w=1060&t=st=1663069360~exp=1663069960~hmac=3963e81ed8b3448adbd6f76f2b55262ebbdfd85d9a336c1827195ea6f9f100f1'
    },
    {
        name: 'Design',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/windows10-personalization.png',
        backgroundImage: 'https://img.freepik.com/free-photo/black-videographer-smiling-camera-editing-video-project-post-production-software-working-creative-studio-office_482257-5421.jpg?w=996&t=st=1663069569~exp=1663070169~hmac=f42cffdf73ffea183f32c44a05f2518e0f798f9b1773c104693d35a14b73f2f3'
    },
    {
        name: 'Data Entry',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/cloud-folder.png',
        backgroundImage: 'https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?w=996&t=st=1663069478~exp=1663070078~hmac=afe6344505874fc5731bf876650e8386318af4c7e4d467fab2b60cdfd151e02d'
    },
    {
        name: 'Education',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/diploma.png',
        backgroundImage: 'https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?w=996&t=st=1663069449~exp=1663070049~hmac=62eb946cdac8675b5f907e7e233c5637e6379fac36dce95ea50efdb7283832be'
    },
    {
        name: 'Domestic Chore',
        icon: 'https://img.icons8.com/dotty/452/FFFFFF/carpet-cleaning.png',
        backgroundImage: 'https://img.freepik.com/free-photo/smiling-positive-housewife-with-dreadlocks-holds-mop_273609-50241.jpg?w=996&t=st=1663069632~exp=1663070232~hmac=f63abde35150e6b711b9f5462917b2c7aaf25b9203076a34edfb8674681694d6'
    },
    {
        name: 'Voice Over',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/micro.png',
        backgroundImage: 'https://img.freepik.com/free-photo/happy-asian-girl-recording-podcast-with-headphones-microphone_7861-2937.jpg?w=1060&t=st=1663069658~exp=1663070258~hmac=1c718e5ce241d8b35f1ee667ca39c2885943918f0c1d3869b8da0eb3dd244bcc'
    },
    {
        name: 'Finance & Business',
        icon: 'https://img.icons8.com/dotty/452/FFFFFF/mobile-payment.png',
        backgroundImage: 'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=1060&t=st=1663069697~exp=1663070297~hmac=4cdfa0acd5067cea38a4fbcf3d8778b89d991f022b56665b2d18d7d845a18d34'
    },
    {
        name: 'Accounting',
        icon: 'https://img.icons8.com/nolan/452/FFFFFF/estimates.png',
        backgroundImage: 'https://photo-cdn2.icons8.com/cwV09dePn3DlX-L-NToxwFssoeCGurcmS5Qr7fs0Meg/rs:fit:1607:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi82M2RmYjU4MTk0/ODE0ZTQ5YmVmNGRm/lgIxMTRiYzgzYy5q/cGc.jpg'
    }
]

const Experts = () => {
    const [more, setMore] = useState(10)
  return (
    <div className='Experts_Body'>
        <h1>Hire Experts</h1>
        <p> Search for experts by categories</p>
        <div className="Experts_Skill_Box">
            {
                Skills.slice(0,more).map(skill => {
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