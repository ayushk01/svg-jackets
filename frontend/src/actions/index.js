import {
  MAIN_COLOR,
  FRONT_SIDE,
  BACK_SIDE,
  LEFT_SIDE,
  RIGHT_SIDE,
  INNER_SIDE,
  BODY_COLOR,
  START_AGAIN,
  START,
  //..
  FRONT_TOP_LEFT,
  FRONT_TOP_RIGHT,
  FRONT_GO_BACK,
  FRONT_IMAGE,
  FRONT_MAIN_IMAGE,
  FRONT_LEFT_TEXT,
  FRONT_LEFT_TEXT_COLOR,
  FRONT_LEFT_TEXT_FAMILY,
  FRONT_LEFT_TEXT_SIZE,
  FRONT_LEFT_TEXT_STROKE,
  FRONT_LEFT_TEXT_STROKE_COLOR,
  FRONT_RIGHT_TEXT,
  FRONT_RIGHT_TEXT_COLOR,
  FRONT_RIGHT_TEXT_FAMILY,
  FRONT_RIGHT_TEXT_SIZE,
  FRONT_RIGHT_TEXT_STROKE,
  FRONT_RIGHT_TEXT_STROKE_COLOR,
  //..
  BACK_TOP,
  BACK_CENTER,
  BACK_MAIN_CENTER,
  BACK_BOTTOM,
  BACK_GO_BACK,
  BACK_TOP_TEXT,
  BACK_TOP_TEXT_COLOR,
  BACK_TOP_TEXT_FAMILY,
  BACK_TOP_TEXT_SIZE,
  BACK_TOP_TEXT_STROKE,
  BACK_TOP_TEXT_STROKE_COLOR,
  BACK_BOT_TEXT,
  BACK_BOT_TEXT_COLOR,
  BACK_BOT_TEXT_FAMILY,
  BACK_BOT_TEXT_SIZE,
  BACK_BOT_TEXT_STROKE,
  BACK_BOT_TEXT_STROKE_COLOR,
  LEFT_DESIGN,
  LEFT_GO_BACK,
  LEFT_TEXT,
  LEFT_IMAGE,
  LEFT_MAIN_IMAGE,
  LEFT_TEXT_COLOR,
  LEFT_TEXT_SIZE,
  LEFT_TEXT_FAMILY,
  LEFT_TEXT_STROKE,
  LEFT_TEXT_STROKE_COLOR,
  RIGHT_DESIGN,
  RIGHT_GO_BACK,
  RIGHT_TEXT,
  RIGHT_IMAGE,
  RIGHT_MAIN_IMAGE,
  RIGHT_TEXT_COLOR,
  RIGHT_TEXT_SIZE,
  RIGHT_TEXT_FAMILY,
  RIGHT_TEXT_STROKE,
  RIGHT_TEXT_STROKE_COLOR,
  DCONTENT,
  DFINISH,
} from "./types";

export const mainColor = () => {
  return {
    type: MAIN_COLOR,
  };
};
export const frontSide = () => {
  return {
    type: FRONT_SIDE,
  };
};
export const backSide = () => {
  return {
    type: BACK_SIDE,
  };
};
export const leftSide = () => {
  return {
    type: LEFT_SIDE,
  };
};
export const rightSide = () => {
  return {
    type: RIGHT_SIDE,
  };
};
export const innerSide = () => {
  return {
    type: INNER_SIDE,
  };
};

// ................... main color actions

export const bodyColor = (value) => {
  return {
    type: BODY_COLOR,
    payload: value,
  };
};

// ................... start again actions

export const startAgain = () => {
  return {
    type: START_AGAIN,
  };
};
export const start = () => {
  return {
    type: START,
  };
};
export const Dcontent = () => {
  return {
    type: DCONTENT,
  };
};
export const Dfinish = () => {
  return {
    type: DFINISH,
  };
};

//...................... front view items

export const frontTopLeft = () => {
  return {
    type: FRONT_TOP_LEFT,
  };
};

export const frontTopRight = () => {
  return {
    type: FRONT_TOP_RIGHT,
  };
};

export const frontGoBack = () => {
  return {
    type: FRONT_GO_BACK,
  };
};

export const frontImage = (img) => {
  return {
    type: FRONT_IMAGE,
    payload: img,
  };
};

export const frontMainImage = (mainimg) => {
  return {
    type: FRONT_MAIN_IMAGE,
    payload: mainimg,
  };
};

export const frontLeftText = (text) => {
  return {
    type: FRONT_LEFT_TEXT,
    payload: text,
  };
};

export const frontLeftTextColor = (color) => {
  return {
    type: FRONT_LEFT_TEXT_COLOR,
    payload: color,
  };
};

export const frontLeftTextSize = (size) => {
  return {
    type: FRONT_LEFT_TEXT_SIZE,
    payload: size,
  };
};

export const frontLeftTextFamily = (family) => {
  return {
    type: FRONT_LEFT_TEXT_FAMILY,
    payload: family,
  };
};

export const frontLeftTextStroke = (stroke) => {
  return {
    type: FRONT_LEFT_TEXT_STROKE,
    payload: stroke,
  };
};

export const frontLeftTextStrokeColor = (strokecolor) => {
  return {
    type: FRONT_LEFT_TEXT_STROKE_COLOR,
    payload: strokecolor,
  };
};

export const frontRightText = (text) => {
  return {
    type: FRONT_RIGHT_TEXT,
    payload: text,
  };
};

