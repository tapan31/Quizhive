/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../contexts/QuizContext";

export default function Button({ children, styles = "", type }) {
  const { dispatch } = useQuizContext();
  const navigate = useNavigate();

  function handleClick() {
    if (type === "prev") {
      dispatch({ type: "prevQuestion" });
    } else if (type === "next") {
      dispatch({ type: "nextQuestion" });
    } else if (type === "finish") {
      dispatch({ type: "finish" });
      navigate("/result", { replace: true });
    } else if (type === "restart") {
      dispatch({ type: "restart" });
      navigate("/", { replace: true });
    } else if (type === "error") {
      navigate("/", { replace: true });
    } else if (type === "clearHistory") {
      dispatch({ type: "clearHistory" });
    } else if (type === "back") {
      navigate(-1);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-full bg-primary px-5 py-2 font-medium text-light-neutral hover:bg-secondary ${type === "prev" ? "float-left" : "float-right"} ${styles}`}
    >
      {children}
    </button>
  );
}
