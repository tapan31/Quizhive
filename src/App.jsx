import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import AppLayout from "./layouts/AppLayout";
import QuizProvider from "./contexts/QuizContext";
import Error from "./components/Error";
import ThemeProvider from "./contexts/ThemeContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <RouterProvider router={router} />
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;
