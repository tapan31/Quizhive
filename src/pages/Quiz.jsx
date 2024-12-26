import { Navigate } from "react-router-dom";
import NavigationButton from "../components/Button";
import Options from "../components/Options";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { useQuizContext } from "../contexts/QuizContext";

export default function Quiz() {
  const { questions, status, index, answers } = useQuizContext();

  if (status !== "active" && status !== "finished") {
    // console.log("Navigate to Home");

    return <Navigate to="/" replace />;
  }

  if (status === "finished") {
    // console.log("Quiz finished, navigating to result");

    return <Navigate to="/result" replace />;
  }

  const isLastQuestion = index === questions.length - 1;

  return (
    <div className="sm:p-4">
      <Progress />
      <Timer />
      <Question />
      <Options />
      <div className="mt-5">
        {index > 0 && <NavigationButton type="prev">Prev </NavigationButton>}
        {answers[index] && (
          <NavigationButton type={isLastQuestion ? "finish" : "next"}>
            {isLastQuestion ? "Finish" : "Next"}
          </NavigationButton>
        )}
      </div>
    </div>
  );
}
