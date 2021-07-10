import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";

import { bodyColor } from "../../../../actions";

import { globalColors } from "../../../../assets";

function ColorPicker(props) {
  const [color, setColor] = useState("");

  const value = [props.name, color];

  useEffect(() => {
    props.body(value);
  }, [color]);

  return (
    <Row className="mt-3">
      <Container className="mx-auto my-4">
        <h4>Select Color</h4>
        {globalColors.map((globalColor) => (
          <div
            className="boxx"
            style={{ background: `${globalColor}` }}
            onClick={(e) => setColor(`${globalColor}`)}
          ></div>
        ))}
      </Container>
      <Col className="col-md-6 col-sm-6 mb-1">
        <div className="maincolorbox" onClick={props.goBackHandler}>
          Go Back
        </div>
      </Col>
      <Col className="col-md-6 col-sm-6 mb-1">
        <div className="maincolorbox" onClick={props.goBackHandler}>
          Done
        </div>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    body: (value) => {
      dispatch(bodyColor(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(ColorPicker);
