/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#EE1515',
        },
      },
      fontFamily: {
        primary: ["'Press Start 2P'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
