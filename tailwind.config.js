/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffdf0',
          100: '#fffbe0',
          200: '#fff5b5',
          300: '#ffe975',
          400: '#ffd43b',
          500: '#D4A017',
          600: '#c08010',
          700: '#a0660c',
          800: '#7a4c09',
          900: '#5a3507',
        },
        beige: {
          50:  '#fdfaf5',
          100: '#faf4ea',
          200: '#f5e8d0',
          300: '#eed6ae',
          400: '#e4be85',
          500: '#d4a45e',
        },
        cream: '#FFF8F0',
        blush: '#F9E8E8',
        darkBg: '#0a0a0a',
        charcoal: '#1a1a1a',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Inter"', '"Helvetica Neue"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4A017 0%, #f5d373 50%, #D4A017 100%)',
      },
      animation: {
        'fade-up':     'fadeUp 0.8s ease forwards',
        'fade-in':     'fadeIn 1s ease forwards',
        'scroll-down': 'scrollDown 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};

