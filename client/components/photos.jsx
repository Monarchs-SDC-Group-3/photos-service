import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Photo from './photo.jsx';
import AllPhotos from './allPhotos.jsx';
import './styles/main.css';
import './styles/allPhotos.css';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      mainPhotos: [],
      view: 'main'
    };
    this.displayAll = this.displayAll.bind(this);
    this.displayCarousel = this.displayCarousel.bind(this);
    this.changeView = this.changeView.bind(this);
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

  changeView(change) {
    this.setState({
      view: change
    });
  }

  displayAll() {
    this.setState({
      view: 'all-photos'
    });
  }

  displayCarousel() {
    this.setState({
      view: 'carousel'
    });
  }

  render() {

    return (
      <div>
        <div id="container">
          <div className="gallery">
            {/* <div id="main-photo">
              <img src={this.state.photos[0]} />
            </div> */}
            {this.state.mainPhotos.map(photo =>
              <Photo photo={photo} key={photo} changeView={this.changeView}/>
            )}
          </div>
        </div>
        <AllPhotos view={this.state.view} photos={this.state.photos}/>
      </div>

    )
  }
}

export default Photos;