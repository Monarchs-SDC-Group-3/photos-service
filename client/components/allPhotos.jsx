import React from 'react';
import AllPhoto from './allPhoto.jsx';
import './styles/allPhotos.css';


const AllPhotos = (props) => {
  let { photos, view, changeView} = props;

  return (
    <div className="photos-modal">
      {photos.map(photo =>
        <AllPhoto photo={photo} key={photo.key} changeView={changeView} />
      )}
    </div>
  )
}

export default AllPhotos;