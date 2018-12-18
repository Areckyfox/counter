import { ADD_SAVED_NUMBER } from "./actions";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_SAVED_NUMBER:
      return state.concat(action.payload);
    default:
      return state;
  }
};
