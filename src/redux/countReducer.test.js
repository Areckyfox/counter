import countReducer from "./countReducer";
import { incrementCount, decrementCount, resetCount } from "./actionCreators";

describe("countReducer", () => {
  it("provides initial state", () => {
    expect(countReducer()).toBe(0);
  });

  it("handles INCREMENT_COUNT action", () => {
    const action = incrementCount();
    const initialState = 10;
    const state = countReducer(initialState, action);

    expect(state).toBe(11);
  });

  it("handles DECREMENT_COUNT action", () => {
    const action = decrementCount();
    const initialState = 10;
    const state = countReducer(initialState, action);

    expect(state).toBe(9);
  });

  it("handles RESET_COUNT action", () => {
    const action = resetCount();
    const initialState = 10;
    const state = countReducer(initialState, action);

    expect(state).toBe(0);
  });
});
