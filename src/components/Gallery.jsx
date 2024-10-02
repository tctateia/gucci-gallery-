import React from 'react';

function Gallery({ images }) {
  return (
    <div className="gallery-container" id="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Gallery"
          className="gallery-image"
        />
      ))}
    </div>
  );
}

export default Gallery;
