import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryList: [],
  };

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios
      .get("/gallery")
      .then((response) => {
        console.log(response.data);
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => console.warn(err));
  }

  likePhoto = (id) => (event) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList
          galleryList={this.state.galleryList}
          likePhoto={this.likePhoto}
        />
      </div>
    );
  }
}

export default App;
