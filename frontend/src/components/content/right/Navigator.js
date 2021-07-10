import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./right.css";
import { Row, Col } from "react-bootstrap";

import {
  mainColor,
  frontSide,
  backSide,
  leftSide,
  rightSide,
  innerSide,
  start,
  Dcontent,
  //....
  rightGoBack,
  leftGoBack,
  frontGoBack,
  backGoBack,
  Dfinish,
} from "../../../actions";

function Navigator(props) {
  useEffect(() => {
    props.main();
    props.again();
  }, []);

  const mainhandler = () => {
    props.main();
    props.rightback();
    props.leftback();
    props.frontback();
    props.backback();
  };
  const fronthandler = () => {
    props.front();
    props.rightback();
    props.leftback();
    props.frontback();
    props.backback();
  };
  const backhandler = () => {
    props.back();
    props.rightback();
    props.leftback();
    props.frontback();
    props.backback();
  };
  const lefthandler = () => {
    props.left();
    props.rightback();
    props.leftback();
    props.frontback();
    props.backback();
  };
  const righthandler = () => {
    props.right();
    props.rightback();
    props.leftback();
    props.frontback();
    props.backback();
  };
  const innerhandler = () => {
    props.Dcontent();
  };

  return (
    <Row className="mx-0 navcontain">
      <Col className="sm pl-0">
        <div
          className={`div ${props.bmain ? "borderTrue" : "borderFalse"}`}
          id="color-view"
          onClick={mainhandler}
        >
          Main Color
        </div>
      </Col>
      <Col>
        <div
          className={`div ${props.bfront ? "borderTrue" : "borderFalse"}`}
          id="front-view"
          onClick={fronthandler}
        >
          Front View
        </div>
      </Col>
      <Col>
        <div
          className={`div ${props.bback ? "borderTrue" : "borderFalse"}`}
          id="back-view"
          onClick={backhandler}
        >
          Back View
        </div>
      </Col>
      <Col>
        <div
          className={`div ${props.bleft ? "borderTrue" : "borderFalse"}`}
          id="left-view"
          onClick={lefthandler}
        >
          Left View
        </div>
      </Col>
      <Col>
        <div
          className={`div ${props.bright ? "borderTrue" : "borderFalse"}`}
          id="right-view"
          onClick={righthandler}
        >
          Right View
        </div>
      </Col>
      <Col className="pr-0">
        <div
          className={`div ${props.binner ? "borderTrue" : "borderFalse"}`}
          id="inner-view"
          onClick={innerhandler}
        >
          Finish& Preview
        </div>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => {
  return {
    bmain: state.showShirt.main,
    bfront: state.showShirt.front,
    bback: state.showShirt.back,
    bleft: state.showShirt.left,
    bright: state.showShirt.right,
    binner: state.showShirt.inner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Dcontent: () => {
      dispatch(Dcontent());
    },
    Dfinish: () => {
      dispatch(Dfinish());
    },
    again: () => {
      dispatch(start());
    },
    main: () => {
      dispatch(mainColor());
    },
    front: () => {
      dispatch(frontSide());
    },
    back: () => {
      dispatch(backSide());
    },
    left: () => {
      dispatch(leftSide());
    },
    right: () => {
      dispatch(rightSide());
    },
    inner: () => {
      dispatch(innerSide());
    },
    //.....
    rightback: () => {
      dispatch(rightGoBack());
    },
    leftback: () => {
      dispatch(leftGoBack());
    },
    frontback: () => {
      dispatch(frontGoBack());
    },
    backback: () => {
      dispatch(backGoBack());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
