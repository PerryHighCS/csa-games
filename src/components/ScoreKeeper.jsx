import React, { Component } from "react";

// shared across games
let globalScore = 0;

class ScoreKeeper extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { score: globalScore };
  }

  incrementScore(increment = 1) {
    ++globalScore;
    this.setState({ score: globalScore });
  }

  resetGlobalScore() {
    //console.log("resetting global score to 0");
    globalScore = 0;
  }

  resetScore() {
    globalScore = 0;
    this.setState({ score: globalScore });
  }

  getScore() {
    return this.state.score;
  }

  render() {
    return (
      <div>
        <button className="btn btn-outline-primary btn-lg m-2">
          Score = {this.state.score}
        </button>
      </div>
    );
  }
}

export default ScoreKeeper;