export const frontRightTextColor = (color) => {
  return {
    type: FRONT_RIGHT_TEXT_COLOR,
    payload: color,
  };
};

export const frontRightTextSize = (size) => {
  return {
    type: FRONT_RIGHT_TEXT_SIZE,
    payload: size,
  };
};

export const frontRightTextFamily = (family) => {
  return {
    type: FRONT_RIGHT_TEXT_FAMILY,
    payload: family,
  };
};

export const frontRightTextStroke = (stroke) => {
  return {
    type: FRONT_RIGHT_TEXT_STROKE,
    payload: stroke,
  };
};

export const frontRightTextStrokeColor = (strokecolor) => {
  return {
    type: FRONT_RIGHT_TEXT_STROKE_COLOR,
    payload: strokecolor,
  };
};

//...................... back view items

export const backTop = () => {
  return {
    type: BACK_TOP,
  };
};

export const backCenter = (img) => {
  return {
    type: BACK_CENTER,
    payload: img,
  };
};

export const backMainCenter = (mainimg) => {
  return {
    type: BACK_MAIN_CENTER,
    payload: mainimg,
  };
};

export const backBottom = () => {
  return {
    type: BACK_BOTTOM,
  };
};

export const backGoBack = () => {
  return {
    type: BACK_GO_BACK,
  };
};

export const backTopText = (text) => {
  return {
    type: BACK_TOP_TEXT,
    payload: text,
  };
};

export const backTopTextColor = (color) => {
  return {
    type: BACK_TOP_TEXT_COLOR,
    payload: color,
  };
};

export const backTopTextSize = (size) => {
  return {
    type: BACK_TOP_TEXT_SIZE,
    payload: size,
  };
};

export const backTopTextFamily = (family) => {
  return {
    type: BACK_TOP_TEXT_FAMILY,
    payload: family,
  };
};

export const backTopTextStroke = (stroke) => {
  return {
    type: BACK_TOP_TEXT_STROKE,
    payload: stroke,
  };
};

export const backTopTextStrokeColor = (strokecolor) => {
  return {
    type: BACK_TOP_TEXT_STROKE_COLOR,
    payload: strokecolor,
  };
};

export const backBotText = (text) => {
  return {
    type: BACK_BOT_TEXT,
    payload: text,
  };
};

export const backBotTextColor = (color) => {
  return {
    type: BACK_BOT_TEXT_COLOR,
    payload: color,
  };
};

export const backBotTextSize = (size) => {
  return {
    type: BACK_BOT_TEXT_SIZE,
    payload: size,
  };
};

export const backBotTextFamily = (family) => {
  return {
    type: BACK_BOT_TEXT_FAMILY,
    payload: family,
  };
};

export const backBotTextStroke = (stroke) => {
  return {
    type: BACK_BOT_TEXT_STROKE,
    payload: stroke,
  };
};

export const backBotTextStrokeColor = (strokecolor) => {
  return {
    type: BACK_BOT_TEXT_STROKE_COLOR,
    payload: strokecolor,
  };
};

//...................... left view items

export const leftDesign = () => {
  return {
    type: LEFT_DESIGN,
  };
};

export const leftGoBack = () => {
  return {
    type: LEFT_GO_BACK,
  };
};

export const leftText = (text) => {
  return {
    type: LEFT_TEXT,
    payload: text,
  };
};

export const leftImage = (img) => {
  return {
    type: LEFT_IMAGE,
    payload: img,
  };
};

export const leftMainImage = (mainimg) => {
  return {
    type: LEFT_MAIN_IMAGE,
    payload: mainimg,
  };
};

export const leftTextColor = (color) => {
  return {
    type: LEFT_TEXT_COLOR,
    payload: color,
  };
};

export const leftTextSize = (size) => {
  return {
    type: LEFT_TEXT_SIZE,
    payload: size,
  };
};

export const leftTextFamily = (family) => {
  return {
    type: LEFT_TEXT_FAMILY,
    payload: family,
  };
};

export const leftTextStroke = (stroke) => {
  return {
    type: LEFT_TEXT_STROKE,
    payload: stroke,
  };
};

export const leftTextStrokeColor = (strokecolor) => {
  return {
    type: LEFT_TEXT_STROKE_COLOR,
    payload: strokecolor,
  };
};

//...................... right view items

export const rightDesign = () => {
  return {
    type: RIGHT_DESIGN,
  };
};

export const rightGoBack = () => {
  return {
    type: RIGHT_GO_BACK,
  };
};

export const rightText = (text) => {
  return {
    type: RIGHT_TEXT,
    payload: text,
  };
};

export const rightImage = (img) => {
  return {
    type: RIGHT_IMAGE,
    payload: img,
  };
};

export const rightMainImage = (mainimg) => {
  return {
    type: RIGHT_MAIN_IMAGE,
    payload: mainimg,
  };
};

export const rightTextColor = (color) => {
  return {
    type: RIGHT_TEXT_COLOR,
    payload: color,
  };
};

export const rightTextSize = (size) => {
  return {
    type: RIGHT_TEXT_SIZE,
    payload: size,
  };
};

export const rightTextFamily = (family) => {
  return {
    type: RIGHT_TEXT_FAMILY,
    payload: family,
  };
};

export const rightTextStroke = (stroke) => {
  return {
    type: RIGHT_TEXT_STROKE,
    payload: stroke,
  };
};

export const rightTextStrokeColor = (strokecolor) => {
  return {
    type: RIGHT_TEXT_STROKE_COLOR,
    payload: strokecolor,
  };
};
