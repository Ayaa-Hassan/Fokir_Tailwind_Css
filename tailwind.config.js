/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js'],
  
  theme: {
    extend: {
      colors: {
        'primary': '#ff305b',
        'secondary': '#555',
        'tertiary': '#999',
        'quaternary': '#333',
        'quinary': ' #EC2403',
        'bg-G': ' #f1f1f1',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
      },
      backgroundImage: {
        'hero': "url('./img/slider/slider-02.jpg')",
        'hero2': "linear-gradient(rgba(0,0,0,0.8),rgba(0, 0, 0, 0.8))",
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('preline/plugin'),
  ],
  daisyui: {
    themes: ["light"],
  },
}