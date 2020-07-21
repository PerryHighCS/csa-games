import React from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import ArrayGameEngine from "./arraycomponents/ArrayGameEngine";
import StringGameEngine from "./stringcomponents/StringGameEngine";
import * as AppConstants from "./util/appconstants";
import RelationalGameEngine from "./relationalcomponents/RelationalGameDesign";
import BooleanGameEngine from "./booleancomponents/BooleanGameEngine";
import MixedGameEngine from "./mixedcomponents/MixedGameEngine";
import LoopGameEngine from "./loopcomponents/LoopGameEngine";
// eslint-disable-next-line
class App extends React.Component {
  constructor(props) {
    super(props);

    this.gameEngines = [
      <LoopGameEngine />,
      <StringGameEngine />,
      <BooleanGameEngine />,
      <RelationalGameEngine />,
      <ArrayGameEngine />,
      <MixedGameEngine />,
    ];
    this.state = {
      currentGame: this.gameEngines[AppConstants.DEFAULTGAMEINDEX],
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    this.setState({ currentGame: this.gameEngines[e.target.id] });
    //console.log("button clicked", this.gameEngines[e.target.id]);
  }

  render() {
    return (
      <div className="Outer">
        <div className="App">
          <nav className="navbar navbar-nav navbar-dark bg-primary m-1">
            <h2>
              <i>{AppConstants.APPTITLE}</i>
            </h2>
            <div>
              <button
                autoFocus
                onClick={this.handleButton}
                id={AppConstants.LOOPGAMEINDEX}
                className="btn btn-sm btn-primary m-1"
              >
                Loops
              </button>
              <button
                onClick={this.handleButton}
                id={AppConstants.STRINGGAMEINDEX}
                className="btn btn-sm btn-primary m-1"
              >
                Strings
              </button>
              <button
                onClick={this.handleButton}
                id={AppConstants.BOOLEANGAMEINDEX}
                className="btn btn-sm btn-primary m-1"
              >
                Boolean
              </button>
              <button
                onClick={this.handleButton}
                id={AppConstants.RELATIONALGAMEINDEX}
                className="btn btn-sm btn-primary m-1"
              >
                Relational
              </button>
              <button
                id={AppConstants.ARRAYGAMEINDEX}
                onClick={this.handleButton}
                className="btn btn-sm btn-primary m-1"
              >
                Arrays
              </button>
              <button
                onClick={this.handleButton}
                id={AppConstants.MIXEDGAMEINDEX}
                className="btn btn-sm btn-primary m-1"
              >
                Mixed
              </button>
            </div>
          </nav>

          {this.state.currentGame}

          <footer className="page-footer font-small blue pt-4">
            <div className="footer-copyright text-center py-3">
              {AppConstants.DISCLAIMER}
              <a href="https://sites.google.com/view/codinggames/home">
                click here for more games
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
