import React from "react";

import SavedNumber from "../SavedNumber/SavedNumber";

const SavedNumbers = props => {
  return (
    <div className="SavedNumbers">
      <h2>Saved numbers:</h2>
      <ul>
        {props.savedNumbers.map(savedNumber => {
          return (
            <SavedNumber key={savedNumber.id} number={savedNumber.value} />
          );
        })}
      </ul>
    </div>
  );
};

export default SavedNumbers;
