export default function ScoreCard() {
  return (
    <div className="rounded-md border border-primary bg-neutral p-4 text-text shadow-md sm:w-1/2 lg:py-6">
      <h4 className="mb-3 text-center text-xl font-medium text-primary md:text-2xl">
        Performance Details
      </h4>
      <ul className="space-y-1">
        <li className="font-medium">
          Corect Answers: <span className="font-bold text-success">10</span>
        </li>
        <li className="font-medium">
          Incorrect Answers: <span className="font-bold text-error">5</span>
        </li>
        <li className="font-medium">
          Time Taken: <span className="font-bold">5:47</span>
        </li>
        <li className="font-medium">
          Accuracy: <span className="font-bold">50%</span>
        </li>
      </ul>
    </div>
  );
}
