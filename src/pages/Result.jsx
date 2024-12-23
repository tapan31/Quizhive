/* eslint-disable react/prop-types */
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ResultChart from "../components/ResultChart";
import ResultHeading from "../components/ResultHeading";
import ScoreCard from "../components/ScoreCard";
import { useQuizContext } from "../contexts/QuizContext";
import { useEffect } from "react";

export default function Result() {
  const { answers, status, secondsRemaining } = useQuizContext();
  const navigate = useNavigate();

  if (status !== "finished") {
    console.log("Redirecting to home due to invalid status:", status);
    return <Navigate to="/" replace />;
  }

  const correctAnsCount = answers
    .map((answer) => Number(answer.isCorrect))
    .reduce((acc, sum) => acc + sum, 0);

  const incorrectAnsCount = answers.length - correctAnsCount;

  /* 
  useEffect(() => {
    console.log("Result page - Current status:", status);
    console.log("Result page - Seconds remaining:", secondsRemaining);

    if (status !== "finished") {
      console.log("Redirecting to home due to invalid status:", status);
      navigate("/");
    }
  }, [status, navigate, secondsRemaining]); 
  */

  return (
    <div>
      <ResultHeading />

      <div className="mt-4 flex flex-col justify-between gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <ScoreCard
          correctAnsCount={correctAnsCount}
          incorrectAnsCount={incorrectAnsCount}
        />
        <ResultChart
          correctAnsCount={correctAnsCount}
          incorrectAnsCount={incorrectAnsCount}
        />
      </div>

      <div className="flex justify-center md:justify-end">
        <Button
          type="restart"
          styles="mt-3 w-3/4 sm:w-1/2 md:w-auto sm:text-lg sm:px-6 sm:py-2"
        >
          Restart Quiz
        </Button>
      </div>
    </div>
  );
}
