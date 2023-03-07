const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xmd: '900px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        acme: ['acme', 'sans-serif'],
        'signika-negative': ['Signika Negative', 'sans-serif'],
        sono: ['Sono', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
