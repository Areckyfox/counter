import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT } from "./actions";

export default (state = 0, action = {}) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    case RESET_COUNT:
      return 0;
    default:
      return state;
  }
};
