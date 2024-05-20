/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['Rethink Sans', 'sans-serif'],
      wix: ['Wix Madefor Display', 'sans-serif'],
      albert: ['Albert Sans', 'sans-serif'],
      jersey15: ['"Jersey 15"', 'sans-serif'],
      marcellus: ['Marcellus', 'serif'],
      alegreya: ['Alegreya Sans', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif']
    }
  },
  plugins: [],
}

