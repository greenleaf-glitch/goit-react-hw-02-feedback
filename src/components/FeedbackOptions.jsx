import React, { Component } from 'react';

class FeedbackOptions extends Component {
  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
