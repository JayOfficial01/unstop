/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors : {
        smokeWhite : "#F4F4F4",
        primary : "#6358DC",
        black : "#1C1B1F",
        plantinum : "#E2E2E2",
        silver:"#BFBFBF"
      }
    },
  },
  plugins: [],
}

