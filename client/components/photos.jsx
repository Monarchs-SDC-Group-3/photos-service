import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Photo from './photo.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      mainPhotos: []
    }
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
      for (let i = 1; i < 5; i++) {
        basePhotos.push(response[i]);
      }
      this.setState({
        photos: response,
        mainPhotos: basePhotos
      })
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {console.log(this.state.mainPhotos[1])}
            <img src={this.state.photos[0]} />
          </div>
          {this.state.mainPhotos.map(photo =>
            <Photo photo={photo} key={photo}/>
          )}
        </div>
      </div>
    )
  }
}

export default Photos;