import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Photo from './photo.jsx';
import AllPhotos from './allPhotos.jsx';
import PhotoCarousel from './carousel.jsx';
import './styles/main.css';
import './styles/allPhotos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      view: 'main'
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    this.getPhotos(window.location.pathname);
  }

  getPhotos(id) {
    axios.get(`http://localhost:3000/api/homes/${id}/photos`)
      .then((response) => {
        console.log('it works')
        this.setState({
          photos: response.data
        })
      })
      .catch((err) => {
        console.log(err, 'it got here');
      })
  }

  changeView(change) {
    this.setState({
      view: change
    });
  }

  render() {
    let { view, photos } = this.state;
    // let photos = photos.map(photo => photo.url)

    if (photos.length === 0) {
      return(
        <div>loading</div>
      )
    } else {
      if (view === 'main') {
        return (
          <div>
            <div id="container">
              <div id="heading">
                <h1>Little House on the Prairie</h1>
              </div>
              <div id="main-icons">
                <span id="address">That One Town, In a Region, Of a Country</span>
                <div>
                  <span id="main-share">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Share
                  </span>
                  <span id="main-heart">
                    <FontAwesomeIcon icon={faHeart} /> Like
                  </span>
                </div>
              </div>
              <div>
                <Photo photos={photos} changeView={this.changeView}/>
              </div>
            </div>
          </div>
        )
      } else if (view === 'all-photos') {
        return (
        <div id="container">
          <span className="back" onClick={() => this.changeView('main')}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <AllPhotos view={view} photos={photos} changeView={this.changeView} />
        </div>
        )
      } else if (view === 'carousel') {
        return (
          <PhotoCarousel photos={photos} changeView={this.changeView} />
        )
      }
    }
  }
}

export default Photos;