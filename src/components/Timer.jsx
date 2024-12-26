import { useEffect } from "react";
import { useQuizContext } from "../contexts/QuizContext";

export default function Timer() {
  const { secondsRemaining, dispatch, status } = useQuizContext();

  useEffect(() => {
    if (status === "finished") return;

    if (secondsRemaining === 0) {
      dispatch({ type: "finish" });
      return;
    }

    const intervalId = setInterval(() => {
      if (secondsRemaining > 0) dispatch({ type: "updateTimer" });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch, secondsRemaining, status]);

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  /* 
    The tabular-nums class from Tailwind is specifically designed for this use case - it ensures all numbers have the same width to prevent layout shifts in timers, counters, etc.
  */

  return (
    <div className="flex justify-end">
      <span className="text-light-neutral w-24 rounded-3xl bg-primary px-5 py-3 text-center font-medium tabular-nums tracking-wide">
        {mins < 10 && "0"}
        {mins}:{secs < 10 && "0"}
        {secs}
      </span>
    </div>
  );
}
