/* eslint-disable react/prop-types */

export default function HistoryCard({ quiz }) {
  const mins = Math.floor(quiz.timeTaken / 60);
  const secs = quiz.timeTaken % 60;

  return (
    <div className="flex w-full max-w-full flex-col justify-center gap-1 rounded-lg border border-secondary bg-light-neutral p-3 text-light-text shadow-md md:w-[13rem] dark:bg-dark-neutral dark:text-dark-text dark:shadow-dark-neutral">
      <h3 className="mb-2 border-b-2 border-b-secondary text-center text-xl font-semibold">
        {quiz.username}
      </h3>
      <p>
        Number of Questions:{" "}
        <span className="font-semibold">{quiz.numQuestions}</span>
      </p>
      <p>
        Score: <span className="font-semibold">{quiz.scorePercentage}%</span>
      </p>
      <p>
        Time Taken:{" "}
        <span className="font-semibold tracking-wide">
          {mins > 0 && `${mins}min`} {secs > 0 && `${secs}sec`}
        </span>
      </p>
      <p className="text-xs font-medium">{quiz.timeStamp}</p>
    </div>
  );
}
