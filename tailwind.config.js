/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#fbf0e2", // soft beige
          text: "#1A202C", // dark gray
          neutral: "#ffffff", // pure white, for sections or card backgrounds
        },
        dark: {
          background: "#1A202C", // dark slate gray, for main background
          text: "#E2E8F0", // soft white, for readable text
          neutral: "#2D3748", // dark gray, for sections or card backgrounds
        },
        primary: "#FEA805", // vibrant orange, for buttons and highlights
        secondary: "#FF9F1C", // lighter orange, for hover effects or secondary buttons
        success: "#35BD3A",
        error: "#e11d48",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
