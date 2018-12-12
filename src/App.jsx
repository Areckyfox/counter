import React, { Component } from "react";

import "./App.css";

import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Buttons from "./components/Buttons/Buttons";
import SavedNumbers from "./components/SavedNumbers/SavedNumbers";

class App extends Component {
  state = {
    count: 0,
    savedNumbers: [],
    countInputValue: ""
  };

  handleIncrement = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  };

  handleDecrement = () => {
    this.setState(state => {
      return {
        count: state.count - 1
      };
    });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleCountInputChange = event => {
    const countInputValue = event.currentTarget.value;

    this.setState({ countInputValue });
  };

  handleInputValueSet = event => {
    event.preventDefault();

    this.setState(state => {
      return {
        count: parseInt(state.countInputValue, 10) || state.count,
        countInputValue: ""
      };
    });
  };

  render() {
    const { count, countInputValue } = this.state;

    return (
      <div className="App">
        <h1 className="AppHeading">Counter</h1>
        <Input
          value={countInputValue}
          onChange={this.handleCountInputChange}
          onSubmit={this.handleInputValueSet}
        />
        <Counter count={count} />
        <Buttons
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
        />
        <SavedNumbers />
      </div>
    );
  }
}

export default App;
