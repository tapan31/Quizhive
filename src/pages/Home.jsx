import Loader from "../components/Loader";
import StartScreen from "../components/StartScreen";
import { useQuizContext } from "../contexts/QuizContext";

export default function Home() {
  const { status } = useQuizContext();

  return status === "loading" ? <Loader /> : <StartScreen />;
}
