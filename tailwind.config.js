/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Serif", 'serif'],
        bungee: ['Bungee Spice', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

