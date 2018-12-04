import React from "react";

import SavedNumber from "../SavedNumber/SavedNumber";

const SavedNumbers = () => {
  return (
    <div className="SavedNumbers">
      <h2>Saved numbers:</h2>
      <ul data-testid="saved-numbers">
        <SavedNumber number={1} />
        <SavedNumber number={2} />
        <SavedNumber number={3} />
      </ul>
    </div>
  );
};

export default SavedNumbers;
