/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'mainShadow' : '2px 2px 5px rgba(	24, 27, 31)'
      },
      colors: {
        primary : "#23282D",
        secondary : "#2E353B",
        third : "#7269E3",
        fourth : "rgba(144, 105, 227)",
      },
      fontFamily: {
        'abril': ['Abril Fatface', 'cursive'],
        'rouge': ['Rouge Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'lora' : ['Lora', 'cursive'],
        'volkhov' : ['Volkhov', 'serif']
        },
    },
  },
  plugins: [],
}
