import React from "react";
import ProcessStep from "./ProcessStep";
import styled from "styled-components";
import { TransitionGroup, Transition } from "react-transition-group";
import scrollToComponent from "react-scroll-to-component";

class ScrollingProcess extends React.Component {
  state = {
    currentStep: 1,
    numberOfSteps: React.Children.count(this.props.children)
  };

  onProcessFinished = () => {
    const { onProcessFinished } = this.props;
    onProcessFinished && onProcessFinished();
  };

  setNextStep = prevStepIndex => {
    debugger;
    let isProcessFinished = false;
    let nextStepIndex = prevStepIndex + 1;
    // check if last step is prevStep
    if (isProcessFinished) {
      this.onProcessFinished();
      return;
    }
    this.setState({
      currentStep: nextStepIndex
    });
  };

  scrollTo = htmlElement => {
    scrollToComponent(htmlElement, {
      align: "top",
      offset: 0 - htmlElement.offsetHeight / 2
    });
  };

  addNextStepToView = nextStepIndex => {};

  scrollToNextStep = htmlElement => {
    debugger;
    scrollToComponent(htmlElement, {
      align: "top",
      offset: 0 - htmlElement.offsetHeight / 2
    });
  };

  render() {
    const { children } = this.props;
    const { currentStep } = this.state;
    const activeSteps = React.Children.map(children, (step, idx) => {
      const index = idx + 1;
      if (index <= currentStep) {
        return React.cloneElement(step, {
          index: index,
          setNextStep: this.setNextStep
        });
      }
    });

    return (
      <Wrapper>
        <TransitionGroup>
          {activeSteps.map((s, i) => (
            <Transition key={i} timeout={300} onEntered={this.scrollToNextStep}>
              {state => (
                <Fader timeout={300} state={state}>
                  {s}
                </Fader>
              )}
            </Transition>
          ))}
        </TransitionGroup>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
`;

const Fader = styled.div`
  transition: ${props => `opacity ${props.timeout}ms ease-in`};
  opacity: ${props => {
    if (props.state === "entering" || props.state === "exiting") return 0.01;
    return 1;
  }};
  position: ${props => {
    if (props.state === "exiting" || props.state === "exited")
      return "absolute";
  }};
  ${props => {
    if (props.state === "exiting" || props.state === "exited")
      return "width: 100%;";
  }};
  top: 0;
  right: 0;
`;

ScrollingProcess.Step = ProcessStep;

export default ScrollingProcess;
