import React from "react";

const Button = props => {
  const { onClick, label } = props;

  return (
    <button className="Button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
