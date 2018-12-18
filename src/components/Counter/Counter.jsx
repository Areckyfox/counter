import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  return (
    <p className="Counter" data-testid="count">
      {props.count}
    </p>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
