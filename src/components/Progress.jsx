import { useQuizContext } from "../contexts/QuizContext";

export default function Progress() {
  const { score, numQuestions, maxPossibleScore, index, answers } =
    useQuizContext();

  return (
    <div className="mb-4 grid w-full grid-cols-2 items-center">
      <progress
        className="col-span-2 mb-1 h-3 w-full"
        max={numQuestions}
        value={index + Number(answers[index] !== undefined)}
      ></progress>
      <p className="text-light-text dark:text-dark-text font-semibold">
        Question <span className="font-bold text-secondary">{index + 1}</span> /{" "}
        {numQuestions}
      </p>
      <p className="text-light-text dark:text-dark-text text-right font-semibold">
        Score <span className="font-bold text-secondary">{score}</span> /{" "}
        {maxPossibleScore}
      </p>
    </div>
  );
}
