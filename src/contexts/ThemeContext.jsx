/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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
