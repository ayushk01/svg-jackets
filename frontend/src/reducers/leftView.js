import {
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
} from "../actions/types";

const initialState = {
  chooseLeft: false,
  leftText: "",
  leftTextColor: "black",
  leftTextSize: "30",
  leftTextFamily: "Agency FB",
  leftTextStroke: "0",
  leftTextStrokeColor: "#000000",
  leftImage: "",
  leftMainImage: "",
};

const leftView = (state = initialState, action) => {
  switch (action.type) {
    case LEFT_DESIGN:
      return {
        ...state,
        chooseLeft: true,
      };
    case LEFT_GO_BACK:
      return {
        ...state,
        chooseLeft: false,
      };
    case LEFT_TEXT:
      return {
        ...state,
        leftText: action.payload,
        leftImage: "",
        leftMainImage: "",
      };
    case LEFT_IMAGE:
      return {
        ...state,
        leftText: "",
        leftImage: action.payload,
      };
    case LEFT_MAIN_IMAGE:
      return {
        ...state,
        leftText: "",
        leftMainImage: action.payload,
      };
    case LEFT_TEXT_COLOR:
      return {
        ...state,
        leftTextColor: action.payload,
      };
    case LEFT_TEXT_SIZE:
      return {
        ...state,
        leftTextSize: action.payload,
      };
    case LEFT_TEXT_STROKE:
      return {
        ...state,
        leftTextStroke: action.payload,
      };
    case LEFT_TEXT_STROKE_COLOR:
      return {
        ...state,
        leftTextStrokeColor: action.payload,
      };
    case LEFT_TEXT_FAMILY:
      return {
        ...state,
        leftTextFamily: action.payload,
      };
    case "START_AGAIN":
      return initialState;
    case "START":
      return initialState;
    default:
      return state;
  }
};

export default leftView;
