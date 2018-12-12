import React from "react";

const Input = props => {
  const { onChange, onSubmit, value } = props;

  return (
    <form className="InputWrapper" onSubmit={onSubmit}>
      <label htmlFor="set-count" className="InputLabel">
        Count value
      </label>
      <input
        type="number"
        className="Input"
        id="set-count"
        onChange={onChange}
        value={value}
      />
      <button className="Button">Set</button>
    </form>
  );
};

export default Input;
