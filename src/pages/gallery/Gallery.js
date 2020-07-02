import React from "react";
import "./Gallery.css";
import pic from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import story from "../../assets/story.jpg";

function Gallery() {
  return (
    <div className="gallery-container">
      <section className="story-in-images">
        <div
          className="story-image"
          style={{ backgroundImage: `url(${story})` }}
        >
          <h1>Our Story in Images</h1>
        </div>
      </section>
      <section className="stories">
        <img src={pic} alt="assets" />
        <img src={pic2} alt="assets" />
        <img src={pic3} alt="assets" />
        <img src={story} alt="assets" />
        <iframe
          title="random video"
          width="400"
          height="315"
          src="https://www.youtube.com/embed/ZCFkWDdmXG8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <img src={unsplash2} alt="assets" /> */}
        <img src={story} alt="assets" />
      </section>
    </div>
  );
}

export default Gallery;
