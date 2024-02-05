/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clrBlack: "#000000",
        clrBlue: "#0000ee",
        clrSkyBlue: "#116dff",
        clrDarkGreen: "#1d2927",
        clrLightGreen: "#014235",
        clrWhite: "#ffffff",
        clrLightOrange: "#faf5eb",
        clrLightGray: "#e8e6e6",
      },
    },
  },
  plugins: [],
};
