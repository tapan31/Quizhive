/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        background: "#fbf0e2", // soft beige
        primary: "#fea805", // vibrant orange, for buttons and highlights
        text: "#1A202C", // dark gray
        secondary: "#ff9f1c", // lighter orange, for hover effects or secondary buttons
        neutral: "#ffffff", // pure white, for sections or card backgrounds
        success: "#35BD3A",
        error: "#FF7A7A",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
