import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";

import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit("increments counter", () => {
  const { getByText, getByTestId } = render(<App />);
  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.click(getByText("Increment"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(initialCount + 1);
});

xit("decrements counter", () => {
  const { getByText, getByTestId } = render(<App />);
  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.click(getByText("Decrement"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(initialCount - 1);
});

xit("resets counter", () => {
  const { getByText, getByTestId } = render(<App />);
  const countComponent = getByTestId("count");

  fireEvent.click(getByText("Reset"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(0);
});

xit("sets counter value from input", () => {
  const { getByText, getByTestId, getByLabelText } = render(<App />);
  const inputComponent = getByLabelText("Count value");
  const countComponent = getByTestId("count");

  fireEvent.change(inputComponent, { target: { value: "1337" } });
  fireEvent.click(getByText("Set"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(1337);
  expect(inputComponent.value).toEqual("");
});

xit("prevents setting counter value from empty input", () => {
  const { getByText, getByTestId, getByLabelText } = render(<App />);
  const inputComponent = getByLabelText("Count value");
  const countComponent = getByTestId("count");
  const initialCount = parseInt(countComponent.textContent, 10);

  fireEvent.change(inputComponent, { target: { value: "" } });
  fireEvent.click(getByText("Set"));

  const newCount = parseInt(countComponent.textContent, 10);
  expect(newCount).toEqual(initialCount);
  expect(inputComponent.value).toEqual("");
});

xit("adds current count as first element of saved number list", () => {
  const { getByText, getByTestId, getAllByTestId } = render(<App />);

  const countComponent = getByTestId("count");
  const initialCount = countComponent.textContent;

  fireEvent.click(getByText("Save"));

  const savedNumberList = getAllByTestId("saved-number").map(
    savedNumber => savedNumber.textContent
  );
  expect(savedNumberList).toEqual([initialCount]);
});
