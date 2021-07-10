import {
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
} from "../actions/types";

const initialState = {
  chooseLeft: false,
  chooseRight: false,
  frontTopLeftText: "",
  frontTopLeftTextColor: "#ffffff",
  frontTopLeftTextSize: "30",
  frontTopLeftTextFamily: "Agency FB",
  frontTopLeftTextStroke: "0",
  frontTopLeftTextStrokeColor: "#000000",
  frontTopRightText: "",
  frontTopRightTextColor: "#ffffff",
  frontTopRightTextSize: "30",
  frontTopRightTextFamily: "Agency FB",
  frontTopRightTextStroke: "0",
  frontTopRightTextStrokeColor: "#000000",
  frontTopLeftImage: "",
  frontTopLeftMainImage: "",
  frontTopRightImage: "",
  frontTopRightMainImage: "",
};

const frontView = (state = initialState, action) => {
  switch (action.type) {
    case FRONT_TOP_LEFT:
      return {
        ...state,
        chooseLeft: true,
        chooseRight: false,
      };
    case FRONT_TOP_RIGHT:
      return {
        ...state,
        chooseRight: true,
        chooseLeft: false,
      };
    case FRONT_GO_BACK:
      return {
        ...state,
        chooseRight: false,
        chooseLeft: false,
      };
    case FRONT_IMAGE:
      if (state.chooseLeft === true) {
        return {
          ...state,
          frontTopRightText: "",
          frontTopRightImage: action.payload,
        };
      }
      if (state.chooseRight === true) {
        return {
          ...state,
          frontTopLeftText: "",
          frontTopLeftImage: action.payload,
        };
      }
      break;
    case FRONT_MAIN_IMAGE:
      if (state.chooseLeft === true) {
        return {
          ...state,
          frontTopRightText: "",
          frontTopRightMainImage: action.payload,
        };
      }
      if (state.chooseRight === true) {
        return {
          ...state,
          frontTopLeftText: "",
          frontTopLeftMainImage: action.payload,
        };
      }
      break;
    case FRONT_LEFT_TEXT:
      return {
        ...state,
        frontTopLeftImage: "",
        frontTopLeftMainImage: "",
        frontTopLeftText: action.payload,
      };
    case FRONT_LEFT_TEXT_COLOR:
      return {
        ...state,
        frontTopLeftTextColor: action.payload,
      };
    case FRONT_LEFT_TEXT_SIZE:
      return {
        ...state,
        frontTopLeftTextSize: action.payload,
      };
    case FRONT_LEFT_TEXT_STROKE:
      return {
        ...state,
        frontTopLeftTextStroke: action.payload,
      };
    case FRONT_LEFT_TEXT_STROKE_COLOR:
      return {
        ...state,
        frontTopLeftTextStrokeColor: action.payload,
      };
    case FRONT_LEFT_TEXT_FAMILY:
      return {
        ...state,
        frontTopLeftTextFamily: action.payload,
      };
    case FRONT_RIGHT_TEXT:
      return {
        ...state,
        frontTopRightImage: "",
        frontTopRightMainImage: "",
        frontTopRightText: action.payload,
      };
    case FRONT_RIGHT_TEXT_COLOR:
      return {
        ...state,
        frontTopRightTextColor: action.payload,
      };
    case FRONT_RIGHT_TEXT_SIZE:
      return {
        ...state,
        frontTopRightTextSize: action.payload,
      };
    case FRONT_RIGHT_TEXT_STROKE:
      return {
        ...state,
        frontTopRightTextStroke: action.payload,
      };
    case FRONT_RIGHT_TEXT_STROKE_COLOR:
      return {
        ...state,
        frontTopRightTextStrokeColor: action.payload,
      };
    case FRONT_RIGHT_TEXT_FAMILY:
      return {
        ...state,
        frontTopRightTextFamily: action.payload,
      };
    case "START_AGAIN":
      return initialState;
    case "START":
      return initialState;
    default:
      return state;
  }
};

export default frontView;
