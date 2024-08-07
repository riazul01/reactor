/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slower': 'spin 1s linear infinite',
        'spin-slow': 'spin 0.75s linear infinite',
        'spin-medium': 'spin 0.5s linear infinite',
        'spin-fast': 'spin 0.25s linear infinite',
        'spin-faster': 'spin 0.1s linear infinite',
      },
      backgroundImage: {
        'logo': 'linear-gradient(45deg, orangered, #4fc624)',
        'clock': 'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./assets/images/backgrounds/clock-bg.jpg)',
        'stopwatch': 'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./assets/images/backgrounds/stopwatch-bg.jpg)',
        'todo': 'linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(./assets/images/backgrounds/todo-bg.jpg)',
        'age-calc': 'linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./assets/images/backgrounds/age-calc-bg.jpg)',
        'multiplication-table': 'linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(./assets/images/backgrounds/multiplication-table-bg.jpg)',
        'body': 'radial-gradient(circle at 99% 33%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 37%,transparent 37%, transparent 100%),radial-gradient(circle at 46% 16%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 43%,transparent 43%, transparent 100%),radial-gradient(circle at 99% 25%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 57% 88%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 86%,transparent 86%, transparent 100%),radial-gradient(circle at 82% 78%, hsla(235,0%,48%,0.03) 0%, hsla(235,0%,48%,0.03) 22%,transparent 22%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))'
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      rethink: ['Rethink Sans', 'sans-serif'],
      wix: ['Wix Madefor Display', 'sans-serif'],
      jersey15: ['"Jersey 15"', 'sans-serif'],
      marcellus: ['Marcellus', 'serif'],
      alegreya: ['Alegreya Sans', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      coding: ['Nanum Gothic Coding', 'monospace'],
      raleway: ['Raleway', 'sans-serif'],
      ace: ['Bruno Ace', 'sans-serif'],
      albert: ['Albert Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      belanosima: ['Belanosima', 'sans-serif']
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0.1rem 0.1rem 0.2rem #000',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px #111'
        },
        '.text-clipped': {
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
        },
        '.toggle-bar::before': {
          transition: 'all 0.3s ease'
        },
        '.toggle-bar::after': {
          transition: 'all 0.3s ease'
        },
        '.toggle-bar.active::before': {
          transform: 'rotate(-85deg)',
          top: 0
        },
        '.toggle-bar.active::after': {
          transform: 'rotate(5deg)',
          top: 0
        },
        '.project-title:hover ~ .icon-link': {
          opacity: 1,
          visibility: 'visible',
          pointerEvents: 'auto',
        },
        '.clip-hexagon': {
          clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)',
        },
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '5px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(45deg, #4fc624, greenyellow, orange, orangered)',
            borderRadius: '2rem'
          },
          '&::-webkit-scrollbar-track': {
            background: '#111',
          },
          '&.track-darker': {
            '&::-webkit-scrollbar-track': {
              background: '#000',
            },
          },
        },
      });
    },
  ],
}
