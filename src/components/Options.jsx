import { useEffect, useState } from "react";
import { useQuizContext } from "../contexts/QuizContext";
import OptionButton from "./OptionButton";

export default function Options() {
  const { questions, index, answers, dispatch } = useQuizContext();

  // Get the current question
  const currentQuestion = questions[index];

  // let options = [];

  // if (type === "multiple") {
  //   options = [correctAnswer, ...incorrectAnswers];
  // } else {
  //   options = ["True", "False"];
  // }

  /* const [options, setOptions] = useState([]);

  useEffect(() => {
    // Randomly sort the options so that correct and incorrect answers have different positions for each question
    // Check if the question has already been answered
    if (answers[index]) {
      // If answered, use the existing options
      setOptions(answers[index].options);
    } else {
      // If not answered, shuffle options for the current question
      let initialOptions;
      if (type === "multiple") {
        initialOptions = shuffleOptions([correctAnswer, ...incorrectAnswers]);
      } else {
        initialOptions = ["True", "False"];
      }
      setOptions(initialOptions);
    }
  }, [answers, index, correctAnswer, incorrectAnswers, type]); */

  function handleClick(chosenOption) {
    if (answers[index]) return;
    console.log("Option Button Clicked: ", chosenOption);

    dispatch({
      type: "newAnswer",
      payload: chosenOption,
    });
  }

  return (
    <div className="flex flex-col gap-3" key={index}>
      {currentQuestion.options.map((option, index) => (
        <OptionButton onClick={() => handleClick(option)} key={index}>
          {option}
        </OptionButton>
      ))}
    </div>
  );
}
