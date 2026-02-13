/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        hachi: ['Hachi Maru Pop', 'cursive'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
  ],
  darkMode: "class",
}