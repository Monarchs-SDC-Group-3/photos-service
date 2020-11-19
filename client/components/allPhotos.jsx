import React from 'react';
import AllPhoto from './allPhoto.jsx';
import './styles/allPhotos.css';


const AllPhotos = (props) => {
  let { photos, view, changeView} = props;

  return (
      <AllPhoto photos={photos} changeView={changeView} />
  )
}

export default AllPhotos;