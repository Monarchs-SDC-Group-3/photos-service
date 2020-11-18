import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Photo from './photo.jsx';
import './styles/main.css';
import './styles/modal.css';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      mainPhotos: [],
      view: 'main'
    };
    this.displayAll.bind(this);
  }

  componentDidMount() {
    console.log('hello component')
    this.getPhotos(Math.floor(Math.random() * 101));
  }

  getPhotos(id) {
    // axios.get(`http://localhost:3000/api/photos/${id}`)
    //   .then((response) => {
    //     this.setState({
    //       photos: response
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err, 'it got here');
    //   })
    var settings = {
      "url": `http://localhost:3000/api/photos/${id}`,
      "method": "GET",
      "timeout": 0,
    };

    $.ajax(settings).done((response) => {
      let basePhotos = [];
      for (let i = 0; i < 5; i++) {
        basePhotos.push(response[i]);
      }
      this.setState({
        photos: response,
        mainPhotos: basePhotos
      })
    });
  }

  displayAll() {
    this.setState({
      view: 'all-photos'
    })
  }

  render() {
    return (
      <div className="container">
        <div className="gallery">
          {/* <div id="main-photo">
            <img src={this.state.photos[0]} />
          </div> */}
          {this.state.mainPhotos.map(photo =>
            <Photo photo={photo} key={photo}/>
          )}
        </div>
        <div id="carousel-modal" className="modal">
          <div className="modal-content">
            <span className="close"></span>
            <img src={this.state.photos[0]} alt="interior photo"/>
            <p>INSERT DESCRIPTION</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Photos;