import React from "react";
import { Row, Col } from "react-bootstrap";
import Startagain from "../buttons/Startagain";

import { connect } from "react-redux";
import {
  leftSide,
  backTop,
  backCenter,
  backMainCenter,
  backBottom,
} from "../../../../actions";

function BackButton(props) {
  const name = {
    top: "top",
    center: "center",
    bottom: "bottom",
  };
  const tophandler = () => {
    props.leftRightHandler(name.top);
    props.top();
  };
  const bottomhandler = () => {
    props.leftRightHandler(name.bottom);
    props.bottom();
  };

  const uploadImg = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      props.center(
        <image width="100%" height="100%" xlinkHref={reader.result} />
      );
      props.centerimg(
        <image width="100%" height="100%" xlinkHref={reader.result} />
      );
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={tophandler}>
            Back Top
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <label htmlFor="FileID">
            <div className="maincolorbox">Center Image</div>
            <input
              type="file"
              id="FileID"
              onChange={uploadImg}
              className="d-none"
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={bottomhandler}>
            Back Bottom
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={() => props.artHandler()}>
            Center Artwork
          </div>
        </Col>
      </Row>
      {/* ......................buttons */}
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <Startagain />
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="btn next w-75" onClick={() => props.left()}>
            Next
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    left: () => {
      dispatch(leftSide());
    },
    top: () => {
      dispatch(backTop());
    },
    center: (img) => {
      dispatch(backCenter(img));
    },
    centerimg: (mainimg) => {
      dispatch(backMainCenter(mainimg));
    },
    bottom: () => {
      dispatch(backBottom());
    },
  };
};

export default connect(null, mapDispatchToProps)(BackButton);
