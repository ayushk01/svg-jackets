import React from "react";
import { Card, Nav } from "react-bootstrap";
import insta from "./icon/insta.png";
import whats from "./icon/whats.png";
import face from "./icon/face.png";
// import twit from "./icon/twit.png";
// import lin from "./icon/lin.png";

function Footer() {
  return (
    <>
      <div className="py-5 footer">
        <div className="pt-5" style={{ color: "white" }}>
          <Nav className="justify-content-center" style={{ color: "white" }}>
            <Nav.Item>
              <Nav.Link
                href="https://seniorjacket.com/"
                className="footer-link"
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://seniorjacket.com/about"
                className="footer-link"
              >
                About us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://seniorjacket.com/contact"
                className="footer-link"
              >
                Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Card style={{ width: "18rem" }} className="footer-line my-3"></Card>
        <div className="footer-card mb-lg-5">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link
                href="https://www.instagram.com/senior.jackets.emirates/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <img src={insta} width="25px" alt="icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://api.whatsapp.com/send?phone=97336221772"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <img src={whats} width="25px" alt="icon" />
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <img src={twit} width="25px" alt="icon" />
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link
                href="https://www.facebook.com/seniorjackets/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <img src={face} width="25px" alt="icon" />
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <img src={lin} width="25px" alt="icon" />
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </div>
      </div>
    </>
  );
}

export default Footer;
