import React from "react";
import { connect } from "react-redux";

import {
  incrementCount,
  decrementCount,
  resetCount,
  addSavedNumber
} from "../../redux/actionCreators";

import Button from "../Button/Button";

class Buttons extends React.Component {
  handleSave = () => {
    const { addSavedNumber, count } = this.props;
    addSavedNumber(count);
  };

  render() {
    const { incrementCount, decrementCount, resetCount } = this.props;

    return (
      <div className="Buttons">
        <Button label="Decrement" onClick={decrementCount} />
        <Button label="Reset" onClick={resetCount} />
        <Button label="Increment" onClick={incrementCount} />
        <Button label="Save" onClick={this.handleSave} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: state.count };
};

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  resetCount,
  addSavedNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
