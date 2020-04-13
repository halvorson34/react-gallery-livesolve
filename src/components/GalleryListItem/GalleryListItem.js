import React, { Component } from "react";
import "./GalleryListItem.css";

class GalleryListItem extends Component {
  state = {
    imageToggle: true,
  };

  toggleImage = (event) => {
    this.setState({
      imageToggle: !this.state.imageToggle,
    });
  };

  render() {
    let imageElement = (
      <img src={this.props.item.path} alt={this.props.item.description} />
    );

    if (!this.state.imageToggle) {
      imageElement = <p>{this.props.item.description}</p>;
    }

    return (
      <div className="gallerylist-cell">
        <div onClick={this.toggleImage}>{imageElement}</div>
        <button onClick={this.props.likePhoto(this.props.item.id)}>
          Like!
        </button>
        <p>{this.props.item.likes} people like this!</p>
      </div>
    );
  }
}

export default GalleryListItem;
