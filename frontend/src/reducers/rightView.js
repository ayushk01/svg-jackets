import {
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
} from "../actions/types";

const initialState = {
  chooseRight: false,
  rightText: "",
  rightTextColor: "black",
  rightTextSize: "30",
  rightTextFamily: "Agency FB",
  rightTextStroke: "0",
  rightTextStrokeColor: "#000000",
  rightImage: "",
  rightMainImage: "",
};

const rightView = (state = initialState, action) => {
  switch (action.type) {
    case RIGHT_DESIGN:
      return {
        ...state,
        chooseRight: true,
      };
    case RIGHT_GO_BACK:
      return {
        ...state,
        chooseRight: false,
      };
    case RIGHT_TEXT:
      return {
        ...state,
        rightImage: "",
        rightMainImage: "",
        rightText: action.payload,
      };
    case RIGHT_IMAGE:
      return {
        ...state,
        rightText: "",
        rightImage: action.payload,
      };
    case RIGHT_MAIN_IMAGE:
      return {
        ...state,
        rightText: "",
        rightMainImage: action.payload,
      };
    case RIGHT_TEXT_COLOR:
      return {
        ...state,
        rightTextColor: action.payload,
      };
    case RIGHT_TEXT_SIZE:
      return {
        ...state,
        rightTextSize: action.payload,
      };
    case RIGHT_TEXT_STROKE:
      return {
        ...state,
        rightTextStroke: action.payload,
      };
    case RIGHT_TEXT_STROKE_COLOR:
      return {
        ...state,
        rightTextStrokeColor: action.payload,
      };
    case RIGHT_TEXT_FAMILY:
      return {
        ...state,
        rightTextFamily: action.payload,
      };
    case "START_AGAIN":
      return initialState;
    case "START":
      return initialState;
    default:
      return state;
  }
};

export default rightView;
