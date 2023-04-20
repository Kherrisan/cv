/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'LXGWWenKai', 'Sarsa', ...defaultTheme.fontFamily.sans],
      },
    }
    
  },
  plugins: [],
}

