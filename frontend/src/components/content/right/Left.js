import React, { useState } from "react";
import LeftItem from "./leftBox/LeftItem";
import LeftButton from "./leftBox/LeftButton";
import LeftText from "./leftBox/LeftText";
import LeftArt from "./leftBox/LeftArt";

function Left() {
  const [item, setitem] = useState(false);
  const [button, setbutton] = useState(true);
  const [inneritem, setinneritem] = useState(false);
  const [leftart, setleftart] = useState(false);

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
  const textbackHandler = () => {
    setinneritem(false);
    setbutton(true);
    setitem(false);
  };
  const artHandler = () => {
    setitem(false);
    setleftart(true);
  };
  const artbackHandler = () => {
    setleftart(false);
    setbutton(true);
    setitem(false);
  };

  return (
    <div>
      {button && <LeftButton leftRightHandler={buttonHandler} />}

      {item && (
        <LeftItem
          goBackHandler={itemHandler}
          artHandler={artHandler}
          textOn={textOn}
        />
      )}

      {leftart && <LeftArt backHandler={artbackHandler} />}

      {inneritem && <LeftText backHandler={textbackHandler} />}
    </div>
  );
}
export default Left;
