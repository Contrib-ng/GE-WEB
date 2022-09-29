import React from 'react'
import './styles/PageNotFound.css'

const Image_404 = 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1664446577~exp=1664447177~hmac=dab2d98ef1b45a62aa675e1bab5d260572e1fa8d9087d20406c092016c662053'

const PageNotFound = () => {
  return (
    <div className="Components">
    <div className="PageNot_Found">
    <img src={Image_404} alt="" srcSet="" />
      <h1> Oops page not found</h1>
    </div>
    </div>
  )
}

export default PageNotFound