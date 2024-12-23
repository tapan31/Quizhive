/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { POINTS_PER_QUESTION, SECONDS_PER_QUESTION } from "../utils/constants";

const QuizContext = createContext();

const initialState = {
  questions: [],
  score: 0,
  status: "idle", // idle, loading, error, active, finished
  index: 0,
  errorMessage: null,
  answers: [],
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchData":
      return {
        ...state,
        status: "loading",
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
        status: "active",
        questions: action.payload,
        errorMessage: null,
        secondsRemaining: action.payload.length * SECONDS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      const isCorrect = question.correct_answer === action.payload;

      const score = isCorrect ? state.score + POINTS_PER_QUESTION : state.score;

      const answer = { value: action.payload, isCorrect };

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
    case "finish":
      console.log("Finishing quiz, previous status:", state.status);
      return {
        ...state,
        status: "finished",
        // secondsRemaining: 0, // Ensuring timer is explicitly set to 0
      };
    case "updateTimer": {
      // Don't update if already at 0 or finished
      if (state.status === "finished" || state.secondsRemaining <= 0)
        return state;

      // console.log("Updating timer:", state.secondsRemaining - 1);
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };
    }
    case "restart": {
      return initialState;
    }
    default:
      throw new Error("Unknown action type");
  }
}

export default function QuizProvider({ children }) {
  const [
    {
      questions,
      score,
      status,
      errorMessage,
      index,
      answers,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossibleScore = numQuestions * POINTS_PER_QUESTION;

  return (
    <QuizContext.Provider
      value={{
        questions,
        score,
        status,
        errorMessage,
        index,
        answers,
        numQuestions,
        maxPossibleScore,
        secondsRemaining,
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
