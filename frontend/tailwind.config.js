/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { first: "#8bc1f3", second: "#031926" },
    },
  },
  plugins: [],
};
