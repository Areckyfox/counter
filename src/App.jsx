import React, { Component } from "react";
import { Provider } from "react-redux";
import { uniqueId } from "lodash";

import "./App.css";

import store from "./redux/store";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Buttons from "./components/Buttons/Buttons";
import SavedNumbers from "./components/SavedNumbers/SavedNumbers";

class App extends Component {
  state = {
    savedNumbers: []
  };

  handleNumberSave = () => {
    const newNumber = {
      id: uniqueId(),
      value: this.state.count
    };

    this.setState(state => {
      return {
        savedNumbers: state.savedNumbers.concat(newNumber)
      };
    });
  };

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
    const { savedNumbers } = this.state;

    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="AppHeading">Counter</h1>
          <Input />
          <Counter />
          <Buttons handleNumberSave={this.handleNumberSave} />
          <SavedNumbers
            savedNumbers={savedNumbers}
            handleNumberRemove={this.handleNumberRemove}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
