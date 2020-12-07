import React from 'react';
import './styles/carousel.css';


const CarouselPhoto = (props) => {
  let { photos, index} = props;
  let slideIndex = 1;

  return(
    <div id="photos-carousel-card">
      <img className='photos-carousel-img' src={photos[index].listing_url} alt="carousel-photo"/>
    </div>
  )
}

export default CarouselPhoto;