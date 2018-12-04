import React from "react";

const Counter = props => {
  return (
    <p className="Counter" data-testid="count">
      {props.count}
    </p>
  );
};

export default Counter;
