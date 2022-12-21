/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'prussianBlue': '#2d3a52',
        'uranianBlue': '#c3e5ff',
        'aero': '#80bae6',
        'blueCrayola': '#147AFF',
        'sapphire': '#1053ab',
      }
    },
  },
  plugins: [],
}
