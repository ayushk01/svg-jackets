import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "../artwrk.css";
import "../color.css";

import { connect } from "react-redux";
import { rightGoBack, rightImage, rightMainImage } from "../../../../actions";

import { artworks, globalColors } from "../../../../assets";

function RightArt(props) {
  const [color, setColor] = useState("#000");
  const [artwrkIndex, setArtwrkIndex] = useState(null);
  const { sleeves } = props;

  useEffect(() => {
    if (artwrkIndex != null) {
      const TempArt = artworks[artwrkIndex];
      artHandler(<TempArt primary={color} secondary={sleeves} />);
    }
  }, [artwrkIndex, color, sleeves]);

  const artHandler = (artwrk) => {
    props.upload(artwrk);
    props.uploadimg(artwrk);
  };

  const backhandler = () => {
    props.backHandler();
    props.back();
  };

  return (
    <>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form.Label>
            <h4>Select Artwork</h4>
          </Form.Label>
          <br />
          <Row
            style={{ height: "50vh", background: "#eee", overflow: "scroll" }}
          >
            {artworks.map((Artwork, index) => (
              <Col
                xs={6}
                className="artwrkImage"
                onClick={() => {
                  artHandler(<Artwork primary={color} secondary={sleeves} />);
                  setArtwrkIndex(index);
                }}
              >
                <Artwork />
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form.Label>
            <h4>Select Color</h4>
          </Form.Label>
          <br />
          <div className="bodyxx">
            {globalColors.map((globalColor) => (
              <div
                className="boxx"
                style={{ background: `${globalColor}` }}
                onClick={(e) => setColor(`${globalColor}`)}
              ></div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-md-12 col-sm-12 mb-1">
          <div className="btn btn-outline-success w-75" onClick={backhandler}>
            Done
          </div>
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  rightImage: state.rightView.rightImage,
  sleeves: state.shirtColor.sleeves,
});

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

export default connect(mapStateToProps, mapDispatchToProps)(RightArt);
