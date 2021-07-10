import React from "react";
import { connect } from "react-redux";
import { startAgain } from "../../../../actions";

function Startagain(props) {
  return (
    <div>
      <div
        className="btn again w-75"
        onClick={() => props.again()}
      >
        Start Again
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    again: () => {
      dispatch(startAgain());
    },
  };
};

export default connect(null, mapDispatchToProps)(Startagain);
