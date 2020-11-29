import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

const Photo = (props) => {
  let { photos, changeView } = props;
  console.log(props.photos)

  return (
    <div id="photos-gallery">
      <div className={`photos-gallery-item photos-gallery-item-1`}>
        <img onClick={() => changeView('carousel')} src={photos[0].url} className="photos-gallery-img"/>
      </div>
      <div className={`photos-gallery-item photos-gallery-item-2`}>
        <img onClick={() => changeView('carousel')} src={photos[1].url} className="photos-gallery-img"/>
      </div>
      <div className={`photos-gallery-item photos-gallery-item-3`}>
        <img onClick={() => changeView('carousel')} src={photos[2].url} className="photos-gallery-img"/>
      </div>
      <div className={`photos-gallery-item photos-gallery-item-4`}>
        <img onClick={() => changeView('carousel')} src={photos[3].url} className="photos-gallery-img"/>
      </div>
      <div className={`photos-gallery-item photos-gallery-item-5`}>
        <img onClick={() => changeView('carousel')} src={photos[4].url} className="photos-gallery-img"/>
        <a id="photos-all-photos-btn" onClick={() => {
          changeView("all-photos");
        }}>
          <span><FontAwesomeIcon icon={faGripVertical} /> </span> See All Photos</a>
      </div>
    </div>
  )
}

export default Photo;