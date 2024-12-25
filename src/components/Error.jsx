import { useRouteError } from "react-router-dom";
import Button from "./Button";

export default function Error() {
  const errorObj = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center gap-3 p-5 md:justify-center">
      <h1 className="my-4 text-center text-2xl font-bold text-primary md:text-4xl">
        <span>Oops! Something went wrong.</span>{" "}
        <span className="text-nowrap"> Let&apos;s try again!</span>
      </h1>
      <p className="text-lg font-medium text-error md:text-xl">
        Error: {errorObj.error.message || errorObj.data}
      </p>
      <Button type="error">Go Home</Button>
    </div>
  );
}
