import * as LoopConstants from "./loopconstants";
import loopQuestion1 from "./loopquestion1";
import loopQuestion1b from "./loopquestion1b";
import loopQuestionNested from "./loopquestionnested";

export class LoopQuestionFactory {
  constructor(options) {
    if (options) {
      this.options = [...options];
      // console.log("qf constructor", this.options);
      this.backwards = false;
      this.nested = false;
      for (let option of options) {
        // console.log("for option:", option.id, option.checked);
        if (option.id === LoopConstants.BACKWARDSOPTIONID) {
          this.backwards = option.checked;
          // console.log("changing backwards option to ", this.backwards);
        }
        if (option.id === LoopConstants.NESTEDOPTIONID) {
          this.nested = option.checked;
          // console.log("changing 2D option to ", this.nested);
        }
      }
    } else {
      // mixed game
      this.backwards = true;
      this.nested = true;
    }
  }

  getQuestion(props) {
    //console.log("getquestion props", props);

    console.log("getQuestion backwards nested", this.backwards, this.nested);

    let questionTypes = [loopQuestion1];

    // add backwards?
    if (this.backwards) {
      questionTypes.push(loopQuestion1b);
      questionTypes.push(loopQuestion1b);
    }

    // add nested

    if (this.nested) {
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
      questionTypes.push(loopQuestionNested);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);
    //console.log("creating question in factory", question);
    //const question = new loopQuestion1(props);
    //const question = new loopQuestion1b(props);
    //const question = new loopQuestionNested(props);

    //console.log("getQuestion", question);
    return question;
  }
}
