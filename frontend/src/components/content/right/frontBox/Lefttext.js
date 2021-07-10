import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "../right.css";
import "../color.css";
import { globalColors, globalFonts } from "../../../../assets";

import { connect } from "react-redux";
import {
  frontLeftText,
  frontLeftTextColor,
  frontLeftTextSize,
  frontLeftTextStroke,
  frontLeftTextStrokeColor,
  frontLeftTextFamily,
  frontGoBack,
} from "../../../../actions";

function Lefttext(props) {
  const [state, setstate] = useState("");
  const [size, setsize] = useState(30);
  const [stroke, setstroke] = useState(0);
  const [textC, settextC] = useState("white");
  const [strokeC, setstrokeC] = useState("white");
  const [family, setfamily] = useState("Agency FB");

  useEffect(() => {
    props.size(size);
  }, [size]);

  useEffect(() => {
    props.stroke(stroke);
  }, [stroke]);

  useEffect(() => {
    props.TextColor(textC);
  }, [textC]);

  useEffect(() => {
    props.strokeColor(strokeC);
  }, [strokeC]);

  useEffect(() => {
    props.family(family);
  }, [family]);

  const backhandler = () => {
    props.backHandler();
    props.back();
  };

  const texthandler = (e) => {
    setstate(e.target.value);
    props.Text(e.target.value);
  };
  const increse = () => {
    setsize(size + 1);
  };
  const decrese = () => {
    setsize(size - 1);
  };
  const incresestroke = () => {
    setstroke(stroke + 1);
  };
  const decresestroke = () => {
    if (stroke > 0) {
      setstroke(stroke - 1);
    }
  };
  const fonthandler = (e) => {
    setfamily(e.target.value);
  };
  return (
    <div>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form.Label>Enter Text</Form.Label>
          <Form.Control type="text" value={state} onChange={texthandler} />
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Font Family</Form.Label>
              <Form.Control as="select" custom onChange={fonthandler}>
                {globalFonts.map((font) => (
                  <option style={{ fontFamily: `${font}` }}>{font}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form.Label>Text Size</Form.Label>
          <br />
          <button className="innerstyle mx-2" onClick={decrese}>
            -
          </button>
          {size}
          <button className="innerstyle mx-2" onClick={increse}>
            +
          </button>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form.Label>Text Stroke</Form.Label>
          <br />
          <button className="innerstyle mx-2" onClick={decresestroke}>
            -
          </button>
          {stroke}
          <button className="innerstyle mx-2" onClick={incresestroke}>
            +
          </button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form.Label>Text Color</Form.Label>
          <br />
          <div className="bodyx">
            {globalColors.map((globalColor) => (
              <div
                className="boxx"
                style={{ background: `${globalColor}` }}
                onClick={(e) => settextC(`${globalColor}`)}
              ></div>
            ))}
          </div>
        </Col>
        <Col className="col-md-6 col-sm-6 mb-1">
          <Form.Label>Stroke Color</Form.Label>
          <br />
          <div className="bodyx">
            {globalColors.map((globalColor) => (
              <div
                className="boxx"
                style={{ background: `${globalColor}` }}
                onClick={(e) => setstrokeC(`${globalColor}`)}
              ></div>
            ))}
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
      dispatch(frontGoBack());
    },
    Text: (text) => {
      dispatch(frontLeftText(text));
    },
    TextColor: (color) => {
      dispatch(frontLeftTextColor(color));
    },
    size: (size) => {
      dispatch(frontLeftTextSize(size));
    },
    stroke: (stroke) => {
      dispatch(frontLeftTextStroke(stroke));
    },
    strokeColor: (color) => {
      dispatch(frontLeftTextStrokeColor(color));
    },
    family: (family) => {
      dispatch(frontLeftTextFamily(family));
    },
  };
};

export default connect(null, mapDispatchToProps)(Lefttext);
