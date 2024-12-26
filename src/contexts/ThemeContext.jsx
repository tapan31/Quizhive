/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // Initialize state based on the current class on html element
  const [isDark, setIsDark] = useState(() => {
    // This runs only once during initialization
    const root = document.documentElement;
    return root.classList.contains("dark");
  });

  /* useEffect(() => {
    const root = document.documentElement; // Get the <html> element

    // Get System Preference
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Get saved theme
    const savedTheme = JSON.parse(localStorage.getItem("theme"));

    // If saved theme exists then set dark mode using that otherwise use the system preference of the user
    if (savedTheme) {
      setIsDark(savedTheme.darkMode);
      savedTheme.darkMode && root.classList.add("dark");
    } else {
      setIsDark(userPrefersDark);
      userPrefersDark && root.classList.add("dark");
    }
  }, []); */

  // This effect now only handles system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Only update if there's no saved preference
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    const root = document.documentElement;

    setIsDark(!isDark);
    localStorage.setItem("theme", JSON.stringify({ darkMode: !isDark }));
    root.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useThemeContext was used outside of ThemeProvider");

  return context;
}
