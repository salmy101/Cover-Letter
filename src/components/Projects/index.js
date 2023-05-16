import React from 'react'
import "./index.scss"
import Carousel from '../Carousel/Carousel.js'

function Projects() {
  return (
    <>
      <div className="container projects-page" id="projects">
          <h1>My projects</h1>
        <div className='text-zone'>
          <p>
          Lorem ipsum dolor sit amet. Quo eaque optio sit asperiores nihil sed molestias dignissimos sed praesentium odio. Eum cumque rerum id earum nihil ad dolores quod aut dolorem possimus eos nemo voluptas aut repudiandae exercitationem in laudantium delectus! Ex beatae culpa sit possimus similique ex praesentium dignissimos qui animi sunt?
          </p>
        </div>
        <div className='slide-zone'>
          <Carousel />
        </div>
       
      </div>
    </>
  )
}

export default Projects