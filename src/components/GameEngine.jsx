import React, { Component } from "react";
import Timer from "../components/Timer";
import Options from "../components/Options";
import ScoreKeeper from "../components/ScoreKeeper";
import Question from "../components/Question";
import "bootstrap/dist/css/bootstrap.css";

class GameEngine extends Component {
  state = {};

  constructor(props) {
    super(props);
    //const qf = new this.props.questionFactory(this.props.options);
    const qf = new this.props.qf(this.props.options);
    this.state = { qf: qf };
    this.myScoreKeeperRef = React.createRef();
    this.myTimerRef = React.createRef();
    this.myQuestionRef = React.createRef();
    this.incrementScore = this.incrementScore.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.addToTimer = this.addToTimer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.timerTimeOut = this.timerTimeOut.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  handleRestart = () => {
    console.log("restart was pressed");
    this.myScoreKeeperRef.current.resetScore();
    // restart the timer?
    if (this.props.timer) {
      this.myTimerRef.current.resetTimer();
    }
    const qf = new this.props.qf(this.props.options);
    // bug fix: since qf will not get upated in state for a while
    // use the local copy of the new qf to restart the question sequence
    this.myQuestionRef.current.restart(qf);
    this.setState({ qf });
  };

  gameOver = () => {
    console.log("game over");
    if (this.props.timer) {
      this.myTimerRef.current.stopTimer();
    }
  };

  nextQuestion = () => {
    console.log("game engine next question qref=", this.myQuestionRef);
    const qf = new this.props.qf(this.props.options);
    this.myQuestionRef.current.nextQuestion(qf);
    this.setState({ qf: qf });
  };

  incrementScore(increment = 1) {
    console.log("game engine increment score", this.myScoreKeeperRef);
    if (this.props.timer) this.myTimerRef.current.resetTimer();
    this.myScoreKeeperRef.current.incrementScore(increment);
  }

  timerTimeOut() {
    console.log("Timer has timed out.");
    this.gameOver();
    this.myQuestionRef.current.timeout();
  }

  updateGrid() {
    this.myQuestionRef.current.updateGrid();
  }

  addToTimer() {
    console.log("added time timer");
    if (this.props.timer) this.myTimerRef.current.addToTimer();
  }

  makeTimer() {
    if (this.props.timer) {
      return (
        <Timer
          ref={this.myTimerRef}
          maxtime={this.props.maxtime}
          addtime={this.props.addtime}
          timeout={this.timerTimeOut}
        />
      );
    }
  }

  render() {
    console.log("game engine ", this.props.title);

    return (
      <div>
        <h3>{this.props.title}</h3>
        <Options
          options={this.props.options}
          onChange={this.props.handleOptions}
        />

        <ScoreKeeper ref={this.myScoreKeeperRef} />
        <Question
          ref={this.myQuestionRef}
          options={this.props.options}
          labels={this.props.labels}
          qf={this.state.qf}
          nextQuestion={this.nextQuestion}
          updateGrid={this.updateGrid}
          incrementScore={this.incrementScore}
          gameOver={this.gameOver}
          addToTimer={this.addToTimer}
          timer={this.props.timer}
        />
        <button
          onClick={this.handleRestart}
          className="btn btn-danger m-2 btn-lg"
        >
          Restart
        </button>
        {this.makeTimer()}
      </div>
    );
  }
}

export default GameEngine;
