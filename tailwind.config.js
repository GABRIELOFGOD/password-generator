/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryBg": "#1E1E1E",
        "primary": "#F8EF00",
        "secondary": "#00F0FF",
        "bars": "#FF003C"
      }
    },
  },
  plugins: [],
}

