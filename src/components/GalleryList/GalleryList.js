import React, { Component } from "react";
import GalleryListItem from "../GalleryListItem/GalleryListItem";

class GalleryList extends Component {
  render() {
    const galleryArray = this.props.galleryList.map((item, index) => {
      return (
        <div key={index}>
          <GalleryListItem item={item} likePhoto={this.props.likePhoto} />
        </div>
      );
    });

    return <div>{galleryArray}</div>;
  }
}

export default GalleryList;
