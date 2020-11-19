import React from 'react';
import './styles/allPhotos.css';

let counter = 0;

const AllPhoto = (props) => {
  let {photo, changeView} = props;

  counter++;

  return (
    <div className={`all-gallery-item all-gallery-item-${counter}`}>
      <img src={photo} className="all-gallery-img" onClick={() => changeView('carousel')}/>
    </div>
  )
}

export default AllPhoto;