import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import { createStore } from "redux";
import { Provider } from "react-redux";

import store, { reducer } from "./redux/store";
import App from "./App";

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("increments counter", () => {
  const { getByText, getByTestId } = renderWithRedux(<App />);
  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.click(getByText("Increment"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(initialCount + 1);
});

it("decrements counter", () => {
  const { getByText, getByTestId } = renderWithRedux(<App />);
  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.click(getByText("Decrement"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(initialCount - 1);
});

it("resets counter", () => {
  const { getByText, getByTestId } = renderWithRedux(<App />);
  const countComponent = getByTestId("count");

  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Reset"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(0);
});

it("sets counter value from input", () => {
  const { getByText, getByTestId, getByLabelText } = renderWithRedux(<App />);
  const inputComponent = getByLabelText("Count value");
  const countComponent = getByTestId("count");

  fireEvent.change(inputComponent, { target: { value: "1337" } });
  fireEvent.click(getByText("Set"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(1337);
  expect(inputComponent.value).toEqual("");
});

it("prevents setting counter value from empty input", () => {
  const { getByText, getByTestId, getByLabelText } = renderWithRedux(<App />);
  const inputComponent = getByLabelText("Count value");
  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.change(inputComponent, { target: { value: "" } });
  fireEvent.click(getByText("Set"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(initialCount);
  expect(inputComponent.value).toEqual("");
});

it("adds current count as first element of saved number list", () => {
  const { getByText, getByTestId, getAllByTestId } = renderWithRedux(<App />);

  const countComponent = getByTestId("count");
  const initialCount = countComponent.textContent;

  fireEvent.click(getByText("Save"));

  const savedNumberList = getAllByTestId("saved-number").map(
    savedNumber => savedNumber.textContent
  );
  expect(savedNumberList).toEqual([initialCount]);
});

it("adds multiple numbers to list", () => {
  const { getByText, getByTestId, getAllByTestId } = renderWithRedux(<App />);

  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.click(getByText("Save"));
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Save"));
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Save"));

  const savedNumberList = getAllByTestId("saved-number").map(
    savedNumber => savedNumber.textContent
  );
  const expectedNumberList = [
    initialCount.toString(),
    (initialCount + 1).toString(),
    (initialCount + 2).toString()
  ];
  expect(savedNumberList).toEqual(expectedNumberList);
});

xit("removes numbers from list", () => {
  const {
    getByText,
    getByTestId,
    getAllByTestId,
    getAllByText
  } = renderWithRedux(<App />);

  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.click(getByText("Save"));
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Save"));
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Save"));

  let removeButtons = getAllByText("Remove");
  expect(removeButtons).toHaveLength(3);

  fireEvent.click(removeButtons[1]);

  removeButtons = getAllByText("Remove");
  expect(removeButtons).toHaveLength(2);

  const savedNumberList = getAllByTestId("saved-number").map(
    savedNumber => savedNumber.textContent
  );
  const expectedNumberList = [
    initialCount.toString(),
    (initialCount + 2).toString()
  ];
  expect(savedNumberList).toEqual(expectedNumberList);
});
