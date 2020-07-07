import React, { Component } from "react";
import { ArrayQuestionFactory } from "./arrayquestionfactory";
import GameEngine from "../components/GameEngine";
import * as ArrayConstants from "./arrayconstants";

const ARRAYOPTIONS = [
  {
    id: ArrayConstants.TIMEROPTIONID,
    label: "Timer",
    checked: ArrayConstants.DEFAULTTIMEROPTION,
  },
  {
    id: ArrayConstants.LABELSOPTIONID,
    label: "Labels",
    checked: ArrayConstants.DEFAULTLABELSOPTION,
  },
  { id: ArrayConstants.LOOPSOPTIONID, label: "Loops", checked: false },
  { id: ArrayConstants.TWODOPTIONID, label: "2D", checked: false },
];

class ArrayGameEngine extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      options: ARRAYOPTIONS,
      qf: ArrayQuestionFactory,
      timer: ArrayConstants.DEFAULTTIMEROPTION,
      labels: ArrayConstants.DEFAULTLABELSOPTION,
      maxtime: ArrayConstants.MAXTIME,
      addtime: ArrayConstants.ADDTIME,
    };
  }

  handleOptions = (options, id, checked) => {
    console.log("options have changed ", options, id, checked);
    // timer and label options are handled here.
    // other options are used by the question factory
    switch (id) {
      case ArrayConstants.TIMEROPTIONID:
        let timer = checked;
        this.setState({ timer, options });
        return;
      case ArrayConstants.LABELSOPTIONID:
        let labels = checked;
        this.setState({ labels, options });
        return;
      default:
        break;
    }
    this.setState({ options });
  };

  render() {
    //console.log("disarray game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={ArrayConstants.ARRAYGAMETITLE}
          options={this.state.options}
          handleOptions={this.handleOptions}
          timer={this.state.timer}
          labels={this.state.labels}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
      </div>
    );
  }
}

export default ArrayGameEngine;
