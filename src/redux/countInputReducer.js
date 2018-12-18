import { SET_COUNT_INPUT } from "./actions";

export default (state = "", action = {}) => {
  switch (action.type) {
    case SET_COUNT_INPUT:
      return action.payload;
    default:
      return state;
  }
};
