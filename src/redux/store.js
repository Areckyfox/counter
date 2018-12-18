import { createStore, combineReducers } from "redux";

import countReducer from "./countReducer";

const initialState = {
  savedNumbers: [],
  count: 0,
  countInput: ""
};

const reducer = combineReducers({
  countReducer
});

export default createStore(initialState, reducer);
