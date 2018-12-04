import React from "react";

import Button from "../Button/Button";

const SavedNumber = props => {
  return (
    <li>
      {props.number} <Button label="Remove" />
    </li>
  );
};

export default SavedNumber;
