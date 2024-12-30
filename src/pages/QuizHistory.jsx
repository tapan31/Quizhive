import { useState } from "react";
import Button from "../components/Button";
import HistoryCard from "../components/HistoryCard";
import { useQuizContext } from "../contexts/QuizContext";
import { Link } from "react-router-dom";

export default function QuizHistory() {
  const { quizHistory } = useQuizContext();

  const [sortBy, setSortBy] = useState("default");

  let sortedHistory = [];

  if (sortBy === "score") {
    sortedHistory = quizHistory
      .slice()
      .sort((a, b) => b.scorePercentage - a.scorePercentage);
  } else if (sortBy === "questions") {
    sortedHistory = quizHistory
      .slice()
      .sort((a, b) => b.numQuestions - a.numQuestions);
  } else if (sortBy === "time") {
    sortedHistory = quizHistory
      .slice()
      .sort((a, b) => b.timeTaken - a.timeTaken);
  } else {
    sortedHistory = quizHistory;
  }

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  if (quizHistory?.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="text-center text-lg font-medium text-secondary md:text-2xl">
          No quizzes taken yet.{" "}
          <span className="text-nowrap"> Start your first quiz now!</span>
        </p>
        <Link
          className="rounded-full bg-primary p-2 px-4 font-medium text-light-neutral"
          to="/"
        >
          Start Now
        </Link>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-3 flex justify-start">
        <Button type="back"> Back</Button>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-light-text md:text-3xl dark:text-dark-text">
          Quiz History ({quizHistory.length})
        </h2>
        <Button type="clearHistory">Clear All</Button>
      </div>

      {/* Sort Order Menu */}
      <div className="mt-5 flex flex-col items-center justify-between gap-2 md:flex-row md:justify-end md:gap-4">
        <label
          htmlFor="sort"
          className="text-lg font-medium text-light-text md:text-xl dark:text-dark-text"
        >
          Sort By
        </label>
        <select
          name="sort"
          id="sort"
          className="w-full rounded-full border border-primary bg-light-neutral px-4 py-2 text-light-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary md:w-44 dark:bg-dark-neutral dark:text-dark-text"
          value={sortBy}
          onChange={(e) => handleChange(e)}
        >
          <option value="default">Default</option>
          <option value="score">Score</option>
          <option value="questions">Number of Questions</option>
          <option value="time">Time Taken</option>
        </select>
      </div>

      <ul className="mt-10 flex flex-col flex-wrap items-center justify-start gap-4 md:flex-row md:gap-7">
        {sortedHistory.map((quiz) => (
          <HistoryCard key={quiz.id} quiz={quiz} />
        ))}
      </ul>
    </section>
  );
}
