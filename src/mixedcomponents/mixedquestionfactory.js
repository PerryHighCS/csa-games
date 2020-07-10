import { ArrayQuestionFactory } from "../arraycomponents/arrayquestionfactory";
import { BooleanQuestionFactory } from "../booleancomponents/booleanquestionfactory";
import { RelationalQuestionFactory } from "../relationalcomponents/relationalquestionfactory";
import { StringQuestionFactory } from "../stringcomponents/stringquestionfactory";

export class MixedQuestionFactory {
  constructor(options) {
    console.log("mixedquestion factory constructor");
  }

  getQuestion(props) {
    const factories = [
      ArrayQuestionFactory,
      BooleanQuestionFactory,
      RelationalQuestionFactory,
      StringQuestionFactory,
    ];
    const factory = new factories[
      Math.floor(Math.random() * factories.length)
    ]();
    console.log("factory=", factory);
    const question = factory.getQuestion(props);
    console.log("mixed question =", question);
    return question;
  }
}
