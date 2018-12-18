import {
  incrementCount,
  decrementCount,
  resetCount,
  setCountInput,
  setCount
} from "./actionCreators";
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  SET_COUNT_INPUT,
  SET_COUNT
} from "./actions";

describe("actionCreators", () => {
  it("creates INCREMENT_COUNT action", () => {
    const action = incrementCount();
    expect(action.type).toBe(INCREMENT_COUNT);
  });

  it("creates DECREMENT_COUNT action", () => {
    const action = decrementCount();
    expect(action.type).toBe(DECREMENT_COUNT);
  });

  it("creates RESET_COUNT action", () => {
    const action = resetCount();
    expect(action.type).toBe(RESET_COUNT);
  });

  it("creates empty SET_COUNT action", () => {
    const action = setCount();
    expect(action.type).toBe(SET_COUNT);
    expect(action.payload).toBe("");
  });

  it("creates SET_COUNT with expected payload", () => {
    const action = setCount("123");
    expect(action.type).toBe(SET_COUNT);
    expect(action.payload).toBe("123");
  });

  it("creates empty SET_COUNT_INPUT action", () => {
    const action = setCountInput();
    expect(action.type).toBe(SET_COUNT_INPUT);
    expect(action.payload).toBe("");
  });

  it("creates SET_COUNT_INPUT action with expected payload", () => {
    const action = setCountInput("666");
    expect(action.type).toBe(SET_COUNT_INPUT);
    expect(action.payload).toBe("666");
  });
});
