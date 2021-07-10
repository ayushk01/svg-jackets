import React, { useState } from "react";
import RightText from "./frontBox/Righttext";
import LeftText from "./frontBox/Lefttext";
import FrontButton from "./frontBox/frontButton";
import FrontItem from "./frontBox/frontItem";
import LeftArt from "./frontBox/LeftArt";
import RightArt from "./frontBox/RightArt";

function Front() {
  const [button, setbutton] = useState(true);
  const [item, setitem] = useState(false);

  const [left, setleft] = useState(false);
  const [right, setright] = useState(false);

  const [leftart, setleftart] = useState(false);
  const [rightart, setrightart] = useState(false);

  const [state, setstate] = useState("");

  const leftRightHandler = (name) => {
    setstate(name);
    setitem(true);
    setright(false);
    setbutton(false);
  };

  const goBackHandler = () => {
    setitem(false);
    setbutton(true);
  };

  const innerHandler = () => {
    if (state === "left") {
      setleft(true);
      setright(false);
      setitem(false);
    }
    if (state === "right") {
      setleft(false);
      setright(true);
      setitem(false);
    }
  };

  const artHandler = () => {
    if (state === "left") {
      setleftart(true);
      setrightart(false);
      setitem(false);
    }
    if (state === "right") {
      setleftart(false);
      setrightart(true);
      setitem(false);
    }
  };

  const textbackHandler = () => {
    setleft(false);
    setright(false);
    setitem(false);
    setbutton(true);
  };

  const artbackHandler = () => {
    setleftart(false);
    setrightart(false);
    setitem(false);
    setbutton(true);
  };

  return (
    <div>
      {button && <FrontButton leftRightHandler={leftRightHandler} />}
      {item && (
        <FrontItem
          goBackHandler={goBackHandler}
          innerHandler={innerHandler}
          artHandler={artHandler}
        />
      )}

      {leftart && <LeftArt backHandler={artbackHandler} />}
      {rightart && <RightArt backHandler={artbackHandler} />}

      {left && <LeftText backHandler={textbackHandler} />}
      {right && <RightText backHandler={textbackHandler} />}
    </div>
  );
}

export default Front;
