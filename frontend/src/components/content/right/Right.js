import React, { useState } from "react";
import RightItem from "./rightBox/RightItem";
import RightButton from "./rightBox/RightButton";
import RightText from "./rightBox/RightText";
import RightArt from "./rightBox/RightArt";

function Right() {
  const [item, setitem] = useState(false);
  const [button, setbutton] = useState(true);
  const [inneritem, setinneritem] = useState(false);
  const [rightart, setrightart] = useState(false);

  const buttonHandler = () => {
    setitem(true);
    setbutton(false);
    setinneritem(false);
  };
  const itemHandler = () => {
    setitem(false);
    setbutton(true);
    setinneritem(false);
  };
  const textOn = () => {
    setinneritem(true);
    setbutton(false);
    setitem(false);
  };
  const textHandler = () => {
    setinneritem(false);
    setbutton(true);
    setitem(false);
  };
  const artHandler = () => {
    setitem(false);
    setrightart(true);
  };
  const artbackHandler = () => {
    setrightart(false);
    setbutton(true);
    setitem(false);
  };

  return (
    <div>
      {button && <RightButton leftRightHandler={buttonHandler} />}

      {item && (
        <RightItem
          goBackHandler={itemHandler}
          artHandler={artHandler}
          textOn={textOn}
        />
      )}

      {rightart && <RightArt backHandler={artbackHandler} />}

      {inneritem && <RightText textbackHandler={textHandler} />}
    </div>
  );
}

export default Right;
