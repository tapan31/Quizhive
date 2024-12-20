/* export default function QuizForm() {
  return (
    <form className="flex flex-col gap-7">
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-[#fea805] sm:text-xl"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="w-1/2 rounded-2xl border-[#fea805] px-2 py-1 outline-none focus:border-[#fea805] focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-[#fea805] sm:p-2"
          type="text"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-[#fea805] sm:text-xl"
          htmlFor="questions"
        >
          Number of Questions
        </label>
        <input
          type="text"
          className="w-1/2 rounded-2xl border-[#fea805] px-2 py-1 outline-none focus:border-[#fea805] focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-[#fea805] sm:p-2"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-[#fea805] sm:text-xl"
          htmlFor="category"
        >
          Category
        </label>
        <select
          name=""
          id=""
          className="w-1/2 rounded-2xl border-[#fea805] px-2 py-1 outline-none focus:border-[#fea805] focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-[#fea805] sm:p-2"
        >
          <option value="science">Science</option>
          <option value="science">History</option>
          <option value="science">Art</option>
        </select>
      </div>
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-[#fea805] sm:text-xl"
          htmlFor="difficulty"
        >
          Difficulty
        </label>
        <select
          name=""
          id=""
          className="w-1/2 rounded-2xl border-[#fea805] px-2 py-1 outline-none focus:border-[#fea805] focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-[#fea805] sm:p-2"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="mt-3 w-full rounded-full bg-[#fea805] p-2 text-xl font-bold text-[#fbf0e2] hover:shadow-[0_2px_5px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-1 focus:ring-[#fea805] focus:ring-offset-1">
        Start Quiz
      </button>
    </form>
  );
}
 */

export default function QuizForm() {
  return (
    <form className="bg-background flex flex-col gap-7 rounded-xl p-5 shadow-md">
      {/* Username Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="text-primary w-1/2 text-lg font-semibold sm:text-xl"
          htmlFor="username"
        >
          Username
        </label>
        <input
          id="username"
          className="border-primary text-text focus:border-primary focus:ring-primary w-1/2 rounded-2xl px-2 py-1 outline-none focus:outline-1 focus:ring-1 focus:ring-inset sm:p-2"
          type="text"
          placeholder="Enter username"
        />
      </div>

      {/* Number of Questions Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="text-primary w-1/2 text-lg font-semibold sm:text-xl"
          htmlFor="questions"
        >
          Number of Questions
        </label>
        <input
          id="questions"
          className="border-primary text-text focus:border-primary focus:ring-primary w-1/2 rounded-2xl px-2 py-1 outline-none focus:outline-1 focus:ring-1 focus:ring-inset sm:p-2"
          type="text"
          placeholder="Enter number"
        />
      </div>

      {/* Category Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="text-primary w-1/2 text-lg font-semibold sm:text-xl"
          htmlFor="category"
        >
          Category
        </label>
        <select
          id="category"
          className="border-primary text-text focus:border-primary focus:ring-primary w-1/2 rounded-2xl px-2 py-1 outline-none focus:outline-1 focus:ring-1 focus:ring-inset sm:p-2"
        >
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="art">Art</option>
        </select>
      </div>

      {/* Difficulty Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="text-primary w-1/2 text-lg font-semibold sm:text-xl"
          htmlFor="difficulty"
        >
          Difficulty
        </label>
        <select
          id="difficulty"
          className="border-primary text-text focus:border-primary focus:ring-primary w-1/2 rounded-2xl px-2 py-1 outline-none focus:outline-1 focus:ring-1 focus:ring-inset sm:p-2"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Submit Button */}
      <button className="bg-primary text-neutral hover:bg-secondary focus:ring-primary mt-3 w-full rounded-full p-2 text-xl font-bold hover:shadow-[0_2px_5px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2">
        Start Quiz
      </button>
    </form>
  );
}
