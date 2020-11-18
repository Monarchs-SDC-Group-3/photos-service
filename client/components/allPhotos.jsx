import React from 'react';
import AllPhoto from './allPhoto.jsx';
import './styles/allPhotos.css';


const AllPhotos = (props) => {
  let { photos, view, changeView} = props;

  return (
    <div className="modal-content">
      {photos.map(photo =>
        <AllPhoto photo={photo} key={photo}/>
      )}
    </div>
  )
}

export default AllPhotos;