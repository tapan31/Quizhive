import Button from "../components/Button";
import HistoryCard from "../components/HistoryCard";
import { useQuizContext } from "../contexts/QuizContext";
import { Link } from "react-router-dom";

export default function QuizHistory() {
  const { quizHistory } = useQuizContext();

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

      <ul className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:gap-7">
        {quizHistory.map((quiz) => (
          <HistoryCard key={quiz.id} quiz={quiz} />
        ))}
      </ul>
    </section>
  );
}
