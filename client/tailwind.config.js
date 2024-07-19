/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#40E0D0", // Add your preferred turquoise color code
      },
    },
  },
  plugins: [flowbite],
};
