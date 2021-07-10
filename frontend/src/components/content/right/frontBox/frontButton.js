import React from "react";
import { Row, Col } from "react-bootstrap";
import Startagain from "../buttons/Startagain";

import { connect } from "react-redux";
import { backSide, frontTopLeft, frontTopRight } from "../../../../actions";

function FrontButton(props) {
  const name = {
    left: "left",
    right: "right",
  };
  const lefthandler = () => {
    props.leftRightHandler(name.left);
    props.right();
  };
  const righthandler = () => {
    props.leftRightHandler(name.right);
    props.left();
  };
  return (
    <div>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={lefthandler}>
            Front Top Left
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={righthandler}>
            Front Top Right
          </div>
        </Col>
      </Row>
      {/* ......................buttons */}
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <Startagain />
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="btn next w-75" onClick={() => props.back()}>
            Next
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    back: () => {
      dispatch(backSide());
    },
    left: () => {
      dispatch(frontTopLeft());
    },
    right: () => {
      dispatch(frontTopRight());
    },
  };
};

export default connect(null, mapDispatchToProps)(FrontButton);
