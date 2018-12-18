import { createStore, combineReducers } from "redux";

import count from "./countReducer";

const initialState = {
  savedNumbers: [],
  count: 0,
  countInput: ""
};

const reducer = combineReducers({
  count
});

export default createStore(reducer, initialState);
