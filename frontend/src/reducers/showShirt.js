import {
  MAIN_COLOR,
  FRONT_SIDE,
  BACK_SIDE,
  LEFT_SIDE,
  RIGHT_SIDE,
  START,
  DCONTENT,
  DFINISH,
} from "../actions/types";

const initialState = {
  Dcontent: "d-block",
  Dfinish: "d-none",
  main: true,
  front: false,
  back: false,
  left: false,
  right: false,
  inner: false,
};

const showShirt = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_COLOR:
      return {
        ...state,
        main: true,
        front: false,
        back: false,
        left: false,
        right: false,
        inner: false,
      };
    case FRONT_SIDE:
      return {
        ...state,
        main: false,
        front: true,
        back: false,
        left: false,
        right: false,
        inner: false,
      };
    case BACK_SIDE:
      return {
        ...state,
        main: false,
        front: false,
        back: true,
        left: false,
        right: false,
        inner: false,
      };
    case LEFT_SIDE:
      return {
        ...state,
        main: false,
        front: false,
        back: false,
        left: true,
        right: false,
        inner: false,
      };
    case RIGHT_SIDE:
      return {
        ...state,
        main: false,
        front: false,
        back: false,
        left: false,
        right: true,
        inner: false,
      };
    case DCONTENT:
      return {
        ...state,
        Dcontent: "d-none",
        Dfinish: "d-block",
      };
    case DFINISH:
      return {
        ...state,
        Dcontent: "d-block",
        Dfinish: "d-none",
      };
    case START:
      return initialState;

    default:
      return state;
  }
};

export default showShirt;
