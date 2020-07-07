import React, { Component } from "react";
import { RelationalQuestionFactory } from "./relationalquestionfactory";
import GameEngine from "../components/GameEngine";
import * as RelationalConstants from "./relationalconstants";

const RELATIONALOPTIONS = [
  {
    id: RelationalConstants.TIMEROPTIONID,
    label: "Timer",
    checked: RelationalConstants.DEFAULTTIMEROPTION,
  },
  {
    id: RelationalConstants.COMPOUNDOPTIONID,
    label: "Compound",
    checked: RelationalConstants.DEFAULTCOMPOUNDSOPTION,
  },
  {
    id: RelationalConstants.CHALLENGEOPTIONID,
    label: "Challenge",
    checked: RelationalConstants.DEFAULTCHALLENGESOPTION,
  },
];

class RelationalGameEngine extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      options: RELATIONALOPTIONS,
      qf: RelationalQuestionFactory,
      timer: RelationalConstants.DEFAULTTIMEROPTION,
      compound: RelationalConstants.DEFAULTCOMPOUNDSOPTION,
      maxtime: RelationalConstants.MAXTIME,
      addtime: RelationalConstants.ADDTIME,
    };
  }

  handleOptions = (options, id, checked) => {
    console.log("options have changed", options, id, checked);
    // timer and label options are handled here.
    // other options are used by the question factory
    switch (id) {
      case RelationalConstants.TIMEROPTIONID:
        let timer = checked;
        this.setState({ timer, options });
        return;
      case RelationalConstants.COMPOUNDOPTIONID:
        let compound = checked;
        this.setState({ compound, options });
        return;
      default:
        break;
    }
    this.setState({ options });
  };

  render() {
    //console.log("disRelational game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={RelationalConstants.RELATIONALGAMETITLE}
          options={this.state.options}
          handleOptions={this.handleOptions}
          timer={this.state.timer}
          labels={true}
          compound={this.state.compound}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
      </div>
    );
  }
}

export default RelationalGameEngine;
