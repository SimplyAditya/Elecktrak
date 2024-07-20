/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themeBlue:"#329AA0",
        dashboardBlue:"#21ADB6"
      }
    },
  },
  plugins: [],
}