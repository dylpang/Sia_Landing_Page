/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": '#FCF8FC',
        "off-black": '#0A0B0E',
        "blue-400" : '#2558E0',
        "blue-500" : '#0C44D7',
        "grey-100" : '#E5E7EB',
        "grey-300" : '#9CA3AF',
      },
      fontSize: {
        "h1" : "3rem",
        "h2" : "2rem",
        "h3" : "1.5 rem",
        "h4" : "1.25 rem",
        "h5" : "1rem",
      }
    },
  },
  plugins: [],
}

