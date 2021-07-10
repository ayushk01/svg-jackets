import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "../artwrk.css";
import "../color.css";

import { connect } from "react-redux";
import { frontGoBack, frontImage, frontMainImage } from "../../../../actions";

import { artworks, globalColors } from "../../../../assets";

function LeftArt(props) {
  const [color, setColor] = useState("#fff");
  const [artwrkIndex, setArtwrkIndex] = useState(null);
  const { body } = props;

  useEffect(() => {
    if (artwrkIndex != null) {
      const TempArt = artworks[artwrkIndex];
      artHandler(<TempArt primary={color} secondary={body} />);
    }
  }, [artwrkIndex, color, body]);

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
                  artHandler(<Artwork primary={color} secondary={body} />);
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
          {globalColors.map((globalColor) => (
            <div
              className="boxx"
              style={{ background: globalColor }}
              onClick={() => setColor(globalColor)}
            ></div>
          ))}
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
  frontTopLeftImage: state.frontView.frontTopLeftImage,
  body: state.shirtColor.body,
});

const mapDispatchToProps = (dispatch) => ({
  back: () => {
    dispatch(frontGoBack());
  },
  upload: (img) => {
    dispatch(frontImage(img));
  },
  uploadimg: (mainimg) => {
    dispatch(frontMainImage(mainimg));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftArt);
