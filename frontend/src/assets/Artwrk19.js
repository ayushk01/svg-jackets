import React from "react";
import { string } from "prop-types";

export default function Artwrk19(props) {
  const { primary } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill={primary}
      viewBox="0 0 730.488 677.574"
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-210 -591.062)">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M-85.487,559.9"
          transform="translate(295.487 549)"
          fill="none"
          stroke={primary}
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <line
          id="Line_1"
          data-name="Line 1"
          x1="611.969"
          transform="translate(295.487 1149.078)"
          fill="none"
          stroke={primary}
          stroke-miterlimit="10"
          stroke-width="13"
        />
        <text
          id="It_s_The_Beginning"
          data-name="It’s The Beginning"
          transform="translate(295.487 1240.636)"
          font-size="92"
          font-family="MonotypeCorsiva, Monotype Corsiva"
        >
          <tspan x="0" y="0">
            It’s The Beginning
          </tspan>
        </text>
        <text
          id="_2021"
          data-name="2021"
          transform="translate(295.488 1092.992)"
          font-size="299"
          font-family="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            2021
          </tspan>
        </text>
        <text
          id="Class_Of"
          data-name="Class Of"
          transform="translate(307.838 785.062)"
          font-size="224"
          font-family="Pristina-Regular, Pristina"
        >
          <tspan x="0" y="0">
            Class Of
          </tspan>
        </text>
      </g>
    </svg>
  );
}

Artwrk19.props = {
  primary: string,
};

Artwrk19.defaultProps = {
  primary: "#000",
};
