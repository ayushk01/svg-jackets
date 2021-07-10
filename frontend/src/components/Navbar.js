import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      fixed="top"
      className="px-4"
    >
      <Navbar.Brand href="/">
        <h5 style={style.brand}>SENIOR JACKETS</h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="navlink">
          <Nav.Link href="http://seniorjacket.com/" className="px-4">
            <h6 style={style.link}>HOME</h6>
          </Nav.Link>
          <Nav.Link
            href="http://seniorjacket.com/senior-jackets-2"
            className="px-4"
          >
            <h6 style={style.link}>HOODIES</h6>
          </Nav.Link>
          <Nav.Link href="https://seniorjacket.com/about" className="px-4">
            <h6 style={style.link}>ABOUT US</h6>
          </Nav.Link>
          <Nav.Link href="https://seniorjacket.com/contact" className="px-4">
            <h6 style={style.link}>CONTACT US</h6>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const style = {
  brand: {
    letterSpacing: 3,
    color: "#4e4ea4",
  },
  link: {
    letterSpacing: 0.9,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "sans-serif",
  },
};

export default NavBar;
