import { incrementCount, decrementCount, resetCount } from "./actionCreators";
import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT } from "./actions";

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
});
