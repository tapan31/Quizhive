import { useQuizContext } from "../contexts/QuizContext";
import { decodeHtmlEntities } from "../utils/helpers";

export default function Question() {
  const { questions, index } = useQuizContext();

  // Decoding the html entities used in the question
  const decodedQuestion = decodeHtmlEntities(questions[index].question);

  return (
    <h2 className="text-light-text dark:text-dark-text my-4 text-xl font-semibold">
      {/* What is the primary addictive substance found in tobacco? */}
      {/* {questions[index].question} */}
      {decodedQuestion}
    </h2>
  );
}
