/* eslint-disable react/prop-types */
import Button from "../components/Button";
import ResultChart from "../components/ResultChart";
import ScoreCard from "../components/ScoreCard";

export default function Result({ score = 80 }) {
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
        <span className="font-bold tracking-wider text-primary">10</span> out of
        100 (<span className="font-bold text-primary">10%</span>)
      </h3>

      <div className="mt-4 flex flex-col justify-between gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <ScoreCard />
        <ResultChart />
      </div>

      <div className="mx-auto w-1/2 md:w-full">
        <Button styles="w-full mt-3 md:float-right sm:w-auto sm:text-lg sm:px-6 sm:py-2">
          Restart Quiz
        </Button>
      </div>
    </div>
  );
}
