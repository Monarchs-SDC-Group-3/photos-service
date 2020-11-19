import React from 'react';
import './styles/allPhotos.css';


const AllPhoto = (props) => {
  let {photos, changeView} = props;

  return (
    <div className="modal-content">
      <div className={`all-gallery-item all-gallery-item-1`}>
        <img src={photos[0]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-2`}>
        <img src={photos[1]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-3`}>
        <img src={photos[2]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-4`}>
        <img src={photos[3]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-5`}>
        <img src={photos[4]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-6`}>
        <img src={photos[5]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-7`}>
        <img src={photos[6]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-8`}>
        <img src={photos[7]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-9`}>
        <img src={photos[8]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-10`}>
        <img src={photos[9]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-11`}>
        <img src={photos[10]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-12`}>
        <img src={photos[11]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-13`}>
        <img src={photos[12]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-14`}>
        <img src={photos[13]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-15`}>
        <img src={photos[14]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-16`}>
        <img src={photos[15]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-17`}>
        <img src={photos[16]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-18`}>
        <img src={photos[17]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-19`}>
        <img src={photos[18]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-20`}>
        <img src={photos[19]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-21`}>
        <img src={photos[20]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-22`}>
        <img src={photos[21]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-23`}>
        <img src={photos[22]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-24`}>
        <img src={photos[23]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
      <div className={`all-gallery-item all-gallery-item-25`}>
        <img src={photos[24]} className="all-gallery-img" onClick={() => changeView('carousel')}/>
      </div>
    </div>


  )
}

export default AllPhoto;