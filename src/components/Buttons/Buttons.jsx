import React from "react";

import Button from "../Button/Button";

const Buttons = () => {
  return (
    <div className="Buttons">
      <Button label="Decrement" />
      <Button label="Reset" />
      <Button label="Increment" />
      <Button label="Save" />
    </div>
  );
};

export default Buttons;
