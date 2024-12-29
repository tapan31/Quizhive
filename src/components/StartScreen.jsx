import { Link } from "react-router-dom";
import { useQuizContext } from "../contexts/QuizContext";
import QuizForm from "./QuizForm";
import QuizHistoryButton from "./QuizHistoryButton";

export default function StartScreen() {
  const { status, errorMessage } = useQuizContext();

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-semibold italic text-primary">
        <span className="text-nowrap">Buzz into Knowledge,</span>{" "}
        <span className="text-nowrap">One Quiz at a Time!</span>
      </h1>

      {status === "error" && (
        <p className="bg-neutral mb-4 rounded-full border-2 border-error p-3 text-center font-semibold leading-5 text-error focus:ring-1 focus:ring-error focus:ring-offset-2 md:text-lg">
          {errorMessage}
        </p>
      )}

      <QuizForm />

      {/* Quiz History Page Button */}
      <QuizHistoryButton />
    </div>
  );
}
