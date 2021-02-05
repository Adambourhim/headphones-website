import React, { Fragment } from "react";
import Logo from "../Image/logo.svg";
import Vector from "../Image/Vector.svg";
import Shop from "../Image/Group 17.svg";
import group21 from "../Image/Group 21.svg";
import { Navbar, Nav } from "react-bootstrap";
import Polygon from "../Image/Union.svg";
import bitmap from "../Image/Bitmap.svg";
import Union2 from "../Image/Union2.svg";

function Header() {
  return (
    <Fragment>
      <div className="container-1">
        <div className="sub">
          <img src={Polygon} alt="polygon" />
        </div>
        <div className="subButtom">
          <img src={Union2} alt="union2" />
        </div>
        <div className="subLeft">
          <img src={bitmap} alt="bitmap" />
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" style={{ color: "black" }}>
              Headphones
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>
              Speakers
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>
              Audio sunglasses
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>
              Support
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">
            <img src={Shop} className="icon" alt="shop" />
            <img src={Vector} className="icon" alt="vector" />
            <img src={group21} className="icon" alt="group21" />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Header;
