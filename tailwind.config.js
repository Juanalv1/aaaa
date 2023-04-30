/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/index.html", "./public/**/thank-you.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif']
      },
      colors:{
        primary: 'hsl(25, 97%, 53%)'
      },
    },
  },
  plugins: [],
}

