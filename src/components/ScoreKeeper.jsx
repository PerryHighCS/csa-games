import React, { Component } from "react";

// shared across games
let globalScore = 0;

class ScoreKeeper extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { score: globalScore };
    this.myButtonRef = React.createRef();
  }

  incrementScore(increment = 1) {
    ++globalScore;
    this.setState({ score: globalScore });
    //console.log("button = ", this.myButtonRef.current);
    // move focus to scoreboard
    this.myButtonRef.current.click();
  }

  handleClick = () => {
    //console.log("score button was clicked.");
  };

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
        <button
          autoFocus
          ref={this.myButtonRef}
          onClick={this.handleClick}
          className="btn btn-outline-primary btn-lg m-2"
        >
          Score = {this.state.score}
        </button>
      </div>
    );
  }
}

export default ScoreKeeper;
