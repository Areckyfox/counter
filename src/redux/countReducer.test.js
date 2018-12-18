import countReducer from "./countReducer";
import { incrementCount } from "./actionCreators";

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
});
