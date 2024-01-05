/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
          'bg-color':'#FFFFEC',
          'primaryColor':{
              bgcolor:'#FFFFEC',
              primaryLight:'#F1E4C3',
              primaryDark:'#C6A969',
              label:'#597E52'
          }
      },
     
    },
  },
  plugins: [],
}