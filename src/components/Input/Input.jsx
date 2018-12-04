import React from "react";

const Input = () => {
  return (
    <form className="InputWrapper">
      <label htmlFor="set-count" className="InputLabel">
        Count value
      </label>
      <input type="number" className="Input" id="set-count" />
      <button className="Button">Set</button>
    </form>
  );
};

export default Input;
