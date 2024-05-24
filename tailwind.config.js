/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
      albert: ['Albert Sans', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}

