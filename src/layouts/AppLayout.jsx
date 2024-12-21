import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full p-5 sm:max-w-[75%] md:max-w-[65%] md:px-7 md:py-6 xl:max-w-[50%]">
        <Outlet />
      </main>
    </>
  );
}
