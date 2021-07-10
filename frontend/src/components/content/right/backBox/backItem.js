import React from "react";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { backGoBack } from "../../../../actions";

function BackItem(props) {
  const backhandler = () => {
    props.goBackHandler();
    props.back();
  };
  return (
    <div>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={props.innerHandler}>
            Text
          </div>
        </Col>
      </Row>
      {/* ......................buttons */}
      <Row className="mt-3">
        <Col className="col-md-12 col-sm-12 mb-1">
          <div className="btn btn-outline-success w-75" onClick={backhandler}>
            Done
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    back: () => {
      dispatch(backGoBack());
    },
  };
};

export default connect(null, mapDispatchToProps)(BackItem);
