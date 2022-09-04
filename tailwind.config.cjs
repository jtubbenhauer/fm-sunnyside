/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    fontFamily: {
      'sans': ['Barlow', ...defaultTheme.fontFamily.sans],
      'serif': ['Fraunces', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      colors: {
        'fm-soft-red': 'hsl(7, 99%, 70%)',
        'fm-yellow': 'hsl(51, 100%, 49%)',
        'fm-desat-cyan': 'hsl(167, 40%, 24%)',
        'fm-dark-blue': 'hsl(198, 62%, 26%)',
        'fm-dark-cyan': 'hsl(168, 34%, 41%)',
        'fm-very-dark-blue': 'hsl(212, 27%, 19%)',
        'fm-very-dark-gray-blue': 'hsl(213, 9%, 39%)',
        'fm-grayish-blue': 'hsl(210, 4%, 67%)',
        'fm-white': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
