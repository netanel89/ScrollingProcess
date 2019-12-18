import React from "react";
import PropTypes from "prop-types";

class ProcessStep extends React.Component {
  onProcessExecuted = stepData => {
    const { onProcessExecuted } = this.props;
    onProcessExecuted && onProcessExecuted(stepData);
  };
  onProcessInitiated = () => {
    const { onProcessInitiated } = this.props;
    onProcessInitiated && onProcessInitiated();
  };

  setNextStep = () => {
    const { setNextStep, index } = this.props;
    setNextStep(index);
  };

  render() {
    const { render } = this.props;
    return <div onClick={this.setNextStep}>{render()}</div>;
  }
}

ProcessStep.defaultProps = {
  onProcessExecuted: defaultFunc,
  onProcessInitiated: defaultFunc,
  isRenderMarkup: false
};

ProcessStep.propTypes = {
  onProcessExecuted: PropTypes.func,
  onProcessInitiated: PropTypes.func,
  index: PropTypes.number.isRequired,
  isRenderMarkup: PropTypes.bool
};

const defaultFunc = () => {};

export default ProcessStep;
