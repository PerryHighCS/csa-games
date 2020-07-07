import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const buttonColors = [
  "btn-primary", // unselected=false
  // "btn-info",
  "btn-primary", // unselected-true
  "btn-success", // selected-true
  "btn-danger", // selected-false
  "btn-warning", // partially-correct
];

class GridButton extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { row: this.props.row, col: this.props.col };
  }

  getButtonClasses() {
    const buttonClasses = "btn btn-sm m-2 ";
    //console.log(buttonClasses + buttonColors[this.props.value]);
    return buttonClasses + buttonColors[this.props.value];
  }

  buttonClicked() {
    const { row, col } = this.state;
    console.log("button clicked: props ", this.props);
    this.props.onClick(row, col);
  }

  displayButton() {
    if (this.props.display) {
      return this.props.displayValue;
    } else {
      return "*";
    }
  }

  render() {
    //console.log("rendering gridbutton");
    return (
      <button
        key={this.props.id}
        disabled={this.props.disabled}
        className={this.getButtonClasses()}
        /* className={"btn btn-sm m-2 btn-primary"} */
        onClick={() => this.buttonClicked()}
      >
        {this.displayButton()}
      </button>
    );
  }
}

export default GridButton;
