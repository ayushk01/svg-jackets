import React from "react";
import Navigator from "./right/Navigator";
import Main from "./right/main";

import Front from "./right/front";
import { connect } from "react-redux";
import Back from "./right/Back";
import Left from "./right/Left";
import Rights from "./right/Right";

function Right(props) {
  return (
    <>
      <Navigator />
      {props.main && <Main />}
      {props.front && <Front />}
      {props.back && <Back />}
      {props.left && <Left />}
      {props.right && <Rights />}
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

export default connect(mapStateToProps)(Right);
