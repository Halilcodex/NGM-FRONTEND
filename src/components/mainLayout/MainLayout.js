import React from "react";
// import Alert from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import ngmLogo from "../../assets/NGM-logo-3.png";
import "./mainlayout.css";

function MainLayout(props) {
  return (
    <div className="mainlayout">
      <Navbar
        collapseOnSelect
        expand="sm"
        className="my-navbar justify-content-lg-around"
        variant="light"
      >
        <Navbar.Brand as="div">
          <div
            className="logo"
            style={{ backgroundImage: `url(${ngmLogo})` }}
          ></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav variant="tabs" color="dark" className="justify-content-end">
            <Link to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to="/gallery">
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Link>
            <Link to="/members">
              <Nav.Link href="/members">Members</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section className="ngm-main-content">{props.children}</section>
      <footer className="footer">
        <div className="footer-content">
          <div className="about col-md-4">
            <h5>About</h5>
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              {/* ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum */}
            </p>
          </div>
          <div className="quick-links col-md-3">
            <h5>Quick Links</h5>
            <ul>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/members">
                <li>Members</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">&copy; NGM | All rights reserved.</div>
      </footer>
    </div>
  );
}

export default MainLayout;
