import React from "react";
import { connect } from "react-redux";

import {
  incrementCount,
  decrementCount,
  resetCount
} from "../../redux/actionCreators";

import Button from "../Button/Button";

const Buttons = props => {
  const {
    incrementCount,
    decrementCount,
    resetCount,
    handleNumberSave
  } = props;

  return (
    <div className="Buttons">
      <Button label="Decrement" onClick={decrementCount} />
      <Button label="Reset" onClick={resetCount} />
      <Button label="Increment" onClick={incrementCount} />
      <Button label="Save" onClick={handleNumberSave} />
    </div>
  );
};

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  resetCount
};

export default connect(
  null,
  mapDispatchToProps
)(Buttons);
