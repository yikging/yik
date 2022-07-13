/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    rotate: {
      '0': '0',
      '1': '45deg',
      '2': '90deg',
      '3': '135deg',
      '4': '180deg',
      '5': '225deg',
      '6': '270deg',
      '7': '315deg',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '225': '225deg',
      '270': '270deg',
      '315': '315deg',
    },
  },
  plugins: [],
}
