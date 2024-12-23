/* eslint-disable react/prop-types */

import { useQuizContext } from "../contexts/QuizContext";

export default function ResultHeading() {
  const { score, maxPossibleScore } = useQuizContext();

  const scorePercentage = Math.round((score / maxPossibleScore) * 100);

  const feedbackMessage =
    score >= 80
      ? "Excellent! 🎉 Keep up the great work!"
      : score >= 50
        ? "Good job! 👍 You can do even better."
        : "Keep trying! 🌟 Practice makes perfect.";

  return (
    <div>
      <h2
        style={{ fontFamily: "DynaPuff, serif" }}
        className="rounded-full p-2 text-center text-xl font-medium text-secondary sm:text-2xl md:text-3xl"
      >
        {feedbackMessage}
      </h2>

      <h3
        style={{ fontFamily: "DynaPuff, serif" }}
        className="mb-3 rounded-md p-2 text-center text-lg font-medium text-text md:text-xl"
      >
        You Scored{" "}
        <span className="font-bold tracking-wider text-primary">{score}</span>{" "}
        out of {maxPossibleScore} (
        <span className="font-bold text-primary">{scorePercentage}%</span>)
      </h3>
    </div>
  );
}
