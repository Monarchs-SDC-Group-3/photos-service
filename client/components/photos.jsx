import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    console.log('hello component')
    this.getPhotos(Math.floor(Math.random() * 101));
    console.log(this.state.photos)
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
      console.log(response);
      this.setState({
        photos: response
      })
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.photos[0]} />
      </div>
    )
  }
}

export default Photos;