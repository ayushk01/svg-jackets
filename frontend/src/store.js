import thunk from "redux-thunk";
import rootReducers from "./reducers";

import { createStore, applyMiddleware, compose } from "redux";

const initialState = {
  showShirt: [],
  shirtColor: [],
  frontView: [],
  backView: [],
  leftView: [],
  rightView: [],
};

const midleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(...midleware))
);

export default store;
