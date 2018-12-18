// import { incrementCount } from "./actionCreators";
// import { INCREMENT_COUNT } from "./actions";

xdescribe("actionCreators", () => {
  it("creates INCREMENT_COUNT action", () => {
    const action = incrementCount();
    expect(action.type).toBe(INCREMENT_COUNT);
  });
});
