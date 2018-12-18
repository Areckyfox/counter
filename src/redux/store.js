import { createStore, combineReducers } from "redux";

import count from "./countReducer";
import countInput from "./countInputReducer";

const initialState = {
  savedNumbers: [],
  count: 0,
  countInput: ""
};

const reducer = combineReducers({
  count,
  countInput
});

export default createStore(reducer, initialState);
