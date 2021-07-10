import { combineReducers } from "redux";
import showShirt from "./showShirt";
import shirtColor from "./shirtColor";
import frontView from "./frontView";
import backView from "./backView";
import leftView from "./leftView";
import rightView from "./rightView";

export default combineReducers({
  showShirt,
  shirtColor,
  frontView,
  backView,
  leftView,
  rightView,
});
