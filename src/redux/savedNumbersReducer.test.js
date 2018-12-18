import { addSavedNumber } from "./actionCreators";
import savedNumbersReducer from "./savedNumbersReducer";

describe("savedNumbersReducer", () => {
  it("handles ADD_SAVED_NUMBER action with empty initial state", () => {
    const action = addSavedNumber(10);
    const initialState = [];
    const state = savedNumbersReducer(initialState, action);

    expect(state).toHaveLength(1);
    expect(state[0].value).toBe(10);
  });

  it("handles multiple ADD_SAVED_NUMBER actions", () => {
    const initialState = [];

    let action = addSavedNumber(10);
    let state = savedNumbersReducer(initialState, action);

    expect(state).toHaveLength(1);
    expect(state[0].value).toBe(10);

    action = addSavedNumber(20);
    state = savedNumbersReducer(state, action);

    expect(state).toHaveLength(2);
    expect(state[0].value).toBe(10);
    expect(state[1].value).toBe(20);
  });
});
