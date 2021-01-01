import QuestionBaseClass from "../components/questionbaseclass";

function loopQuestionNested(props) {
  console.log("loop question nested");
  // question will have 1 row and 10 columns
  const lq = new QuestionBaseClass(props, 1, 8);

  lq.pointValue = 3;
  lq.rows = 1;
  // increment is 1 or 2
  let index = 0;
  do {
    let incrementOuter = Math.random() > 0.75 ? 2 : 1;
    let lowerBoundOuter = Math.floor(Math.random() * 4);
    let upperBoundOuter =
      Math.floor(Math.random() * (8 - lowerBoundOuter)) + lowerBoundOuter;

    let incrementInner = Math.random() > 0.75 ? 2 : 1;
    let lowerBoundInner = Math.floor(Math.random() * 4);
    let upperBoundInner =
      Math.floor(Math.random() * (8 - lowerBoundInner)) + lowerBoundInner;

    let equalsCharOuter = Math.random() > 0.5 ? "=" : "";
    let equalsCharInner = Math.random() > 0.5 ? "=" : "";
    // bug fix 11/26/2020 make sure loop does not run 8 times
    if (lowerBoundInner === 0 && upperBoundInner === 7) equalsCharInner = "";
    // bug fix 11/26/2020 make sure loop does not run 8 times
    if (lowerBoundOuter === 0 && upperBoundOuter === 7) equalsCharOuter = "";
    lq.text = [
      "for(int i=" +
        lowerBoundOuter +
        "; i <" +
        equalsCharOuter +
        " " +
        upperBoundOuter +
        "; i+=" +
        incrementOuter +
        ") {",
      "   for(int j=" +
        lowerBoundInner +
        "; j <" +
        equalsCharInner +
        " " +
        upperBoundInner +
        "; j+=" +
        incrementInner +
        ") {",
      '      System.out.println("Hello");',
      "   }",
      "}",
    ];
    if (equalsCharOuter === "=") {
      ++upperBoundOuter;
    }
    if (equalsCharInner === "=") {
      ++upperBoundInner;
    }

    index = 0; // reset to zero for every do/while iteration
    for (let i = lowerBoundOuter; i < upperBoundOuter; i += incrementOuter) {
      for (let j = lowerBoundInner; j < upperBoundInner; j += incrementInner) {
        ++index;
      }
    }
  } while (index > 7);

  console.log("button states, right answer", lq.buttonStates, index);
  lq.buttonStates[0][index] = 1;

  return lq;
}

export default loopQuestionNested;
