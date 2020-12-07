import React from 'react';
import CarouselPhoto from './carouselPhoto.jsx';
import './styles/carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToNext = this.goToNext.bind(this);
  }

  goToPrevious() {
    let index = this.state.currentIndex;
    let length = 25;
     if (index < 1) {
       index = length  - 1;
     } else {
       index--;
     }
     this.setState({
       currentIndex: index
     })
  }

  goToNext() {
    let index = this.state.currentIndex;
    let length = 25;
     if (index === 24) {
       index = 0;
     } else {
       index++;
     }
     this.setState({
       currentIndex: index
     })
  }

  render() {
    let { photos, changeView} = this.props;
    let { currentIndex } = this.state;
    return(
      <div className="photos-carousel-container">
        <div id="photos-header">
          <div id="photos-nav-buttons">
            <span id="photos-close" onClick={() => changeView('main')}>
              <FontAwesomeIcon icon={faTimes}/> Close
            </span>
            <a id="photos-all-photos-btn" onClick={() => {changeView("all-photos")}}>
              <span>
                <FontAwesomeIcon icon={faGripVertical} />
              </span> See All Photos</a>
          </div>
          <span id="photos-tracker"><h3>{currentIndex + 1} / 25</h3></span>
          <div id="photos-icons">
            <span id="photos-share">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
            <span id="photos-heart">
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
        </div>
        <div id="photos-carousel">
          <div id='photos-back-arrow' onClick={() => this.goToPrevious()}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <CarouselPhoto id="photos-photo" photos={photos} index={currentIndex}/>
            <div id='photos-next-arrow' onClick={() => this.goToNext()}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
        <div id="photos-footer">
          <span id="photos-description">{photos.[currentIndex].description}</span>
        </div>
      </div>
    )
  }
}

export default Carousel;