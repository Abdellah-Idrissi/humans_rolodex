/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgGradient: 'linear-gradient(to left,rgba(7, 27, 82, 1) 0%,rgba(0, 128, 128, 1) 100%)'
      }
    },
  },
  plugins: [],
}
