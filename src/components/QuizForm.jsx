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

import { useEffect, useState } from "react";
import { BASE_URL, CATEGORY_URL, QUIZ_CATEGORIES } from "../utils/constants";
import { useQuizContext } from "../contexts/QuizContext";
import { useNavigate } from "react-router-dom";

// Function to add an options field in each question and shuffle them
const shuffleQuestions = (questions) => {
  const result = questions.map((question) => {
    let options = [];

    if (question.type === "multiple") {
      options = [question.correct_answer, ...question.incorrect_answers];
      options.sort(() => Math.random() - 0.5);
    } else if (question.type === "boolean") {
      options = ["True", "False"];
    }
    return {
      ...question,
      options,
    };
  });

  return result;
};

export default function QuizForm() {
  const [username, setUsername] = useState("John Doe");
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [type, setType] = useState("any");

  const { dispatch, categories } = useQuizContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Return if no username or number of questions
    if (!username || !numOfQuestions) return;

    // Create URL based on form fields
    let url = `${BASE_URL}?amount=${numOfQuestions}`;
    if (category !== "any") {
      url += `&category=${category}`;
    }
    if (difficulty !== "any") {
      url += `&difficulty=${difficulty}`;
    }
    if (type !== "any") {
      url += `&type=${type}`;
    }

    console.log("URL: ", url);

    try {
      // Set Loading State
      dispatch({ type: "fetchQuestions" });
      console.log("Fetching Data...");

      const res = await fetch(url);
      const data = await res.json();

      if (data.response_code !== 0) {
        // throw new Error("There was some error in fetching questions");
        dispatch({
          type: "dataFailed",
          // payload: "💥 There was some error in fetching questions",
          payload: "Oops! 💥 Something went wrong. Try again!",
        });
      } else {
        console.log("Received Data: ", data);

        // Add an options field in each question object and shuffle the options
        const shuffledQuestions = shuffleQuestions(data.results);

        dispatch({ type: "start", payload: shuffledQuestions });
        // Navigate to Quiz Page
        navigate("/quiz", { replace: true });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-xl border border-primary bg-neutral p-5 shadow-md md:py-7"
    >
      {/* Username Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-primary sm:text-xl"
          htmlFor="username"
        >
          Username
        </label>
        <input
          id="username"
          className="w-1/2 rounded-2xl border-primary px-2 py-1 text-text outline-none focus:border-primary focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-primary sm:p-2"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Number of Questions Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-primary sm:text-xl"
          htmlFor="questions"
        >
          Number of Questions
        </label>
        <input
          id="questions"
          className="w-1/2 rounded-2xl border-primary px-2 py-1 text-text outline-none focus:border-primary focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-primary sm:p-2"
          type="text"
          placeholder="Enter number"
          value={numOfQuestions}
          onChange={(e) => setNumOfQuestions(Number(e.target.value))}
        />
      </div>

      {/* Category Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-primary sm:text-xl"
          htmlFor="category"
        >
          Category
        </label>
        <select
          id="category"
          className="w-1/2 rounded-2xl border-primary px-2 py-1 text-text outline-none focus:border-primary focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-primary sm:p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="any">Random Category</option>
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Difficulty Field */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-primary sm:text-xl"
          htmlFor="difficulty"
        >
          Difficulty
        </label>
        <select
          id="difficulty"
          className="w-1/2 rounded-2xl border-primary px-2 py-1 text-text outline-none focus:border-primary focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-primary sm:p-2"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="any">Random Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Question Type */}
      <div className="flex items-center justify-between gap-2">
        <label
          className="w-1/2 text-lg font-semibold text-primary sm:text-xl"
          htmlFor="type"
        >
          Type
        </label>
        <select
          id="type"
          className="w-1/2 rounded-2xl border-primary px-2 py-1 text-text outline-none focus:border-primary focus:outline-1 focus:ring-1 focus:ring-inset focus:ring-primary sm:p-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="any">Random Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
      </div>

      {/* Submit Button */}
      <button className="mt-3 w-full rounded-full bg-primary p-2 text-xl font-bold text-neutral hover:bg-secondary hover:shadow-[0_2px_5px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        Start Quiz
      </button>
    </form>
  );
}
