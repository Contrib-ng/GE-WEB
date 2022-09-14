import React from 'react'
import '../styles/Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons'

const PeopleTestimonial = [
    {
        image: 'https://img.freepik.com/free-photo/close-up-young-man-looking-camera-against-grey-wall_23-2148130316.jpg?w=996&t=st=1663087071~exp=1663087671~hmac=a2dd047085ea405182c77219d49331f2f86690c72e49349fb2032792862c5275',
        name: 'Akinola Josiah',
        rating: 5,
        message: `To sum up, I would highly recommend visiting this gorgeous museum 
        in the heart of Paris. The works of art are definitely a must-see.`
    },
    {
        image: 'https://img.freepik.com/free-photo/little-girl-t-shirt-jeans-holding-hand-arm-looking-surprised-front-view_176474-89425.jpg?w=996&t=st=1663163097~exp=1663163697~hmac=63537ed6b4b946f63b5289e832211e22ab59e6b9b7d7ede66ec03a55d20ae2dd',
        name: 'Casimero Benzema',
        rating: 3,
        message: `To sum up, I would highly recommend visiting this gorgeous museum 
        in the heart of Paris. The works of art are definitely a must-see.`
    },
    {
        image: 'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1663163517~exp=1663164117~hmac=912c255b0f01865544675fb9c3a9e15b31d0d646bc06ad4ce063a72695a06315',
        name: 'Martini Lucas',
        rating: 3,
        message: `To sum up, I would highly recommend visiting this gorgeous museum 
        in the heart of Paris. The works of art are definitely a must-see.`
    },
    {
        image: 'https://img.freepik.com/free-photo/young-attractive-african-girl-glasses-smiling-sitting-table-white-wall-future-fashion-icon-graphic-designer_176420-9148.jpg?w=996&t=st=1663163529~exp=1663164129~hmac=d24c9be59e93c6dc40c045a35c7149e5f29a9efced211c2b08535bdf531dd06c',
        name: 'Shalom Tobiloba',
        rating: 3,
        message: `To sum up, I would highly recommend visiting this gorgeous museum 
        in the heart of Paris. The works of art are definitely a must-see.`
    },
    {
        image: 'https://img.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg?w=996&t=st=1663163536~exp=1663164136~hmac=e9d5323180b5550ea4190d61c3c73d690137a7a2c1793a4568c5a9da2b1f845d',
        name: 'Reigneth Blu',
        rating: 3,
        message: `To sum up, I would highly recommend visiting this gorgeous museum 
        in the heart of Paris. The works of art are definitely a must-see.`
    },

]


const Testimonials = () => {
    const ratingArray = []

var GetRating = (
    PeopleTestimonial.map(ratings => {
        var num = ratings.rating
        return num
    })
)
console.log('The rating is', GetRating)

const RatingCalculation = () => {
    while ( GetRating > 0 ){
       if (GetRating > 0 )
         ratingArray.push(GetRating % 10)
        GetRating -= 1
    }     
}
RatingCalculation()

  return (
    <div className='Testimonials_Body'>
      <h1>Testimonials</h1>
      <div className="Testimonials_People">
        {
            PeopleTestimonial.map(peopleTestimonial => {
                return (
                    <div className="People" key={peopleTestimonial.image}>
                    <div className="Profile_Icon_Name_Rating">
                    <img src={peopleTestimonial.image} alt="" srcSet="" />
                    <div className="Name_Rating">
                    <h4>{peopleTestimonial.name}</h4>
                    {
                        ratingArray.map(ratingStar => {
                            return (
                                ratingStar >= 1
                                ?<FontAwesomeIcon icon={faStar} color='gold' key={ratingStar}/>
                                : <FontAwesomeIcon icon={faStarHalf} color='gold' />
                            )
                        })
                    }
                    </div>
                    </div>
                    <p>	&ldquo;{peopleTestimonial.message}&rdquo;</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Testimonials
