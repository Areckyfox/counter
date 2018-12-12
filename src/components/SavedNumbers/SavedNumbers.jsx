import React from "react";

import SavedNumber from "../SavedNumber/SavedNumber";

const SavedNumbers = props => {
  const { savedNumbers, handleNumberRemove } = props;

  return (
    <div className="SavedNumbers">
      <h2>Saved numbers:</h2>
      <ul>
        {savedNumbers.map(savedNumber => {
          return (
            <SavedNumber
              key={savedNumber.id}
              savedNumber={savedNumber}
              handleNumberRemove={handleNumberRemove}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SavedNumbers;
