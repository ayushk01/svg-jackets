import React, { useState } from "react";
import ColorPicker from "./MainBox/colorPicker";
import Maincolorbox from "./MainBox/MainColorBox";

function Main() {
  const [color, setcolor] = useState(false);
  const [state, setstate] = useState("");

  const colorBoxhandler = (id) => {
    setcolor(true);
    setstate(id);
  };

  const goBackHandler = () => {
    setcolor(false);
  };
  return (
    <div className="mt-3 box">
      {color ? (
        <ColorPicker goBackHandler={goBackHandler} name={state} />
      ) : (
        <Maincolorbox colorBoxhandler={colorBoxhandler} />
      )}
    </div>
  );
}

export default Main;
