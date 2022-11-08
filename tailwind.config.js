/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        lightShadow: " -3px -3px 7px #ffffff, 3px 3px 5px #ceced1",
        darkShadow: " 3px 3px 5px #1b1a1a, -3px -3px 5px #2b2b2b",
        insetShadow: "inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1",
        darkInsetShadow:
          "inset -3px -3px 7px #393939, inset 3px 3px 5px #181818",
      },
    },
  },
  plugins: [],
};
