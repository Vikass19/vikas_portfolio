/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    // Fully override radius scale — brutalist look is squared-off by default.
    borderRadius: {
      none: '0px',
      full: '9999px',
    },
    extend: {
      colors: {
        ink: '#000000',       // true black — primary background
        paper: '#F3F1E9',     // off-white panels / reversed text blocks
        signature: '#F2E900', // caution-tape yellow — the one accent
        alert: '#FF4B26',     // used once, sparingly — live-status / hover pulse
        line: '#2B2B2B',      // hairline/border on black
        muted: '#8F8C82',     // secondary text on black
        // legacy keys kept so any un-migrated class doesn't break the build
        gold: '#F2E900',
        yellow: '#F2E900',
        black: '#000000',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        hard: '8px 8px 0 0 #000000',
        'hard-yellow': '8px 8px 0 0 #F2E900',
        'hard-sm': '4px 4px 0 0 #000000',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        blink: 'blink 1s steps(1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
