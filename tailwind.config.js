/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        // TODO: refactor to em units
        wider: "1px",
        widest: "4px",
      },
      colors: {
        pink: {
          400: "#ff4b94",
        },
        gray: {
          200: "#e6e6e6",
        },
        "purple-blue": "#5643F2CC",
      },
    },
  },
  plugins: [],
};
