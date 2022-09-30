import React from 'react'
import './styles/Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons'
import { PEOPLETESTIMONIAL } from '../../Data'


const Testimonials = () => {
    const ratingArray = []

var GetRating = (
    PEOPLETESTIMONIAL.map(ratings => {
        var num = ratings.rating
        return num
    })
)


GetRating.map(rate => {
        while ( rate > 0 ){
           if (rate > 0 )
             ratingArray.push(rate % 10)
            rate -= 1
        }
        return null
})


  return (
    <div className='Testimonials_Body'>
      <h1>Testimonials</h1>
      <div className="Testimonials_People">
        {
            PEOPLETESTIMONIAL.map(peopleTestimonial => {
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
                                : <FontAwesomeIcon icon={faStarHalf} color='gold' key={ratingStar}/>
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
