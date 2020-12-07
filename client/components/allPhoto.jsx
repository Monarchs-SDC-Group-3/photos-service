import React from 'react';
import './styles/allPhotos.css';


const AllPhoto = (props) => {
  let {photo, changeView} = props;

  return (
    <div className={`photos-all-gallery-item agi${photo.listing_key}`}>
      <img src={photo.listing_url} className="photos-all-gallery-img" onClick={() => changeView('carousel')}/>
    </div>


  )
}

export default AllPhoto;