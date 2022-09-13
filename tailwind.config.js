/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f3f77",
        secondary: "#f58820",
      },
      backgroundImage: {
        regImg: "url('/src/images/team1.png')",
      },
    },
  },
  plugins: [],
};
