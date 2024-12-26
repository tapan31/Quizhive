/* eslint-disable react/prop-types */

import { memo, useMemo } from "react";
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

function OptionButton({ children, onClick }) {
  const { answers, index, questions } = useQuizContext();

  const hasAnswered = answers[index] !== undefined;

  const base =
    "rounded-full text-light-text dark:text-dark-text border border-primary px-4 py-2 text-left text-lg font-[450] transition-all duration-200 ease-in-out focus:outline-none";

  const hover =
    "transition-transform duration-200 ease-in-out hover:translate-x-2 hover:shadow-md";

  const getStyles = () => {
    if (!hasAnswered) return `bg-light-neutral dark:bg-dark-neutral  ${hover}`;

    const isCorrect = children === questions[index].correct_answer;

    const isSelected = children === answers[index].value;

    if (isCorrect) {
      return `!bg-success !text-light-neutral cursor-not-allowed ${isSelected ? "translate-x-3" : ""}`;
    }

    // Since the isCorrect case is already handled earlier, reaching the isSelected condition means the button is selected but not correct. This will work without !isCorrect as well because isCorrect has been checked earlier but add the check for code readability
    if (isSelected && !isCorrect) {
      return "!bg-error !text-light-neutral cursor-not-allowed translate-x-3";
    }

    // Neither correct Nor selected
    return "cursor-not-allowed bg-light-neutral dark:bg-dark-neutral";
  };

  const styles = `${base} ${getStyles()}`;

  // Memoize the decoded content
  const decodedContent = useMemo(
    () => decodeHtmlEntities(children),
    [children],
  );

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
      {decodedContent}
    </button>
  );
}

export default memo(OptionButton);
