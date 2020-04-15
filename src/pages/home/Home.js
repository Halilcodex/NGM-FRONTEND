import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import pic from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import mentor from "../../assets/unsplash.jpg";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${pic})` }}
            ></div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${pic2})` }}
            ></div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${pic3})` }}
            ></div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="profile-section">
        <div className="profile-details">
          <h4>Meet The Mentor</h4>
          <p>Nasirudeen Olasanmi Giwa</p>
          <p>Lorem</p>
        </div>
        <div className="profile-pic">
          <img src={mentor} alt="the mentor" className="the-mentor" />
        </div>
      </div>
    </div>
  );
}

export default Home;
