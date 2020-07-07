import React, { Component } from "react";
class ScoreKeeper extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  incrementScore(increment = 1) {
    this.setState({ score: this.state.score + increment });
  }

  resetScore() {
    this.setState({ score: 0 });
  }

  getScore() {
    return this.state.score;
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-lg m-2">
          Score = {this.state.score}
        </button>
      </div>
    );
  }
}

export default ScoreKeeper;
