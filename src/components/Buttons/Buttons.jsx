import React from "react";
import { connect } from "react-redux";

import { incrementCount } from "../../redux/actionCreators";

import Button from "../Button/Button";

const Buttons = props => {
  const {
    handleDecrement,
    handleReset,
    handleNumberSave,
    incrementCount
  } = props;

  return (
    <div className="Buttons">
      <Button label="Decrement" onClick={handleDecrement} />
      <Button label="Reset" onClick={handleReset} />
      <Button label="Increment" onClick={incrementCount} />
      <Button label="Save" onClick={handleNumberSave} />
    </div>
  );
};

const mapDispatchToProps = {
  incrementCount
};

export default connect(
  null,
  mapDispatchToProps
)(Buttons);
