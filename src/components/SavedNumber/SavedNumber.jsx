import React from "react";
import { connect } from "react-redux";

import { removeSavedNumber } from "../../redux/actionCreators";
import Button from "../Button/Button";

class SavedNumber extends React.Component {
  handleRemove = () => {
    const { savedNumber, removeSavedNumber } = this.props;
    removeSavedNumber(savedNumber.id);
  };

  render() {
    const { savedNumber } = this.props;

    return (
      <li>
        <span data-testid="saved-number">{savedNumber.value}</span>
        <Button label="Remove" onClick={this.handleRemove} />
      </li>
    );
  }
}

const mapDispatchToProps = {
  removeSavedNumber
};

export default connect(
  null,
  mapDispatchToProps
)(SavedNumber);
