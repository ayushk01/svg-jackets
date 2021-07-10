import React from "react";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { rightGoBack, rightImage, rightMainImage } from "../../../../actions";

function RightItem(props) {
  const backhandler = () => {
    props.goBackHandler();
    props.back();
  };

  const uploadImg = (e) => {
    var file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      props.upload(
        <image width="100%" height="100%" xlinkHref={reader.result} />
      );
      props.uploadimg(
        <image width="100%" height="100%" xlinkHref={reader.result} />
      );
    };

    reader.onerror = function (error) {
      alert("An error occured!");
      console.log("Error: ", error);
    };
  };

  return (
    <div>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={() => props.artHandler()}>
            ArtWork
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <div className="maincolorbox" onClick={() => props.textOn()}>
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
      dispatch(rightGoBack());
    },
    upload: (img) => {
      dispatch(rightImage(img));
    },
    uploadimg: (mainimg) => {
      dispatch(rightMainImage(mainimg));
    },
  };
};

export default connect(null, mapDispatchToProps)(RightItem);
