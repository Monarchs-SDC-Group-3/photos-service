import React from 'react';
import './styles/carousel.css';


const CarouselPhoto = (props) => {
  let { photos, index} = props;
  let slideIndex = 1;

  return(
    <div id="carousel-card">
      <img className='carousel-img' src={photos[index].url} alt="carousel-photo"/>
    </div>
  )
}

export default CarouselPhoto;