/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '390',
        sm: '480px',
        md: '1024px',
        lg: '1020px',
        xl: '1440px',
        '2xl': '1910px'
      },
    },
  },
  plugins: [],
}

