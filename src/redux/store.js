import { createStore, combineReducers } from "redux";

import count from "./countReducer";
import countInput from "./countInputReducer";
import savedNumbers from "./savedNumbersReducer";

export const initialState = {
  savedNumbers: [],
  count: 0,
  countInput: ""
};

export const reducer = combineReducers({
  savedNumbers,
  count,
  countInput
});

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
