const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#121212",
        lightGreen: "#1DB954",
        lightGreenContrast: "#179d46",
        lightGreenLowOpacity: "#1DB95480",
        darkGreen: "#147536",
        grayBg: "#212121",
        proseText: "#d1d5db",
      },
      fontFamily: {
        sans: "'Exo 2', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
