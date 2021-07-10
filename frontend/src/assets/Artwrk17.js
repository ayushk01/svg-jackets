import React from "react";
import { string } from "prop-types";

export default function Artwrk17(props) {
  const { primary, secondary } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      fill={primary}
      width="100%"
      height="100%"
      viewBox="0 0 612 792"
      enable-background="new 0 0 612 792"
      xmlSpace="preserve"
    >
      <text
        transform="matrix(0.8816 0 0 1 -0.5908 579.4434)"
        font-family="'CollegiateHeavyOutline-Medium'"
        font-size="696.7801"
      >
        21
      </text>
      <text
        transform="matrix(-0.0647 -2.0418 0.9995 -0.0316 482.7717 535.9634)"
        fill={secondary}
        stroke={secondary}
        stroke-miterlimit="10"
        font-family="'EmbassyBT-Regular'"
        font-size="53.5703"
      >
        Class of
      </text>
    </svg>
  );
}

Artwrk17.props = {
  primary: string,
  secondary: string,
};

Artwrk17.defaultProps = {
  primary: "#000",
  secondary: "#fff",
};
