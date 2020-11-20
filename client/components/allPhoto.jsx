import React from 'react';
import './styles/allPhotos.css';


const AllPhoto = (props) => {
  let {photo, changeView} = props;

  return (
    <div className={`all-gallery-item agi${photo.key}`}>
      <img src={photo.url} className="all-gallery-img" onClick={() => changeView('carousel')}/>
    </div>


  )
}

export default AllPhoto;