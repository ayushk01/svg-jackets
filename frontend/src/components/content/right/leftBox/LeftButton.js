import React from "react";
import { Row, Col } from "react-bootstrap";
import Startagain from "../buttons/Startagain";

import { connect } from "react-redux";
import { rightSide, leftDesign } from "../../../../actions";

function LeftButton(props) {
  const lefthandler = () => {
    props.leftRightHandler();
    props.design();
  };
  return (
    <div>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={lefthandler}>
            Left Design
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
            className="btn next w-75"
            onClick={() => props.right()}
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
    right: () => {
      dispatch(rightSide());
    },
    design: () => {
      dispatch(leftDesign());
    },
  };
};

export default connect(null, mapDispatchToProps)(LeftButton);
