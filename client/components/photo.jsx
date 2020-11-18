import React from 'react';

let count = 0;

const Photo = (props) => {
  count++;
  if (count === 5) {
    return (
      <div className={`gallery-item gallery-item-${count}`}>
        <img src={props.photo} alt="" className="gallery-img"/>
        <a id="carousel-btn" href="$">See All Photos</a>
      </div>
    )
  }
  return(
    <div className={`gallery-item gallery-item-${count}`}>
      <img src={props.photo} className="gallery-img"/>
    </div>
  )
}

export default Photo;