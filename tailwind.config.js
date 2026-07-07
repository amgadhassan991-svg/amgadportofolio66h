/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'system-ui'],
      },
    },
  },
  plugins: [],
}
