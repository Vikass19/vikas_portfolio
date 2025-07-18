/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        yellow: '#FFEA00',
        black: '#000000',
        graytext: '#666666',
        mshadow: '#ffffff'
      },
      boxShadow: {
        gray: '0 0 10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite', // custom slow spin
      },
    },
  },
  plugins: [],
}
