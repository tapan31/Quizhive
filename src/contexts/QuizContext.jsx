/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  CATEGORY_URL,
  DATE_OPTIONS,
  POINTS_PER_QUESTION,
  SECONDS_PER_QUESTION,
} from "../utils/constants";

const QuizContext = createContext();

const initialState = {
  username: null,
  questions: [],
  score: 0,
  status: "idle", // idle, loading, error, active, finished
  index: 0,
  errorMessage: null,
  answers: [],
  secondsRemaining: null,
  categories: [],
  quizHistory: JSON.parse(localStorage.getItem("quizHistory")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchQuestions":
      return {
        ...state,
        status: "loading",
      };

    case "fetchCategories": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "categoriesReceived":
      return {
        ...state,
        status: "idle",
        categories: action.payload,
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
        errorMessage: action.payload,
      };

    case "start":
      return {
        ...state,
        username: action.payload.username,
        status: "active",
        questions: action.payload.shuffledQuestions,
        errorMessage: null,
        secondsRemaining:
          action.payload.shuffledQuestions.length * SECONDS_PER_QUESTION,
      };

    case "newAnswer": {
      const question = state.questions.at(state.index);
      const isCorrect = question.correct_answer === action.payload;

      const score = isCorrect ? state.score + POINTS_PER_QUESTION : state.score;

      const answer = {
        value: action.payload,
        isCorrect,
      };

      return {
        ...state,
        score,
        answers: [...state.answers, answer],
      };
    }

    case "nextQuestion": {
      const isLastQuestion = state.index === state.questions.length - 1;
      return {
        ...state,
        index: isLastQuestion ? state.index : state.index + 1,
      };
    }

    case "prevQuestion": {
      const isFirstQuestion = state.index === 0;
      return {
        ...state,
        index: isFirstQuestion ? state.index : state.index - 1,
      };
    }

    case "finish": {
      // console.log("Finishing quiz, previous status:", state.status);
      const timeTaken =
        state.questions.length * SECONDS_PER_QUESTION - state.secondsRemaining;

      const scorePercentage = Math.round(
        (state.score / (state.questions.length * POINTS_PER_QUESTION)) * 100,
      );

      const userData = {
        id: crypto.randomUUID(),
        username: state.username,
        numQuestions: state.questions.length,
        scorePercentage,
        timeStamp: new Date().toLocaleString("en-US", DATE_OPTIONS),
        timeTaken,
      };

      const newHistory = [...state.quizHistory, userData];

      try {
        localStorage.setItem("quizHistory", JSON.stringify(newHistory));
      } catch (error) {
        console.log("Local Storage full!!!, ", error.message);
      }

      return {
        ...state,
        status: "finished",
        quizHistory: newHistory,
      };
    }

    case "updateTimer": {
      // Don't update if already at 0 or finished
      if (state.status === "finished" || state.secondsRemaining <= 0)
        return state;

      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };
    }

    case "restart": {
      return {
        ...initialState,
        categories: state.categories,
        quizHistory: state.quizHistory,
      };
    }

    case "clearHistory": {
      localStorage.removeItem("quizHistory");

      return {
        ...state,
        quizHistory: [],
      };
    }

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// Fetching categories on initialRender
export default function QuizProvider({ children }) {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        dispatch({ type: "fetchCategories" });

        const res = await fetch(CATEGORY_URL);
        const data = await res.json();

        dispatch({
          type: "categoriesReceived",
          payload: data.trivia_categories,
        });
      } catch (error) {
        console.log("Error fetching categories: ", error.message);
      }
    };

    fetchCategories();
  }, []);

  const [
    {
      username,
      questions,
      score,
      status,
      errorMessage,
      index,
      answers,
      secondsRemaining,
      categories,
      quizHistory,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossibleScore = numQuestions * POINTS_PER_QUESTION;

  return (
    <QuizContext.Provider
      value={{
        username,
        questions,
        score,
        status,
        errorMessage,
        index,
        answers,
        numQuestions,
        maxPossibleScore,
        secondsRemaining,
        categories,
        quizHistory,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("useQuizContext was used outside of the Quiz Context");

  return context;
}
