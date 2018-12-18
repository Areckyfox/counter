import countInputReducer from "./countInputReducer";
import { setCountInput } from "./actionCreators";

describe("countInputReducer", () => {
  it("provides initial state", () => {
    expect(countInputReducer()).toBe("");
  });

  it("handles empty SET_COUNT_INPUT action", () => {
    const action = setCountInput();
    const initialState = "1337";
    const state = countInputReducer(initialState, action);

    expect(state).toBe("");
  });

  it("handles SET_COUNT_INPUT action with payload", () => {
    const action = setCountInput("666");
    const initialState = "1337";
    const state = countInputReducer(initialState, action);

    expect(state).toBe("666");
  });
});
