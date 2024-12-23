import { useQuizContext } from "../contexts/QuizContext";
import { decodeHtmlEntities } from "../utils/helpers";
import OptionButton from "./OptionButton";

const shuffleOptions = (options) => {
  options.sort(() => Math.random() - 0.5);
  return options;
};

export default function Options() {
  const { questions, index, answers, dispatch } = useQuizContext();

  // Get the question type, correct and incorrect answers
  const type = questions[index].type;
  const correctAnswer = questions[index].correct_answer;
  const incorrectAnswers = questions[index].incorrect_answers;

  let options = [];

  // Randomly sort the options so that correct and incorrect answers have different positions for each question
  if (type === "multiple") {
    options = [correctAnswer, ...incorrectAnswers];
    // if (answers[index]) {
    //   options = shuffleOptions(options);
    // }
  } else {
    options = ["True", "False"];
  }

  function handleClick(chosenOption) {
    if (answers[index]) return;
    console.log("Option Button Clicked: ", chosenOption);

    dispatch({ type: "newAnswer", payload: chosenOption });
  }

  return (
    <div className="flex flex-col gap-3" key={index}>
      {/* <OptionButton>Nicotine</OptionButton>
      <OptionButton>Cathinone</OptionButton>
      <OptionButton>Ephedrine</OptionButton>
      <OptionButton>Glaucine</OptionButton> */}

      {options.map((option, index) => (
        <OptionButton onClick={() => handleClick(option)} key={index}>
          {option}
        </OptionButton>
      ))}
    </div>
  );
}
