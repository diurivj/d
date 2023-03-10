/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'brutalism-sm': '2px 2px 0px #000000',
        'brutalism-md': '4px 4px 0px #000000',
        'brutalism-lg': '8px 8px 0px #000000',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
