import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

const Photo = (props) => {
  let { photos, changeView } = props;
  console.log(props.photos)

  return (
    <div id="gallery">
      <div className={`gallery-item gallery-item-1`}>
        <img onClick={() => changeView('carousel')} src={photos[0].url} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-2`}>
        <img onClick={() => changeView('carousel')} src={photos[1].url} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-3`}>
        <img onClick={() => changeView('carousel')} src={photos[2].url} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-4`}>
        <img onClick={() => changeView('carousel')} src={photos[3].url} className="gallery-img"/>
      </div>
      <div className={`gallery-item gallery-item-5`}>
        <img onClick={() => changeView('carousel')} src={photos[4].url} className="gallery-img"/>
        <a id="all-photos-btn" onClick={() => {
          changeView("all-photos");
        }}>
          <span><FontAwesomeIcon icon={faGripVertical} /> </span> See All Photos</a>
      </div>
    </div>
  )
}

export default Photo;