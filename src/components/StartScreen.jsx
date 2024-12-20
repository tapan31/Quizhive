import QuizForm from "./QuizForm";

export default function StartScreen() {
  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-semibold italic text-[#fea805]">
        <span className="text-nowrap">Buzz into Knowledge,</span>{" "}
        <span className="text-nowrap">One Quiz at a Time!</span>
      </h1>
      <QuizForm />
    </div>
  );
}
