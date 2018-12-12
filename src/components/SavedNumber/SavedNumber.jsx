import React from "react";

import Button from "../Button/Button";

const SavedNumber = props => {
  const { handleNumberRemove, savedNumber } = props;

  return (
    <li>
      <span data-testid="saved-number">{savedNumber.value}</span>
      <Button label="Remove" onClick={handleNumberRemove(savedNumber.id)} />
    </li>
  );
};

export default SavedNumber;
