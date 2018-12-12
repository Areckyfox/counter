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

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="AppHeading">Counter</h1>
        <Input />
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
