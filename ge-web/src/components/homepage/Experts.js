import React, { useState } from 'react'
import './styles/Experts.css'
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
        backgroundImage: 'https://img.freepik.com/free-photo/man-with-papers_1098-15660.jpg?w=996&t=st=1663165276~exp=1663165876~hmac=34bfe81675b111adfd7ab4d4637fee2ca3feb1e5f2aee53f894aef309bbb7759'
    },
    {
        name: 'Digital Marketing',
        icon: 'https://img.icons8.com/pastel-glyph/64/FFFFFF/web-marketing--v2.png',
        backgroundImage: 'https://img.freepik.com/free-vector/internet-marketing-agency-banner-digital-business_107791-2448.jpg?w=1380&t=st=1663677635~exp=1663678235~hmac=8a319baa6917375d6a406380de5d175b4b8485f7cf9b567f67431955f2b1e0c7'
    },
    {
        name: 'Video & Animation',
        icon: 'https://img.icons8.com/ios/344/FFFFFF/laptop-play-video--v1.png',
        backgroundImage: 'https://img.freepik.com/free-vector/staff-creating-film_1262-20681.jpg?w=900&t=st=1663677752~exp=1663678352~hmac=1da87ea1aa0a799f89eb0b39141f627bf4104510994ce51f553d1232b33bd453'
    },
    {
        name: 'Music & Audio',
        icon: 'https://img.icons8.com/windows/32/FFFFFF/itunes-note.png',
        backgroundImage: 'https://img.freepik.com/free-photo/retro-microphone-isolated-color-background_1387-912.jpg?w=996&t=st=1663677900~exp=1663678500~hmac=4e3c42e8241e514b91bb6805bb6deaf405071e4ba34d9d111ae3732e8e4c29f6'
    },
    {
        name: 'Lifestyle',
        icon: 'https://img.icons8.com/external-outline-wichaiwi/344/FFFFFF/external-lifestyle-generation-z-outline-wichaiwi.png',
        backgroundImage: 'https://img.freepik.com/free-photo/young-millennials-african-friends-outdoor-gym-happy-black-people-having-fun-together-generation-z-friendship-concept_627829-7340.jpg?size=626&ext=jpg&uid=R54281294&ga=GA1.2.1523002611.1663668793'
    },
    {
        name: 'Legal',
        icon: 'https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/FFFFFF/external-legal-due-diligence-icongeek26-outline-icongeek26.png',
        backgroundImage: 'https://img.freepik.com/free-photo/court-hammer-books-judgment-law-concept_144627-30462.jpg?size=626&ext=jpg&uid=R54281294&ga=GA1.2.1523002611.1663668793'
    },
    {
        name: 'Engineering',
        icon: 'https://img.icons8.com/external-becris-lineal-becris/2x/FFFFFF/external-engineering-literary-genres-becris-lineal-becris.png',
        backgroundImage: 'https://img.freepik.com/free-photo/building-new-concrete-houses_1398-3932.jpg?size=626&ext=jpg&uid=R54281294&ga=GA1.2.1523002611.1663668793'
    },
    {
        name: 'Customer Support',
        icon: 'https://img.icons8.com/wired/2x/FFFFFF/customer-support.png',
        backgroundImage: 'https://img.freepik.com/free-photo/african-american-man-customer-support-operator-with-hands-free-headset-working-office_231208-686.jpg?w=996&t=st=1663678195~exp=1663678795~hmac=0564234b2b694fbc6650c503e02948381ff034af6a319a7cb4de67b3bbaf92e3'
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
                Skills.slice(0, more).map(skill => {
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