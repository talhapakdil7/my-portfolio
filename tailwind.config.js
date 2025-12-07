/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#675CFF", // canlı mor
        secondary: "#00D4FF", // neon mavi
        accent: "#FF3CAC", // pembe-mor
      },
    },
  },
  plugins: [],
};
