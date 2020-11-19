import React from 'react';

const Photo = (props) => {
  let { photos, changeView } = props;

  return (
    <div id="gallery">
      <div className={`gallery-item gallery-item-1`}>
        <img onClick={() => changeView('carousel')} src={photos[0]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-2`}>
        <img onClick={() => changeView('carousel')} src={photos[1]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-3`}>
        <img onClick={() => changeView('carousel')} src={photos[2]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-4`}>
        <img onClick={() => changeView('carousel')} src={photos[3]} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-5`}>
        <img onClick={() => changeView('carousel')} src={photos[4]} alt="" className="gallery-img"/>
        <a id="all-photos-btn" onClick={() => {
          changeView("all-photos");
        }}>See All Photos</a>
      </div>
    </div>
  )
}

export default Photo;