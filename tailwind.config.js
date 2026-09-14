/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        svoc: {
          s: '#ef4444',     // S: red
          v: '#3b82f6',     // V: blue
          o: '#22c55e',     // O: green
          c: '#f97316',     // C: orange
          m: '#9ca3af',     // M: gray
        },
      },
    },
  },
  plugins: [],
}
