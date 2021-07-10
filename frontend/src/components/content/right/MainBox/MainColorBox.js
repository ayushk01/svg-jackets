import React from "react";
import { Row, Col } from "react-bootstrap";
import Startagain from "../buttons/Startagain";

import { connect } from "react-redux";
import { frontSide } from "../../../../actions";

function Maincolorbox(props) {
  const id = {
    body: "body",
    sleeves: "sleeves",
    rib1: "rib1",
    rib2: "rib2",
    pockets: "pockets",
    buttons: "buttons",
  };
  return (
    <div>
      <Row>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div
            className="maincolorbox"
            onClick={(e) => props.colorBoxhandler(id.body, e)}
          >
            Body
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div
            className="maincolorbox"
            onClick={(e) => props.colorBoxhandler(id.sleeves, e)}
          >
            Sleeves
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div
            className="maincolorbox"
            onClick={(e) => props.colorBoxhandler(id.rib1, e)}
          >
            Rib 1
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div
            className="maincolorbox"
            onClick={(e) => props.colorBoxhandler(id.rib2, e)}
          >
            Rib 2
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div
            className="maincolorbox"
            onClick={(e) => props.colorBoxhandler(id.pockets, e)}
          >
            Pockets
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div
            className="maincolorbox"
            onClick={(e) => props.colorBoxhandler(id.buttons, e)}
          >
            Buttons
          </div>
        </Col>
      </Row>
      {/* ......................buttons */}
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <Startagain />
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div
            className="next btn w-75"
            onClick={() => props.front()}
          >
            Next
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    front: () => {
      dispatch(frontSide());
    },
  };
};

export default connect(null, mapDispatchToProps)(Maincolorbox);
