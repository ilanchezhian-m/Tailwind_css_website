/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screens :{
        'widescreen' : {'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen' : {'raw':'(m-aspect-ratio:13/20)'},
      },
   
    keyframes: {
      'open-menu':{
        '0%': {transfrom: 'scaleY(0)'},
        '80%': {transfrom: 'scaleY(0)'},
        '100%': {transfrom: 'scaleY(0)'},
      },
     },
       animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
       },
    },
  },
  plugins: [],
}

