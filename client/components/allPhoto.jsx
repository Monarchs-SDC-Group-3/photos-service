import React from 'react';
import './styles/allPhotos.css';

let counter = 0;

const AllPhoto = (props) => {
  let {photo} = props;

  counter++;

  return (
    <div className={`all-gallery-item all-gallery-item-${counter}`}>
      <img src={photo} className="all-gallery-img"/>
    </div>
  )
}

export default AllPhoto;