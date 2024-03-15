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
        "grey-900": "#090c11",
        "grey-800": "#161d29",
        "grey-700": "#202a38",
        "grey-600": "#39414e",
        "grey-500": "#4b5563",
        "grey-400": "#6b7280",
        "grey-300": "#9ca3af",
        "grey-200": "#d1d5db",
        "grey-100": "#e5e7eb",
      },
      fontSize: {
          "sm": "0.75rem",
          "base": "0.875rem",
          "lg": "1rem",
          "xl": "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "3rem"

      }
    },
  },
  plugins: [],
}

