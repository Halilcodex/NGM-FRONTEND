import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import pic from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import mentor from "../../assets/unsplash.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-container">
      <section className="carousel-container">
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
      </section>
      <div className="divider" />
      {/* <section className="profile-section"> */}
      <Jumbotron className="profile-section">
        <div className="profile-details">
          <h4>Meet The Mentor</h4>
          <p>Nasirudeen Olasanmi Giwa</p>
          <p className="details">
            Experienced General Manager with a demonstrated history of working
            in the electrical and electronic manufacturing industry. Skilled in
            Negotiation, Budgeting, Petroleum, Gas, and Microsoft Word. Strong
            operations professional with a Bachelor of Engineering (B.Eng.)
            focused in Electrical Engineering from University of Ilorin.
          </p>
        </div>
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${mentor})` }}
        />
      </Jumbotron>
      {/* </section> */}
      <div className="divider" />
      <section className="contact-us">
        <h4>Contact Us</h4>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Row} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button className="submit" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default Home;
