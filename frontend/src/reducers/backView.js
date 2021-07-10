import {
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
} from "../actions/types";

const initialState = {
  chooseTop: false,
  chooseCenter: false,
  chooseBottom: false,
  //....
  backTopText: "",
  backTopTextColor: "#ffffff",
  backTopTextSize: "30",
  backTopTextFamily: "Agency FB",
  backTopTextStroke: "0",
  backTopTextStrokeColor: "#000000",
  //....
  backBottomText: "",
  backBottomTextColor: "#ffffff",
  backBottomTextSize: "30",
  backBottomTextFamily: "Agency FB",
  backBottomTextStroke: "0",
  backBottomTextStrokeColor: "#000000",
  backCenterImage: "",
  backMainCenterImage: "",
};

const backView = (state = initialState, action) => {
  switch (action.type) {
    case BACK_TOP:
      return {
        ...state,
        chooseTop: true,
        chooseBottom: false,
        chooseCenter: false,
      };
    case BACK_CENTER:
      return {
        ...state,
        chooseTop: false,
        chooseCenter: false,
        chooseBottom: false,
        backCenterImage: action.payload,
      };
    case BACK_MAIN_CENTER:
      return {
        ...state,
        backMainCenterImage: action.payload,
      };
    case BACK_BOTTOM:
      return {
        ...state,
        chooseTop: false,
        chooseCenter: false,
        chooseBottom: true,
      };
    case BACK_GO_BACK:
      return {
        ...state,
        chooseBottom: false,
        chooseTop: false,
        chooseCenter: false,
      };
    case BACK_TOP_TEXT:
      return {
        ...state,
        backTopText: action.payload,
      };
    case BACK_TOP_TEXT_COLOR:
      return {
        ...state,
        backTopTextColor: action.payload,
      };
    case BACK_TOP_TEXT_SIZE:
      return {
        ...state,
        backTopTextSize: action.payload,
      };
    case BACK_TOP_TEXT_STROKE:
      return {
        ...state,
        backTopTextStroke: action.payload,
      };
    case BACK_TOP_TEXT_STROKE_COLOR:
      return {
        ...state,
        backTopTextStrokeColor: action.payload,
      };
    case BACK_TOP_TEXT_FAMILY:
      return {
        ...state,
        backTopTextFamily: action.payload,
      };
    case BACK_BOT_TEXT:
      return {
        ...state,
        backBottomText: action.payload,
      };
    case BACK_BOT_TEXT_COLOR:
      return {
        ...state,
        backBottomTextColor: action.payload,
      };
    case BACK_BOT_TEXT_SIZE:
      return {
        ...state,
        backBottomTextSize: action.payload,
      };
    case BACK_BOT_TEXT_STROKE:
      return {
        ...state,
        backBottomTextStroke: action.payload,
      };
    case BACK_BOT_TEXT_STROKE_COLOR:
      return {
        ...state,
        backBottomTextStrokeColor: action.payload,
      };
    case BACK_BOT_TEXT_FAMILY:
      return {
        ...state,
        backBottomTextFamily: action.payload,
      };
    case "START_AGAIN":
      return initialState;
    case "START":
      return initialState;
    default:
      return state;
  }
};

export default backView;
