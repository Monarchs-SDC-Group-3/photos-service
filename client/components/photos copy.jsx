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

  render() {
    return (
      <div>
        <div id="container">
          <div>
            <Photo photos={this.state.photos} changeView={this.changeView}/>
          </div>
          <div id="modal">
            <AllPhotos view={this.state.view} photos={this.state.photos} changeView={this.changeView} />
          </div>
        </div>
      </div>
    )
  }
}

export default Photos;

else if (view === 'carousel') {
  return (
    <div>
      <div id="container">
        <span className="close" onClick={() => this.changeView('main')}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <div id="carousel">
          <AllPhotos view={view} photos={photos} changeView={this.changeView} />
        </div>
      </div>
    </div>
  );
}