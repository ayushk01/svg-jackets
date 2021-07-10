import React, { useState } from "react";
import BackButton from "./backBox/backButton";
import BackItem from "./backBox/backItem";
import TopText from "./backBox/topText";
import BootomText from "./backBox/bootomtext";
import BackArt from "./backBox/backArt";

function Back() {
  const [button, setbutton] = useState(true);
  const [item, setitem] = useState(false);

  const [top, settop] = useState(false);
  const [bootom, setbootom] = useState(false);

  const [art, setart] = useState(false);

  const [state, setstate] = useState("");

  const leftRightHandler = (name) => {
    setstate(name);
    setitem(true);
    setbutton(false);
  };

  const goBackHandler = () => {
    setitem(false);
    setbutton(true);
  };

  const innerHandler = () => {
    if (state === "top") {
      settop(true);
      setbootom(false);
      setitem(false);
    }
    if (state === "bottom") {
      settop(false);
      setbootom(true);
      setitem(false);
    }
  };

  const textbackHandler = () => {
    settop(false);
    setbootom(false);
    setitem(false);
    setbutton(true);
  };

  const artHandler = () => {
    setbutton(false);
    setart(true);
  };

  const artbackHandler = () => {
    setart(false);
    setbutton(true);
  };

  return (
    <div>
      {button && (
        <BackButton
          leftRightHandler={leftRightHandler}
          artHandler={artHandler}
        />
      )}
      {item && (
        <BackItem goBackHandler={goBackHandler} innerHandler={innerHandler} />
      )}

      {top && <TopText textbackHandler={textbackHandler} />}
      {bootom && <BootomText textbackHandler={textbackHandler} />}

      {art && <BackArt backHandler={artbackHandler} />}
    </div>
  );
}

export default Back;
