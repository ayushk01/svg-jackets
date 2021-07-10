import React from "react";
import { Row, Col } from "react-bootstrap";
import Startagain from "../buttons/Startagain";

import { connect } from "react-redux";
import { rightDesign, Dcontent } from "../../../../actions";

function RightButton(props) {
  const rightHandler = () => {
    props.leftRightHandler();
    props.design();
  };
  return (
    <div>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={rightHandler}>
            Right Design
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
            className="btn btn-success w-75"
            onClick={() => props.inner()}
          >
            Finish
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    inner: () => {
      dispatch(Dcontent());
    },
    design: () => {
      dispatch(rightDesign());
    },
  };
};

export default connect(null, mapDispatchToProps)(RightButton);
