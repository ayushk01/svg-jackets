import React from "react";
import Front from "./left/Front";
import Back from "./left/Back";
import Leftside from "./left/Leftside";
import Rightside from "./left/Rightside";

import { connect } from "react-redux";

function Left(props) {
  return (
    <>
      <div style={{ height: "450px" }}>
        {props.main && <Front />}
        {props.front && <Front />}
        {props.back && <Back />}
        {props.left && <Leftside />}
        {props.right && <Rightside />}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    main: state.showShirt.main,
    front: state.showShirt.front,
    back: state.showShirt.back,
    left: state.showShirt.left,
    right: state.showShirt.right,
  };
};

export default connect(mapStateToProps)(Left);
