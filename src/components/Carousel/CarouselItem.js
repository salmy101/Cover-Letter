import React from 'react'

function CarouselItem({project}) {
  return (
    <div className='carousel-item'>
      <div></div>
      <img className='carousel-image' src={project.image}></img>
      <div className='carousle-description'>{project.description}</div>
    </div>
  )
}

export default CarouselItem