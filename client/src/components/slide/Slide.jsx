import React from 'react'
import './Slide.scss'
import Slider from 'infinite-react-carousel';


const Slide = ({children,slidesToShow,arrowsScroll,heading}) => {
  return (
    <div className="slide">
        <div className="container">
            <h1>{heading}</h1>
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide