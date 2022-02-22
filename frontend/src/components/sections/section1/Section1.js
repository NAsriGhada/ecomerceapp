import React from 'react'
import "./Section1.css"
import {Carousel,} from "react-bootstrap"

function Section1() {
  return (
    <div className='firstSection'>
    <div className='redbg'></div>
    <div  className='sectionOneImg'>
        <img src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3015ff09e0cb58feaa453e5c/tytyyty-min.jpg' alt='' width="970" height="700"/>
    </div>
    <div className='sectionOneCarousel'>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d0bbdfb28cbc5e918d68f21e/rrrrr-min.jpg"
      alt="First slide"
      width="450" height="450" 
    />
    <Carousel.Caption>
     <button className='sectionOneButton'>Product</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d0bbdfb28cbc5e918d68f21e/rrrrr-min.jpg"
      alt="Second slide"
      width="450" height="450"
    />
    <Carousel.Caption>
    <button className='sectionOneButton'>Product</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d0bbdfb28cbc5e918d68f21e/rrrrr-min.jpg"
      alt="Third slide"
      width="450" height="450"
    />
    <Carousel.Caption>
    <button className='sectionOneButton'>Product</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    </div>
  )
}

export default Section1