import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  SET_COUNT
} from "./actions";

export default (state = 0, action = {}) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    case RESET_COUNT:
      return 0;
    case SET_COUNT:
      const newState = parseInt(action.payload, 10) || state;
      return newState;
    default:
      return state;
  }
};
