import React from "react";
import { Row, Col } from "react-bootstrap";

import { frontGoBack, frontImage, frontMainImage } from "../../../../actions";
import { connect } from "react-redux";

function FrontItem(props) {
  const BackHandler = () => {
    props.goBackHandler();
    props.goback();
  };

  const uploadImg = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      props.upload(
        <image width="100%" height="100%" xlinkHref={reader.result} />
      );
      props.uploadimg(
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
          <div className="maincolorbox" onClick={() => props.artHandler()}>
            Artwork
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={() => props.innerHandler()}>
            Text
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <label htmlFor="FileID">
            <div className="maincolorbox">Upload Image</div>
            <input
              type="file"
              id="FileID"
              onChange={uploadImg}
              className="d-none"
            />
          </label>
        </Col>
      </Row>
      {/* ......................buttons */}
      <Row className="mt-3">
        <Col className="col-md-12 col-sm-12 mb-1">
          <div className="btn btn-outline-success w-75" onClick={BackHandler}>
            Done
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    goback: () => {
      dispatch(frontGoBack());
    },
    upload: (img) => {
      dispatch(frontImage(img));
    },
    uploadimg: (mainimg) => {
      dispatch(frontMainImage(mainimg));
    },
  };
};

export default connect(null, mapDispatchToProps)(FrontItem);
