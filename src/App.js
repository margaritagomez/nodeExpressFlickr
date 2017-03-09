import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const ROOT_URL = 'http://localhost:9000/flickr/'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          images: []
      }
  }

  getPictures(){
    axios.get(ROOT_URL+'daisy').then(response => {
      console.log(response);
      this.setState({
        images: response.data.photos})
    }).catch(function (error){
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div>Flickr Rainbow</div>

      </div>
    );
  }
}

export default App;
