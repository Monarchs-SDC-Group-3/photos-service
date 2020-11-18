import React from 'react';

const Photo = (props) => {
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');

  return (
    <div id="gallery">
      <div className={`gallery-item gallery-item-1`}>
        <img src={props.photos[0]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-2`}>
        <img src={props.photos[1]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-3`}>
        <img src={props.photos[2]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-4`}>
        <img src={props.photos[3]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-5`}>
        <img src={props.photos[4]} alt="" className="gallery-img"/>
        <a id="carousel-btn" onClick={() => {
          props.changeView("all-photos");
        }}>See All Photos</a>
      </div>
    </div>
  )
}

export default Photo;