/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(31 41 55 / var(--tw-bg-opacity, 1));"
      }
    },
  },
  plugins: [],
}