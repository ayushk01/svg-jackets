import React from "react";
import { Container } from "react-bootstrap";
import Front from "./content/left/Front";
import Back from "./content/left/Back";
import Left from "./content/left/Leftside";
import Right from "./content/left/Rightside";
import Save from "./form";

import { connect } from "react-redux";
import { Dfinish } from "../actions";

function Preview(props) {
  return (
    <>
      <div className={`content ${props.finish}`}>
        <Container className="py-4">
          <div className="row">
            <div className="col-md-6">
              <div style={{ height: "350px" }}>
                <Front />
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ height: "350px" }}>
                <Back />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div style={{ height: "350px" }}>
                <Left />
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ height: "350px" }}>
                <Right />
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-md-6 pt-1">
              <button
                className="btn btn-outline-primary w-75"
                onClick={() => props.Dfinish()}
              >
                Edit Again
              </button>
            </div>
            <div className="col-md-6 pt-1">
              <Save />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    Dfinish: () => {
      dispatch(Dfinish());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    finish: state.showShirt.Dfinish,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
