import { blackA } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#EE1515',
        },
        ...blackA,
      },
      keyframes: {
        'overlay-show': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'content-show': {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        'overlay-show': 'overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'content-show': 'content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        primary: ['"Press Start 2P"', 'sans-serif'],
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
