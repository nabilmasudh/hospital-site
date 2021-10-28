import React from "react";
import { GalleryPhoto } from "../../data";
import "./HomeGallery.css";
const HomeGallery = () => {
  return (
    <section className="gallery-section">
      <div className="Home-gallery" id="container">
        <h2>Gallery</h2>
        <div className="gallery-center">
          {GalleryPhoto.map((item, index) => {
            const { image } = item;
            return (
              <React.Fragment key={index}>
                <img src={image} alt="Gallery" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
