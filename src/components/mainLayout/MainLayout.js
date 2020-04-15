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
      <Navbar className="my-navbar" variant="light">
        <Navbar.Brand>
          {/* <img className="logo" src={ngmLogo} alt="NGM" /> */}
          <div
            className="logo"
            style={{ backgroundImage: `url(${ngmLogo})` }}
          ></div>
        </Navbar.Brand>
        <Nav variant="tabs" color="dark" className="justify-content-end">
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
          <Nav.Link>Gallery</Nav.Link>
          <Nav.Link>Members</Nav.Link>
          <Link to="/about">
            <Nav.Link href="/about">About</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
      {props.children}
    </div>
  );
}

export default MainLayout;
