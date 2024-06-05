/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-premium': '#D1C1A4',
        'custom-db': '#170800',
        'custom-lb': '#774931',
        'custom-bg': '#DEDEDE',
      },
      fontFamily: {
        'silverqueen': ['"Silver Queen"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}