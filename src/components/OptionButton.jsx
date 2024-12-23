/* eslint-disable react/prop-types */

import { useQuizContext } from "../contexts/QuizContext";
import { decodeHtmlEntities } from "../utils/helpers";

/* 
  Logic Explanation
  - The hasAnswered flag checks if the user has answered the current question by verifying if answers[index] is defined.
  - If the button corresponds to the correct answer, it is styled with bg-success.
  - If the button corresponds to the user's selected answer and it's incorrect, it is styled with bg-error.
  - disabled={hasAnswered} prevents the user from clicking the button once they have answered.
  - getStyles() function is used for simplifying the styles logic.
*/

export default function OptionButton({ children, onClick }) {
  const { answers, index, questions } = useQuizContext();

  const hasAnswered = answers[index] !== undefined;

  const base =
    "rounded-full border bg-neutral border-primary px-4 py-2 text-left text-lg font-normal focus:border-none focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2";

  const hover =
    "duration-200 ease-in-out hover:translate-x-2 hover:shadow-md transition-transform";

  const getStyles = () => {
    if (!hasAnswered) return hover;

    const isCorrect = children === questions[index].correct_answer;

    const isSelected = children === answers[index].value;

    if (isCorrect) {
      return `bg-success cursor-not-allowed ${isSelected ? "translate-x-3" : ""}`;
    }

    if (isSelected) {
      return "!bg-error cursor-not-allowed translate-x-3";
    }

    return "cursor-not-allowed";
  };

  const styles = `${base} ${getStyles()}`;

  // console.log("Button Props:", { children, hasAnswered });
  // console.log("Correct Answer:", questions[index].correct_answer);
  // console.log("User Answer:", answers[index]);
  // console.log("Final Styles:", styles);

  /* if (hasAnswered) {
    console.log("Answer: ", answers[index]);
    console.log("Correct Answer: ", questions[index].correct_answer);

    styles = "cursor-not-allowed ";

    styles +=
      children === questions[index].correct_answer
        ? "bg-success"
        : children === answers[index]
          ? "bg-error"
          : "";
  } */

  return (
    <button onClick={onClick} disabled={hasAnswered} className={styles}>
      {decodeHtmlEntities(children)}
    </button>
  );
}
