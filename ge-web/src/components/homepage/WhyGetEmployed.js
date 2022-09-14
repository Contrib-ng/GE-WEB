import React from 'react'
import '../styles/WhyGetEmployed.css'

const CircleImages = [
    {
        index: 1,
        image: 'https://ouch-cdn2.icons8.com/gVEAiY5-yYQJewkpxBnxPcBoGF-ZGGWoLrE2ELkpFPc/rs:fit:256:280/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjUx/L2Q4YTdjZmYwLTM2/MTEtNGJhMy1iODUw/LTdiNWQ2MmYwMTUz/Zi5wbmc.png'
    },
    {
        index: 2,
        image: 'https://ouch-cdn2.icons8.com/FMJRt8tGZq_wb_NSuQ_qFjTZdhL9HOqUZKWZGur4i9Q/rs:fit:256:234/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzYv/ZjU4MGRjZmItZjQ5/Zi00MWY5LWFiNjQt/NjkwM2ExMTI3NjIw/LnBuZw.png'
    },
    {
        index: 3,
        image: 'https://ouch-cdn2.icons8.com/UNMxPK_qSAUGJhJWW0yX-T3oa2NuNnx-0Za2WZezWp8/rs:fit:256:239/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODYw/LzcyODc3YWYwLWI1/ODItNDhlZS05NjIz/LTQ5lghhY2JmZDMz/My5wbmc.png'
    }
]

const Mission = [
    {
        index: 1,
        image: 'https://img.icons8.com/glyph-neue/344/morale.png',
        name: 'Values',
        message: 'We have the lowest fees in the industry, providing you with maximum value at minimum cost.'
    },
    {
        index: 2,
        image: 'https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/344/external-flexibility-freelance-smashingstocks-mixed-smashing-stocks.png',
        name: 'Flexibility',
        message: 'We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.'
    },
    {
        index: 3,
        image: 'https://img.icons8.com/glyph-neue/452/wallmount-camera.png',
        name: 'Security',
        message: 'We offer SafePay payment protection and your choice of preferred payment method for financial peace of mind.'
    },
    {
        index: 4,
        image: 'https://img.icons8.com/glyph-neue/2x/customer-support.png',
        name: 'Support',
        message: 'Our dedicated support team works 24/7 to resolve all of your queries over the phone or email, no matter where you are located.'
    },
    {
        index: 5,
        image: 'https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/344/external-badge-award-vitaliy-gorbachev-fill-vitaly-gorbachev-3.png',
        name: 'Credibility',
        message: 'We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across the globe.'
    },
]

const WhyGetEmployed = () => {
  return (
    <div className='WhyGetEmployed_Body'>
        <h1>Why Get Employed</h1>
        <p>We give experiences for perfection </p>
       <div className="Circle_Image_Container">
            {
                CircleImages.map(circleImage => {
                    return (
                        <div className="Circle_Image" key={circleImage.index}>
                        <div className="Circle" ></div>
                        <img src={circleImage.image} alt="" srcSet="" /></div>
                    )
                })
            }    
       </div>
        <div className="Mission_Container">
        {
            Mission.map(mission => {
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