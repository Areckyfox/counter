import React from "react";
import { connect } from "react-redux";

import { setCountInput, setCount } from "../../redux/actionCreators";

class Input extends React.Component {
  handleChange = event => {
    this.props.setCountInput(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { setCount, setCountInput, value } = this.props;
    setCount(value);
    setCountInput("");
  };

  render() {
    return (
      <form className="InputWrapper" onSubmit={this.handleSubmit}>
        <label htmlFor="set-count" className="InputLabel">
          Count value
        </label>
        <input
          type="number"
          className="Input"
          id="set-count"
          onChange={this.handleChange}
          value={this.props.value}
        />
        <button className="Button">Set</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.countInput
  };
};

const mapDispatchToProps = {
  setCountInput,
  setCount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
