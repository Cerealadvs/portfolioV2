/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'className',
  theme: {
    extend: {
      fontFamily: {
        burtons: ['burtons'],
        inter: ['inter', 'serif']
      }
    }
  },
  plugins: []
}
