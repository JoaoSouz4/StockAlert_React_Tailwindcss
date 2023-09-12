/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {opacity: 0, transform: 'translateY(-0.3rem)'},
          '50%': {opacity: 0.5},
          '100%': {opacity: 1, transfrom: 'translateY(0.3rem)'}
        },

        reverseFade: {
          '0%': {opacity: 1},
          '50%': {opacity: 0.5},
          '100%': {opacity: 0, transfrom: 'translateY(-0.3rem)'}
        }
      },
      animation: {
        'fade': 'fade 0.5s ease-in-out 1',
        'reverseFade' : 'reverseFade 0.5s ease-in-out 1'
      }
    },
    
  },
  plugins: [],
}
