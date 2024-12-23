/* eslint-disable react/prop-types */
import { useQuizContext } from "../contexts/QuizContext";
import { SECONDS_PER_QUESTION } from "../utils/constants";

export default function ScoreCard({ correctAnsCount, incorrectAnsCount }) {
  const { numQuestions, secondsRemaining } = useQuizContext();

  const totalTime = numQuestions * SECONDS_PER_QUESTION;
  const timeTaken = totalTime - secondsRemaining;
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;

  return (
    <div className="rounded-md border border-primary bg-neutral p-4 text-text shadow-md sm:w-1/2 lg:py-6">
      <h4 className="mb-3 text-center text-xl font-medium text-primary md:text-2xl">
        Performance Details
      </h4>
      <ul className="space-y-1">
        <li className="font-medium">
          Corect Answers:{" "}
          <span className="font-bold text-success">{correctAnsCount}</span>
        </li>
        <li className="font-medium">
          Incorrect Answers:{" "}
          <span className="font-bold text-error">{incorrectAnsCount}</span>
        </li>
        <li className="font-medium">
          Time Taken:{" "}
          <span className="text-nowrap font-bold tracking-wide">
            {mins > 0 && `${mins}min`} {secs > 0 && `${secs}sec`}
          </span>
        </li>
        <li className="font-medium">
          Accuracy:{" "}
          <span className="font-bold">
            {Math.round((correctAnsCount / numQuestions) * 100)}%
          </span>
        </li>
      </ul>
    </div>
  );
}
