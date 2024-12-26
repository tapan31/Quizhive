import Logo from "../assets/quizhive-high-resolution-logo-transparent.png";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { toggleTheme } = useThemeContext();

  return (
    <header className="my-5 p-3">
      <div className="mx-auto flex w-full items-center justify-between sm:w-3/4 md:w-1/2">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-3/4 md:w-1/2" />
        <button
          onClick={toggleTheme}
          className="bg-light-neutral dark:bg-dark-neutral trans relative h-6 w-12 rounded-full border-2 border-primary shadow-sm transition-colors duration-300"
        >
          <span
            className="absolute left-1 top-[0.15rem] h-4 w-4 transform rounded-full bg-primary align-middle transition-transform duration-300 dark:translate-x-5 md:top-[3px]"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Toggle Dark Mode</span>
        </button>
      </div>
      {/* Theme Toggle Button */}
    </header>
  );
}
