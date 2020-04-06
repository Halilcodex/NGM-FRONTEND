import React from "react";
// import Alert from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import ngmLogo from "../../assets/NGM-logo.png";
import "./mainlayout.css";

function MainLayout(props) {
  return (
    <div className="mainlayout">
      <Navbar className="my-navbar" bg="light">
        <Navbar.Brand>
          <img className="logo" src={ngmLogo} alt="NGM" />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Link>Pages</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
        </Nav>
      </Navbar>
      {props.children}
    </div>
  );
}

export default MainLayout;
