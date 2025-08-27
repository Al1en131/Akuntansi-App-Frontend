/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3F51B5', 
        },
        secondary: {
          DEFAULT: '#FFA000',
        },
      },
    },
  },
  plugins: [],
}