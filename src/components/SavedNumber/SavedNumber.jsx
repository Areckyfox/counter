import React from "react";

import Button from "../Button/Button";

const SavedNumber = props => {
  return (
    <li>
      <span data-testid="saved-number">{props.number}</span>
      <Button label="Remove" />
    </li>
  );
};

export default SavedNumber;
