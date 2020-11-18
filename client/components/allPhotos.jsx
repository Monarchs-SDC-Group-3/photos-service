import React from 'react';
import AllPhoto from './allPhoto.jsx';
import './styles/allPhotos.css';


const AllPhotos = (props) => {
  let { photos, view } = props;
  if (view === 'all-photos') {
    return (
      <div>
        <span>x</span>
        <div>
          {photos.map(photo =>
            <AllPhoto photo={photo} key={photo}/>
          )}
        </div>
      </div>
    )
  } else {
    return (
      'loading'
    )
  }
}

export default AllPhotos;