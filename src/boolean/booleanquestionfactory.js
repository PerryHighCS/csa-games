import * as RelationalConstants from "./booleanconstants";
import RelationalQuestionGreater from "./booleanquestiongreater";
import RelationalQuestionLesser from "./booleanquestionlesser";
import RelationalQuestionAnd from "./booleanquestionand";
import RelationalQuestionOr from "./booleanquestionor";
import RelationalQchallenge1 from "./booleanqchallenge1";
import RelationalQchallenge2 from "./booleanqchallenge2";
import RelationalQchallenge3 from "./booleanqchallenge3";

export class RelationalQuestionFactory {
  constructor(options) {
    this.options = [...options];
    // console.log("qf constructor", this.options);
    this.compound = false;
    for (let option of options) {
      // console.log("for option:", option.id, option.checked);
      if (option.id === RelationalConstants.COMPOUNDOPTIONID) {
        this.compound = option.checked;
        console.log("changing compound option to ", this.compound);
      }
      if (option.id === RelationalConstants.CHALLENGEOPTIONID) {
        this.challenge = option.checked;
        console.log("changing compound option to ", this.challenge);
      }
    }
  }

  getQuestion(props) {
    //console.log("getQuestion loops 2D", this.loops, this.twod);

    let questionTypes = [RelationalQuestionGreater, RelationalQuestionLesser];

    // add compound?
    if (this.compound) {
      questionTypes.push(RelationalQuestionAnd);
      questionTypes.push(RelationalQuestionAnd);
      questionTypes.push(RelationalQuestionOr);
      questionTypes.push(RelationalQuestionOr);
    }

    // add challenge
    if (this.challenge) {
      questionTypes = [];
      questionTypes.push(RelationalQchallenge1);
      questionTypes.push(RelationalQchallenge2);
      questionTypes.push(RelationalQchallenge3);
    }

    const random = Math.floor(Math.random() * questionTypes.length);
    const question = new questionTypes[random](props);
    //const question = new RelationalQuestionLesser(props);
    //const question = new relationalQuestionGreater(props);
    //const question = new RelationalQuestionAnd(props);
    //const question = new RelationalQuestionOr(props);
    //const question = new RelationalQchallenge3(props);
    //console.log("getQuestion", question);
    return question;
  }
}
