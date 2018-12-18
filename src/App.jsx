import React, { Component } from "react";

import "./App.css";

import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Buttons from "./components/Buttons/Buttons";
import SavedNumbers from "./components/SavedNumbers/SavedNumbers";

class App extends Component {
  handleNumberRemove = numberToRemoveId => () => {
    this.setState(state => {
      return {
        savedNumbers: state.savedNumbers.filter(
          savedNumber => savedNumber.id !== numberToRemoveId
        )
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="AppHeading">Counter</h1>
        <Input />
        <Counter />
        <Buttons />
        <SavedNumbers handleNumberRemove={this.handleNumberRemove} />
      </div>
    );
  }
}

export default App;
