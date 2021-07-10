import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Left from "./content/left";
import Right from "./content/right";
import { BrowserRouter as Router } from "react-router-dom";
import "./mobifluid.css";

import { connect } from "react-redux";

function Content(props) {
  return (
    <div className={`content ${props.Dcontent}`}>
      <Router>
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <Left />
            </Col>
            <Col className="mobifluid" md={6}>
              <Right />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Dcontent: state.showShirt.Dcontent,
  };
};

export default connect(mapStateToProps)(Content);
