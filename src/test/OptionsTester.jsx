import React, { Component } from "react";
import Options from "../components/Options";

class OptionsTester extends Component {
  state = {
    options: [
      { id: 1, label: "Timer", checked: false },
      { id: 2, label: "Labels", checked: false },
      { id: 3, label: "Loops", checked: true },
      { id: 4, label: "2D", checked: false },
    ],
  };

  handleOptions = (options, id, checked) => {
    console.log("options tester handleoptions", options, id, checked);
    this.setState({ options });
  };

  render() {
    return (
      <Options options={this.state.options} onClick={this.handleOptions} />
    );
  }
}

export default OptionsTester;
