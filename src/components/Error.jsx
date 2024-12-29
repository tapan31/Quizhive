import { useRouteError } from "react-router-dom";
import Button from "./Button";

export default function Error() {
  const errorObj = useRouteError();

  // console.log(errorObj);

  return (
    <div className="flex h-screen flex-col items-center gap-3 p-5 md:justify-center">
      <h1 className="my-4 text-center text-2xl font-bold text-primary md:text-4xl">
        <span>Oops! Something went wrong.</span>{" "}
        <span className="text-nowrap"> Let&apos;s try again!</span>
      </h1>
      <p className="text-center text-lg font-medium text-error md:text-xl">
        Error:{" "}
        {errorObj?.data || errorObj?.error?.message || errorObj.toString()}
      </p>
      <Button type="error">Go Home</Button>
    </div>
  );
}
