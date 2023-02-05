/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "green-primary": "#097969",
      "green-secondary": "#065550",
      "aqua-color": "#c4fffb",
      "maroon-color": "#77090e",
      "gold-color": "#eba554",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
